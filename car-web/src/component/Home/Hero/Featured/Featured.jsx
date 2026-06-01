import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
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
    name: "Mercdes benz",
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
    name: "Bently",
    price: "54000",
  },
  {
    id: 5,
    img: "/src/assets/img/car6.jpg",
    name: "Land Rover",
    price: "56000",
  },
];
  const settings = {
    dots: false,
    infinie: true,
    slidesToShow: 3,
    SlidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShowcar5: 3,
                SlidesToScroll: 3,
                infinie: true,
                dots: true
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                SlidesToScroll: 2,
                initialSlide: 2
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                SlidesToScroll: 1,
                initialSlide: 2
            },
        },
    ],
  };
  return (
    <div className="container mt-14">
      <h1 className="font-bold text-4xl text-center">
        Featured<span className="text-primary"> Cars</span>
      </h1>

      <p className="text-center text-xl" > This is the Featured Cars of your dream life for the earth !</p>
      <div>
        <Slider {...settings}>
            {carsData.map((item)=> (
                <FeaturedCard
                key={item.id}
                img={item.img}
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
