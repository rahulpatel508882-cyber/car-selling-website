import React from "react";
import img from "../../assets/img/approach.jpg";

const Approach = () => {
  return (
    <div className="flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14">
      {/* content section  */}
      <div className="w-full md:w-2/4 space-y-4">
        <h1 className="text-4xl font-bold">Our Approach</h1>
        <h2 className="font-semibold text-lg lg:text-2xl">
          {" "}
          Driving the Future with Innovative, Sustainable, and High-Performance
          Vehicles Built for a Better Tomorrow
        </h2>
        <p className="text-sm lg:text-base">
          Delivering Smart, Sustainable, and Customer-Centric Automotive
          Solutions Globally
        </p>
        <p className="text-sm lg:text-base">
          Our approach focuses on integrating cutting-edge technology,
          environmental responsibility, and customer feedback into every stage
          of vehicle development. We strive for continuous improvement, aiming
          to deliver reliable, safe, and innovative mobility solutions that meet
          modern needs and future expectations.
        </p>
      </div>
      {/* img section  */}
      <div className="w-full md:w-2/5">
        <img src={img} alt="img" className="rounded-lg" />
      </div>
    </div>
  );
};

export default Approach;
