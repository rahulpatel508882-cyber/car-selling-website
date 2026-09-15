import React, { useEffect, useState } from "react";
import CarsCard from "./CarsCard";
import { apiBaseUrl, fallbackCars } from "../../data/carData";

const OurCars = () => {
  const [carsData, setCarsData] = useState(fallbackCars);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/api/cars`);
        if (!response.ok) {
          throw new Error('Failed to load cars');
        }
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setCarsData(data.map((item) => ({ ...item, img: item.image || item.img })));
        }
      } catch (error) {
        setCarsData(fallbackCars);
      }
    };

    loadCars();
  }, []);

  const addToCart = (car) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === car.id);
      if (existing) {
        return prev.map((item) =>
          item.id === car.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prev, { ...car, quantity: 1 }];
    });
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

  return (
    <section className="container pt-28 pb-20">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Luxury inventory</p>
        <h1 className="text-4xl font-black text-slate-900 md:text-6xl">
          Our <span className="text-primary">Cars</span>
        </h1>
      </div>

      <div className="mb-8 flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Selected cars</p>
          <h2 className="text-2xl font-black text-slate-900">{totalItems} items in cart</h2>
        </div>
        <div className="rounded-2xl bg-orange-50 px-4 py-3 text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Estimated total</p>
          <p className="text-2xl font-black text-primary">${totalPrice.toLocaleString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {carsData.map((item) => (
          <CarsCard
            key={item.id}
            id={item.id}
            img={item.img || item.image}
            name={item.name}
            type={item.type}
            year={item.year}
            mileage={item.mileage}
            transmission={item.transmission}
            fuel={item.fuel}
            price={item.price}
            onAddToCart={() => addToCart(item)}
          />
        ))}
      </div>
    </section>
  );
};

export default OurCars;
