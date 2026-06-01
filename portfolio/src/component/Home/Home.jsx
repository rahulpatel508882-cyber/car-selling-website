import React from 'react'
import img from '../../assets/img.avif'
import TextChanges from '../TextChanges';
const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChanges/>
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          I am a passionate MERN stack developer with a strong foundation in
          building dynamic and responsive web applications. 
        </p>
        <button className='bg-[#465697] mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl'>Contact Me</button>
      </div>
      <div><img className='w-4/5' src={img} alt="" /></div>
    </div>
  );
}

export default Home
