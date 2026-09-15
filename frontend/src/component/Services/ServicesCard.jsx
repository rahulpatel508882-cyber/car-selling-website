import React from "react";

const ServicesCard = ({ icon, tittle }) => {
  return (
    <div className="text-center p-8 space-y-4 bg-slate-100 border-2 border-secondary hover:bg-secondary hover:text-white transition duration-300 ease-in-out rounded-md cursor-pointer">
      <p>{icon}</p>
      <h1 className="text-primary text-3xl font-bold">{tittle}</h1>
      <p className="text-sm">
        Our services include expert vehicle sales, reliable maintenance, and
        personalized customer support. We ensure quality, affordability, and
        satisfaction, offering comprehensive solutions to keep your car running
        smoothly and your driving experience enjoyable and safe
      </p>
    </div>
  );
};

export default ServicesCard;
