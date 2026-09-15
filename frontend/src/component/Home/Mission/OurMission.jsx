import React from "react";
import img from "../../../assets/img/car1.jpg";

const OurMission = () => {
  return (
    <div className="container my-10">
      <div>
        <h1 className="font-bold text-4xl text-center">
          Our <span className="text-primary">Mission</span>
        </h1>
      </div>
      <div className="flex flex-col justify-center md:flex-row items-center gap-5 mt-8">
        <div className="w-full md:w-2/4">
          <img src={img} alt="img" className="rounded-lg" />
        </div>
        {/* content section */}
        <div className="w-full md:w-2/4 space-y-4">
          <h1 className="font-bold text-primary text-lg lg:text-3xl">
            To create a community where every journey is extreordinary.
          </h1>
          <h2 className="font-semibold text-lg lg:text-2xl">
            Enpower individual to achieve sustainable mobility solution and
            inspire a positive impact on the environment.
          </h2>
          <p className="text-sm lg:text-base">
            Driving Innovation with Sustainable, Safe, and High-Performance
            Vehicle Solutions
          </p>
          <p className="text-sm lg:text-base">
            Our mission is to design and produce innovative, sustainable, and
            high-performance vehicles that prioritize safety, comfort, and
            environmental responsibility while delivering exceptional driving
            experiences and value to customers worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
