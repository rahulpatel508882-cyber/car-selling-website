import React from "react";
import img from "../../assets/img/vision.jpg";

const Vision = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row items-center gap-5 mt-16">
      {/* img section  */}
      <div className="w-full md:w-2/5">
        <img src={img} alt="img" className="rounded-lg" />
      </div>
      {/* content section  */}
      <div className="w-full md:w-2/4 space-y-4">
        <h1 className="text-4xl font-bold">Our Vision</h1>
        <h2 className="font-semibold text-lg lg:text-2xl">
          {" "}
          Empower individuals to achieve sistainable mobility solution and
          inspire a positive impact on the environment
        </h2>
        <p className="text-sm lg:text-base">
          Shaping the Future of Mobility with Innovation and Sustainability
        </p>
        <p className="text-sm lg:text-base">
          Our vision is to lead the future of mobility by creating innovative,
          eco-friendly, and reliable vehicles. We aim to revolutionize
          transportation through advanced technology, customer satisfaction, and
          a strong commitment to sustainability and safety worldwide.
        </p>
      </div>
    </div>
  );
};

export default Vision;
