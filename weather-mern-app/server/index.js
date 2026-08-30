const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');

const Search = require('./models/Search');
const User = require('./models/User');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

app.use(cors());
app.use(express.json());

function generateToken(user) {
  return jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
}

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

async function connectDB() {
  const mongoUri = process.env.MONGO_URI;

  if (mongoUri) {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');
    return;
  }

  const memoryServer = await MongoMemoryServer.create();
  const uri = memoryServer.getUri();
  await mongoose.connect(uri);
  console.log('Connected to in-memory MongoDB');
}

function getWeatherCondition(code, isDay) {
  const map = {
    0: { label: 'Clear sky', icon: isDay ? '☀️' : '🌙' },
    1: { label: 'Mostly clear', icon: '🌤️' },
    2: { label: 'Partly cloudy', icon: '⛅' },
    3: { label: 'Overcast', icon: '☁️' },
    45: { label: 'Foggy', icon: '🌫️' },
    48: { label: 'Depositing rime fog', icon: '🌫️' },
    51: { label: 'Light drizzle', icon: '🌦️' },
    53: { label: 'Drizzle', icon: '🌦️' },
    55: { label: 'Heavy drizzle', icon: '🌧️' },
    56: { label: 'Freezing drizzle', icon: '🌧️' },
    57: { label: 'Heavy freezing drizzle', icon: '🌧️' },
    61: { label: 'Light rain', icon: '🌦️' },
    63: { label: 'Rain', icon: '🌧️' },
    65: { label: 'Heavy rain', icon: '🌧️' },
    66: { label: 'Freezing rain', icon: '🌧️' },
    67: { label: 'Heavy freezing rain', icon: '🌧️' },
    71: { label: 'Light snow', icon: '🌨️' },
    73: { label: 'Snow', icon: '❄️' },
    75: { label: 'Heavy snow', icon: '❄️' },
    77: { label: 'Snow grains', icon: '❄️' },
    80: { label: 'Rain showers', icon: '🌦️' },
    81: { label: 'Heavy showers', icon: '🌧️' },
    82: { label: 'Violent showers', icon: '⛈️' },
    85: { label: 'Light snow showers', icon: '🌨️' },
    86: { label: 'Heavy snow showers', icon: '🌨️' },
    95: { label: 'Thunderstorm', icon: '⛈️' },
    96: { label: 'Thunderstorm with hail', icon: '⛈️' },
    99: { label: 'Severe thunderstorm', icon: '⛈️' }
  };

  return map[code] || { label: 'Forecast', icon: '🌤️' };
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Weather API is running' });
});

app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    const token = generateToken(user);

    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(user);
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

app.get('/api/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Could not load profile' });
  }
});

app.get('/api/history', authMiddleware, async (req, res) => {
  try {
    const limit = Number(req.query.limit) || 5;
    const searches = await Search.find().sort({ searchedAt: -1 }).limit(limit).lean();
    res.json(searches);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather history' });
  }
});

app.get('/api/weather', authMiddleware, async (req, res) => {
  const city = req.query.city;

  if (!city || !city.trim()) {
    return res.status(400).json({ error: 'City name is required' });
  }

  try {
    const geoRes = await axios.get('https://geocoding-api.open-meteo.com/v1/search', {
      params: {
        name: city,
        count: 1,
        language: 'en',
        format: 'json'
      }
    });

    const place = geoRes.data.results?.[0];
    if (!place) {
      return res.status(404).json({ error: 'City not found' });
    }

    const weatherRes = await axios.get('https://api.open-meteo.com/v1/forecast', {
      params: {
        latitude: place.latitude,
        longitude: place.longitude,
        current: 'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m',
        daily: 'weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset',
        timezone: 'auto',
        forecast_days: 7
      }
    });

    const current = weatherRes.data.current;
    const daily = weatherRes.data.daily;
    const condition = getWeatherCondition(current.weather_code, current.is_day === 1);

    const payload = {
      city: place.name,
      country: place.country || place.admin1 || 'Unknown',
      latitude: place.latitude,
      longitude: place.longitude,
      temperature: current.temperature_2m,
      feelsLike: current.apparent_temperature,
      humidity: current.relative_humidity_2m,
      windSpeed: current.wind_speed_10m,
      condition: condition.label,
      icon: condition.icon,
      forecast: daily.time.map((date, index) => ({
        date,
        min: daily.temperature_2m_min[index],
        max: daily.temperature_2m_max[index],
        condition: getWeatherCondition(daily.weather_code[index], 1).label,
        icon: getWeatherCondition(daily.weather_code[index], 1).icon
      }))
    };

    await Search.create({
      city: payload.city,
      country: payload.country,
      temp: payload.temperature,
      condition: payload.condition,
      icon: payload.icon,
      searchedAt: new Date()
    });

    res.json(payload);
  } catch (error) {
    console.error('Weather fetch error:', error.message);
    res.status(500).json({ error: 'Unable to fetch weather data' });
  }
});

const clientDistPath = path.join(__dirname, '../client/dist');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(clientDistPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
}

async function seedDemoUser() {
  const demoEmail = 'admin@weatherapp.com';
  const demoPassword = 'admin123';

  const existingUser = await User.findOne({ email: demoEmail });
  if (!existingUser) {
    const hashedPassword = await bcrypt.hash(demoPassword, 10);
    await User.create({
      name: 'Admin User',
      email: demoEmail,
      password: hashedPassword
    });
    console.log('Seeded demo user: admin@weatherapp.com / admin123');
  }
}

async function startServer() {
  try {
    await connectDB();
    await seedDemoUser();
    app.listen(PORT, () => {
      console.log(`Weather API listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
}

startServer();
