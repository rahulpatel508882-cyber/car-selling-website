import React, { useState } from 'react';
import { apiBaseUrl } from '../../data/carData';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  car: 'BMW 7 Series',
  message: '',
};

const BookingForm = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch(`${apiBaseUrl}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Unable to submit booking request');
      }

      setStatus('Your booking request has been submitted successfully.');
      setForm(initialForm);
    } catch (error) {
      setStatus(error.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container my-16 px-4 md:px-8">
      <div className="rounded-3xl overflow-hidden bg-slate-900 text-white shadow-2xl">
        <div className="grid gap-0 md:grid-cols-2">
          <div className="bg-gradient-to-br from-primary to-orange-500 p-8 md:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Book a test drive
            </p>
            <h2 className="text-3xl font-black md:text-5xl">Drive your dream car.</h2>
            <p className="mt-5 max-w-md text-base text-white/80 md:text-lg">
              Book a private test drive and our experts will help you choose the right luxury ride for your lifestyle.
            </p>
            <div className="mt-8 space-y-4 text-sm md:text-base">
              <div>
                <span className="block font-semibold">Office</span>
                <span>24 Market Street, Downtown</span>
              </div>
              <div>
                <span className="block font-semibold">Call us</span>
                <span>+1 (800) 555-0148</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 text-slate-800 md:p-12">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-medium">
                Full Name
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none transition focus:border-primary focus:bg-white"
                  placeholder="Your name"
                />
              </label>

              <label className="block text-sm font-medium">
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none transition focus:border-primary focus:bg-white"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-medium">
                Phone
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none transition focus:border-primary focus:bg-white"
                  placeholder="+1 234 567 890"
                />
              </label>

              <label className="block text-sm font-medium">
                Preferred Car
                <select
                  name="car"
                  value={form.car}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none transition focus:border-primary focus:bg-white"
                >
                  <option>BMW 7 Series</option>
                  <option>Mercedes-Benz S-Class</option>
                  <option>Nissan GT-R</option>
                  <option>Ferrari F8 Tributo</option>
                  <option>Bentley Continental</option>
                  <option>Land Rover Range Rover</option>
                </select>
              </label>
            </div>

            <label className="block text-sm font-medium">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none transition focus:border-primary focus:bg-white"
                placeholder="Tell us about your preferred schedule or car requirements"
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-bold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? 'Submitting...' : 'Book Now'}
              </button>

              {status ? (
                <span className="text-sm text-emerald-600">{status}</span>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
