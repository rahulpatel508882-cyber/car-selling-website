import React from "react";

const FeaturedCard = ({ id, img, name, price }) => {
  return (
    <div className="border-2 border-secondary bg-slate-100 text-black rounded-xl mb-2 mt-8 cursor-pointer hover:scale-95 hover:bg-slate-200 transition duration-200 ease-linear">
      <div>
        <img
          src={img}
          alt="img"
          className='rounded-t-xl w-full h-56 md:h-72 lg:h-80 object-cover'
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-xl text-primary pt-2">{name}</h1>
        <div className="flex gap-10 pt-2">
          <h2 className="font-medium text-lg ">Starting at $ {price} /</h2>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
