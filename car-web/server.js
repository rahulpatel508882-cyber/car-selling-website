import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const cars = [
  {
    id: 1,
    name: 'BMW 7 Series',
    type: 'Luxury Sedan',
    year: '2024',
    mileage: '12,000 km',
    transmission: 'Automatic',
    fuel: 'Petrol',
    price: '55000',
    description: 'Executive luxury with premium comfort and cutting-edge technology.',
    image:
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    name: 'Mercedes-Benz S-Class',
    type: 'Executive Sedan',
    year: '2023',
    mileage: '18,500 km',
    transmission: 'Automatic',
    fuel: 'Hybrid',
    price: '45000',
    description: 'A refined sedan engineered for pure comfort and performance.',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    name: 'Nissan GT-R',
    type: 'Sports Coupe',
    year: '2022',
    mileage: '22,000 km',
    transmission: 'Automatic',
    fuel: 'Petrol',
    price: '42000',
    description: 'Track-inspired speed and bold styling with everyday usability.',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    name: 'Ferrari F8 Tributo',
    type: 'Supercar',
    year: '2024',
    mileage: '9,300 km',
    transmission: 'Automatic',
    fuel: 'Petrol',
    price: '52000',
    description: 'Italian performance with a dramatic and unmistakable presence.',
    image:
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    name: 'Bentley Continental',
    type: 'Grand Tourer',
    year: '2023',
    mileage: '15,400 km',
    transmission: 'Automatic',
    fuel: 'Petrol',
    price: '54000',
    description: 'Luxury, power, and handcrafted elegance in one grand drive.',
    image:
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    name: 'Land Rover Range Rover',
    type: 'Luxury SUV',
    year: '2024',
    mileage: '11,200 km',
    transmission: 'Automatic',
    fuel: 'Diesel',
    price: '56000',
    description: 'Adventure-ready luxury for every terrain and every journey.',
    image:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
  },
];

const bookings = [];

const news = [
  {
    id: 1,
    desc: 'Toyota continues to push hybrid innovation even in the electric vehicle era.',
    image:
      'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    desc: 'BMW Group India clocks its best annual sales, strengthening the luxury EV segment.',
    image:
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    desc: 'MG Astor 2026 gets a fresh design and updated features for modern buyers.',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    desc: 'Kia Sonet facelift drives into the market with a sharper design and better tech.',
    image:
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    desc: 'Vehicle inventory reaches a multi-year high as buyers return to the market.',
    image:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    desc: 'JLR India sales continue to rise with strong demand for premium SUVs.',
    image:
      'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80',
  },
];

app.get('/api/health', (_, res) => {
  res.json({ status: 'ok', message: 'Car website backend is running' });
});

app.get('/api/cars', (_, res) => {
  res.json(cars);
});

app.get('/api/featured-cars', (_, res) => {
  res.json(cars.slice(0, 6));
});

app.get('/api/news', (_, res) => {
  res.json(news);
});

app.get('/api/bookings', (_, res) => {
  res.json(bookings);
});

app.post('/api/bookings', (req, res) => {
  const { name, email, phone, car, message } = req.body || {};

  if (!name || !email || !phone || !car) {
    return res.status(400).json({ message: 'Name, email, phone, and preferred car are required.' });
  }

  const booking = {
    id: Date.now(),
    name,
    email,
    phone,
    car,
    message: message || '',
    createdAt: new Date().toISOString(),
  };

  bookings.unshift(booking);
  res.status(201).json({ message: 'Booking submitted successfully.', booking });
});

if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, 'dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    if (req.path.startsWith('/api/')) {
      return res.status(404).json({ message: 'API route not found' });
    }
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Car backend running on http://localhost:${PORT}`);
});
