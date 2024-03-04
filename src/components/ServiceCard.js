import React from 'react'
import hairmakeup from '../assets/images/hairmakeup.jpg'
import bridal from '../assets/images/bridal.jpg'
import eyemakeup from '../assets/images/eye_makeup.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Card = ({ info }) => {
    const {image, text} = info
    const [hover, setHover] = useState(false)

    return (
        <div className='relative p-2'>
            <img
                src={image}
                className="h-[20rem] w-[28rem] rounded-lg transition-all duration-300 cursor-pointer hover:blur-sm"
                alt="serviceImage"
                onMouseEnter={(e)=>{setHover(true)}}
                onMouseLeave={(e)=>{setHover(false)}}
            />
            {
                hover && 
                <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-Poppins font-bold text-3xl text-white'>{text}<br></br><Link to="/discover"><p className='text-sm text-pink-500'>Discover</p></Link></h1>  
            }
        </div>
    );
    
}

const ServiceCard = () => {
    const serviceData = [
        {
            image:hairmakeup,
            text:"Hair Makeup"
        },
        {
            image:bridal,
            text:"Bridal"
        }, 
        {
            image:eyemakeup,
            text:"Eye Makeup"
        }

    
    ]
  return (
    <div className='flex flex-row justify-evenly my-10'>
        {/* {<Card info={serviceData[1]}/>} */}
        {
            serviceData.map((data, index) => <Link to="/discover"><Card  key={index} info={data}/></Link>)
        }
    </div>
  )
}

export default ServiceCard