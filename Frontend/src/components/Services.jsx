import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='h-[60vh] w-screen  flex flex-col  '>
      <div className="heading h-[20%] flex items-center justify-center  font-[brush] text-red-900 text-3xl text-center font-bold">
        what We Offer
      </div>
      <div className="services bg-green-400 h-[90%] flex flex-col items-center justify-center gap-2 ">
        <ServiceCard/>
        <h2 className='text-xl text-gray-50'>swip to explore <span></span> </h2>
      </div>
      
    </div>
  )
}

export default Services