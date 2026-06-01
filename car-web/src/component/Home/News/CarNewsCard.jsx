import React from 'react'

const CarNewsCard = ({id , img , desc}) => {
  return (
    <div className='border-2 border-secondary rounded-md cursor-pointer w-64 h-72 flex flex-col overflow-hidden ' key={id}>
      <img src={img} alt='img' className='w-full h-40 object-cover'/>
      <h3 className='font-semibold text=lg p-3 flex-grow'>{desc}</h3>
    </div>
  )
}

export default CarNewsCard
