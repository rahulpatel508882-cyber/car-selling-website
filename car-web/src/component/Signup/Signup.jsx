import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    setError('');

    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill all fields.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5100/addUser', formData);

      if (res.status === 200 || res.status === 201) {
        setMsg('Account created successfully!');
        setFormData({ name: '', email: '', password: '' });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed, try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign <span className='text-primary'>Up</span></h2>

        {msg && <p className="text-green-600 mb-4 text-center">{msg}</p>}
        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Create Account
          </button>
           <button
            type="submit"
            className="text-blue-500 py-2 rounded hover:text-primary"
          >
            Log in/
          </button>
          <button
            type="submit"
            className="text-blue-500 py-2 rounded hover:text-primary px-1"
          >
            forget password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
