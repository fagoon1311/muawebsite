import React from 'react'
import discover1 from '../assets/images/discover1.jpg'
import FAQ from './FAQ.js'
const Discover = () => {
  return (
    <div>
        <div className='flex flex-col items-center mt-24   '>
            <h1 className='font-Poppins text-pink-500'>Our Services</h1>
            <h1 className='font-Poppins text-5xl font-bold py-6'>Face Makeup</h1>
        </div>
        <div className='flex flex-col items-center mt-4 '>
            <img src={discover1} className='h-[45rem] w-[70rem] rounded-md shadow-lg'></img>
            <div className='w-[80rem] mt-4'>
              <p className='font-Poppins'>Face makeup plays a crucial role in creating a polished and perfected appearance, 
              enhancing natural beauty while allowing for creativity and expression. 
              It involves a combination of techniques and products tailored to individual preferences and skin types, 
              resulting in a flawless and radiant complexion.
              Additionally, face makeup goes beyond mere aesthetics by offering skincare benefits. Many face makeup products 
              contain nourishing ingredients such as vitamins, antioxidants, 
              and SPF protection, which help to hydrate, protect, and improve the overall health of the skin. 
            </p>
            </div>

        </div>
        <div>
          <FAQ />
        </div>
    </div>
  )
}

export default Discover