import { useEffect, useState } from 'react';

const defaultWeather = {
  city: 'New York',
  country: 'United States',
  temperature: 22,
  feelsLike: 21,
  humidity: 58,
  windSpeed: 12,
  condition: 'Clear sky',
  icon: '☀️',
  forecast: [
    { date: 'Mon', min: 19, max: 25, condition: 'Clear', icon: '☀️' },
    { date: 'Tue', min: 18, max: 26, condition: 'Partly cloudy', icon: '⛅' },
    { date: 'Wed', min: 17, max: 24, condition: 'Rain', icon: '🌧️' },
    { date: 'Thu', min: 16, max: 23, condition: 'Cloudy', icon: '☁️' },
    { date: 'Fri', min: 18, max: 27, condition: 'Clear', icon: '☀️' },
    { date: 'Sat', min: 20, max: 28, condition: 'Sunny', icon: '🌤️' },
    { date: 'Sun', min: 19, max: 27, condition: 'Clear', icon: '☀️' }
  ]
};

const getToken = () => localStorage.getItem('weather-token');

function App() {
  const [city, setCity] = useState('New York');
  const [weather, setWeather] = useState(defaultWeather);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [authMode, setAuthMode] = useState('login');
  const [authData, setAuthData] = useState({ name: '', email: '', password: '' });
  const [user, setUser] = useState(null);

  const apiRequest = async (url, options = {}) => {
    const token = getToken();
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(options.headers || {})
      }
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data.error || 'Request failed');
    }

    return data;
  };

  const fetchWeather = async (query = city) => {
    if (!query.trim()) return;

    setLoading(true);
    setError('');

    try {
      const data = await apiRequest(`/api/weather?city=${encodeURIComponent(query)}`);
      setWeather(data);
      loadHistory();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadHistory = async () => {
    try {
      const data = await apiRequest('/api/history?limit=5');
      setHistory(data);
    } catch (err) {
      console.error('History load error:', err);
    }
  };

  const loadProfile = async () => {
    try {
      const data = await apiRequest('/api/me');
      setUser(data);
    } catch (err) {
      console.error('Profile load error:', err);
      localStorage.removeItem('weather-token');
      setUser(null);
    }
  };

  const handleAuth = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const endpoint = authMode === 'login' ? '/api/auth/login' : '/api/auth/register';
      const payload = authMode === 'login'
        ? { email: authData.email, password: authData.password }
        : { name: authData.name, email: authData.email, password: authData.password };

      const data = await apiRequest(endpoint, {
        method: 'POST',
        body: JSON.stringify(payload)
      });

      localStorage.setItem('weather-token', data.token);
      setUser(data.user);
      setAuthData({ name: '', email: '', password: '' });
      fetchWeather(city);
      loadHistory();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('weather-token');
    setUser(null);
    setError('');
  };

  useEffect(() => {
    const token = getToken();
    if (token) {
      loadProfile();
      fetchWeather('New York');
      loadHistory();
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather(city);
  };

  if (!user) {
    return (
      <div className="app-shell auth-shell">
        <div className="auth-card">
          <div className="auth-header">
            <p className="eyebrow">Welcome</p>
            <h1>SkyCast</h1>
          </div>

          <div className="auth-toggle">
            <button
              type="button"
              className={authMode === 'login' ? 'active' : ''}
              onClick={() => setAuthMode('login')}
            >
              Login
            </button>
            <button
              type="button"
              className={authMode === 'register' ? 'active' : ''}
              onClick={() => setAuthMode('register')}
            >
              Register
            </button>
          </div>

          {error && <div className="error-banner">{error}</div>}

          <form onSubmit={handleAuth} className="auth-form">
            {authMode === 'register' && (
              <input
                type="text"
                value={authData.name}
                onChange={(e) => setAuthData({ ...authData, name: e.target.value })}
                placeholder="Full name"
                required
              />
            )}
            <input
              type="email"
              value={authData.email}
              onChange={(e) => setAuthData({ ...authData, email: e.target.value })}
              placeholder="Email address"
              required
            />
            <input
              type="password"
              value={authData.password}
              onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
              placeholder="Password"
              required
            />
            <button type="submit" className="primary-btn">
              {authMode === 'login' ? 'Login' : 'Create account'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <div className="container">
        <header className="topbar">
          <div>
            <p className="eyebrow">Weather dashboard</p>
            <h1>SkyCast</h1>
          </div>

          <div className="top-actions">
            <span className="user-pill">Hi, {user.name}</span>
            <button type="button" className="logout-btn" onClick={handleLogout}>Logout</button>
            <form className="search-bar" onSubmit={handleSubmit}>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Search city"
                aria-label="Search city"
              />
              <button type="submit" disabled={loading}>
                {loading ? 'Loading...' : 'Search'}
              </button>
            </form>
          </div>
        </header>

        {error && <div className="error-banner">{error}</div>}

        <main className="weather-panel">
          <section className="current-weather">
            <div className="city-row">
              <div>
                <p className="label">Location</p>
                <h2>{weather.city}, {weather.country}</h2>
              </div>
              <span className="condition-icon">{weather.icon}</span>
            </div>

            <div className="temp-row">
              <div className="temp">{Math.round(weather.temperature)}°C</div>
              <div className="temp-meta">
                <p>{weather.condition}</p>
                <p>Feels like {Math.round(weather.feelsLike)}°C</p>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-label">Humidity</span>
                <strong>{weather.humidity}%</strong>
              </div>
              <div className="stat-card">
                <span className="stat-label">Wind</span>
                <strong>{weather.windSpeed} km/h</strong>
              </div>
            </div>
          </section>

          <aside className="history-panel">
            <h3>Recent searches</h3>
            <ul>
              {history.length ? history.map((item) => (
                <li key={item._id || `${item.city}-${item.searchedAt}`}>
                  <div>
                    <strong>{item.city}</strong>
                    <span>{item.condition}</span>
                  </div>
                  <b>{Math.round(item.temp)}°C</b>
                </li>
              )) : (
                <li className="empty-state">No searches yet.</li>
              )}
            </ul>
          </aside>
        </main>

        <section className="forecast">
          <h3>7-Day Forecast</h3>
          <div className="forecast-grid">
            {weather.forecast.map((day) => (
              <div key={day.date} className="forecast-card">
                <span className="forecast-day">{day.date}</span>
                <div className="forecast-icon">{day.icon}</div>
                <strong>{Math.round(day.max)}°</strong>
                <span>{Math.round(day.min)}°</span>
                <small>{day.condition}</small>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
