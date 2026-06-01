import React from "react";
import img from "../../../assets/img/hero.jpg";

const Hero = () => {
  return (
    <div className="bg-black text-white">
      <div className="h-screen container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Content Section */}
        <div className="w-full md:w-2/4 space-y-5 mt-10">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Find Your Perfect Ride Today
          </h1>
          <p className="text-lg lg:text-2xl font-medium">
            Over 1000+ New Cars Available Hero
          </p>
          <p className="text-sm lg:text-base">
            Cars have become an essential part of our daily lives, providing us
            with convenience and mobility. They have revolutionized the way we
            travel, making it faster and more efficient!
          </p>
          <div className="flex gap-8">
            <button className="bg-primary py-2 px-6 rounded-md hover:scale-95 transition duration-150 ease-linear">
              Explore More
            </button>
            <button className="border-2 border-primary py-2 px-6 rounded-md hover:bg-primary transition duration-200 ease-linear">
              See Cars
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-2/4 mt-10 md:mt-0">
          <img
            src={img}
            alt="Car Hero"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
