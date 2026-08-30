import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Home/Hero/Hero'
import Featured from '../component/Home/Hero/Featured/Featured'
import BookingForm from '../component/Home/BookingForm'
import WhyUs from '../component/Home/WhyUs/WhyUs'
import OurMission from '../component/Home/Mission/OurMission'
import CarNews from '../component/Home/News/CarNews'
import Footer from '../component/Home/Footer'

const Home = () => {
  return (
    <>
      <Navbar/> 
      <Hero/>
      <Featured/>
      <BookingForm/>
      <WhyUs/>
      <OurMission/>
      <CarNews/>
      <Footer/>
    </>
  )
}

export default Home
