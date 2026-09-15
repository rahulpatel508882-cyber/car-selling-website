import React from 'react'

const WhyUsCard = ({icon , title}) => {
  return (
    <div className='text-center p-8 space-y-4 bg-slate-100 hover:bg-secondary hover:text-white transition duration-200 ease-linear rounded-md cursor-pointer'>
    <p>{icon}</p>
      <h1 className='text-primary text-3xl font-bold'>{title}</h1>
      <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nam unde odit doloremque consequuntur quo? Quod incidunt veritatis blanditiis. Nobis explicabo laboriosam in rerum distinctio!</p>
      
    </div>
  )
}

export default WhyUsCard
