import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeaturedCard from "./FeaturedCard";
import { apiBaseUrl, fallbackCars } from "../../../../data/carData";

const Featured = () => {
  const [carsData, setCarsData] = useState(fallbackCars);

  useEffect(() => {
   const loadCars = async () => {
     try {
       const response = await fetch(`${apiBaseUrl}/api/featured-cars`);
       if (!response.ok) {
         throw new Error('Failed to load featured cars');
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

  const settings = {
   dots: false,
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   speed: 2000,
   autoplaySpeed: 2000,
   cssEase: "linear",
   arrows: false,
   responsive: [
     {
       breakpoint: 1023,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true,
       },
     },
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
         initialSlide: 2,
       },
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         initialSlide: 2,
       },
     },
   ],
  };

  return (
   <div className="container mt-14">
     <h1 className="font-bold text-4xl text-center">
       Featured<span className="text-primary"> Cars</span>
     </h1>

     <p className="text-center text-xl">This is the Featured Cars of your dream life for the earth!</p>
     <div>
       <Slider {...settings}>
         {carsData.map((item) => (
           <FeaturedCard
             key={item.id}
             img={item.img || item.image}
             name={item.name}
             price={item.price}
           />
         ))}
       </Slider>
     </div>
   </div>
  );
};

export default Featured;
