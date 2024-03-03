import React from 'react'
import servicebg from '../assets/images/servicebg.jpg'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='flex flex-col justify-center items-center' style={{backgroundImage: `url(${servicebg})`, backgroundSize: '100vw'}}>
        <div className='bg-white w-[25rem] flex items-center justify-center p-2 rounded-b-2xl'>
            <h1 className='font-Poppins font-bold text-black text-2xl'>Services that I provide</h1>
        </div>
        <div>
          <ServiceCard />
        </div>
    </div>
  )
}

export default Services