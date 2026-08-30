import React from "react";

const CarsCard = ({ id, img, name, type, year, mileage, transmission, fuel, price, onAddToCart }) => {
  return (
    <div className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(249,115,22,0.16)]" key={id}>
      <div className="relative overflow-hidden">
        <img src={img} alt={name} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-slate-800 shadow-sm">
          Certified
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-sm">
          New
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{type}</p>
            <h1 className="mt-1 text-2xl font-black text-slate-900">{name}</h1>
          </div>
          <div className="rounded-xl bg-orange-50 px-2.5 py-1.5 text-right">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">Price</span>
            <span className="text-xl font-black text-primary">${price}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
          <div className="rounded-xl bg-slate-100 px-3 py-2">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">Year</span>
            <span className="mt-1 block font-semibold text-slate-800">{year}</span>
          </div>
          <div className="rounded-xl bg-slate-100 px-3 py-2">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">Mileage</span>
            <span className="mt-1 block font-semibold text-slate-800">{mileage}</span>
          </div>
          <div className="rounded-xl bg-slate-100 px-3 py-2">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">Transmission</span>
            <span className="mt-1 block font-semibold text-slate-800">{transmission}</span>
          </div>
          <div className="rounded-xl bg-slate-100 px-3 py-2">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">Fuel</span>
            <span className="mt-1 block font-semibold text-slate-800">{fuel}</span>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button className="flex-1 rounded-xl bg-secondary px-4 py-3 text-sm font-bold text-white transition hover:bg-primary">
            Book Now
          </button>
          <button
            type="button"
            onClick={onAddToCart}
            className="flex-1 rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-primary hover:bg-orange-50 hover:text-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarsCard;
