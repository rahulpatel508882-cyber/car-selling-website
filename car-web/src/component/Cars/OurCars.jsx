import React from "react";
import CarsCard from "./CarsCard"; // Adjust path as needed

const OurCars = () => {
  const carsData = [
    {
      id: 0,
      img: "/src/assets/img/car0.jpg",
      name: "BMW 7 Series",
      price: "55000",
    },
    {
      id: 1,
      img: "/src/assets/img/car2.jpg",
      name: "Mercedes Benz",
      price: "45000",
    },
    {
      id: 2,
      img: "/src/assets/img/car3.jpg",
      name: "Nissan GT-R",
      price: "42000",
    },
    {
      id: 3,
      img: "/src/assets/img/car4.jpg",
      name: "Ferrari",
      price: "52000",
    },
    {
      id: 4,
      img: "/src/assets/img/car5.jpg",
      name: "Bentley",
      price: "54000",
    },
    {
      id: 5,
      img: "/src/assets/img/car6.jpg",
      name: "Land Rover",
      price: "56000",
    },
  ];

  return (
    <div className="container pt-24">
      <div>
        <h1 className="font-bold text-4xl text-center">
          Our <span className="text-primary">Cars</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
        {carsData.map((item) => (
          <div key={item.id}>
            <CarsCard img={item.img} name={item.name} price={item.price} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCars;
