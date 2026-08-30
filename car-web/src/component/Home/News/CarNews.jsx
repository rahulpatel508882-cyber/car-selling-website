import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import CarNewsCard from "./CarNewsCard";
import { apiBaseUrl, fallbackNews } from "../../../data/carData";

const CarNews = () => {
  const [newsData, setNewsData] = useState(fallbackNews);

  useEffect(() => {
    const loadNews = async () => {
     try {
       const response = await fetch(`${apiBaseUrl}/api/news`);
       if (!response.ok) {
         throw new Error('Failed to load news');
       }
       const data = await response.json();
       if (Array.isArray(data) && data.length > 0) {
         setNewsData(data.map((item) => ({ ...item, img: item.image || item.img })));
       }
     } catch (error) {
       setNewsData(fallbackNews);
     }
    };

    loadNews();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
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
       Cars <span className="text-primary">News & Advices</span>
     </h1>
     <p className="text-center text-xl">
       Electric Car Sales Surge Worldwide Amid Growing Demand for Sustainability?
     </p>
     <div className="grid grid-cols-1 gap-5 mt-8 ">
       <Slider {...settings}>
         {newsData.map((item) => (
           <CarNewsCard key={item.id} img={item.img || item.image} desc={item.desc} />
         ))}
       </Slider>
     </div>
    </div>
  );
};

export default CarNews;
