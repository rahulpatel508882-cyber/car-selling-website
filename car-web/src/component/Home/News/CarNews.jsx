import React from "react";
import Slider from "react-slick";
import CarNewsCard from "./CarNewsCard";

const CarNews = () => {
  const newsData = [
    {
      id: 0,
      img: "/src/assets/img/news1.jpg",
      desc: "Toyota totus internal combustion engine potential,even in ev age",
    },
    {
      id: 1,
      img: "/src/assets/img/news2.jpg",
      desc: "BMW Group India clocks best-ever annual sales in 2025,leads luxury electic car segment",
    },
    {
      id: 2,
      img: "/src/assets/img/news3.jpg",
      desc: "MG Astor 2026 launched in India price starts Rs 9.99 lakh",
    },
    {
      id: 3,
      img: "/src/assets/img/car00.jpg",
      desc: "Kia Sonet facelift launched in India at Rs 7.99 lakh, Tata Nexon & Maruti Suzuki Brezza",
    },
    {
      id: 4,
      img: "/src/assets/img/news5.jpg",
      desc: "First Shift: New-vehicles inventory reaches 3- year high",
    },
    {
      id: 5,
      img: "/src/assets/img/news6.jpg",
      desc: "JLR India sales rise 75% in Q3 on robust demand for Range Rover velar and Defender",
    },
  ];

  const settings = {
    dots: false,
    infinie: true,
    slidesToShow: 3,
    SlidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShowcar5: 3,
          SlidesToScroll: 3,
          infinie: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          SlidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          SlidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className= 'container mt-14'>
      <h1 className='font-bold text-4xl text-center'>
        Cars <span className='text-primary'>News & Advices</span>
      </h1>
      <p className='text-center text-xl'>
        Electric Car Sales Surge Worldwide Amid Growing Demand for Sustainability?
      </p>
     <div className='grid grid-cols-1 gap-5 mt-8 '>
       <Slider {...settings}>
        {newsData.map((item) => (
          <CarNewsCard key={item.id} img={item.img} desc={item.desc}/>
        ))}

      </Slider>
     </div>
    </div>
  );
};

export default CarNews;
