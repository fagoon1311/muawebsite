import React from 'react'
import discover1 from '../assets/images/discover1.jpg'
import FAQ from './FAQ.js'
import faqbg from '../assets/images/faqbg.jpg'
import eye from '../assets/images/4111481.jpg'
import bride from '../assets/images/7170342.jpg'
import effect from '../assets/images/7376858.jpg'
const Discover = () => {
  return (
    <div>
        <div className='flex flex-col items-center mt-24   '>
            <h1 className='font-Poppins text-pink-500'>Our Services</h1>
            <h1 className='font-Poppins text-5xl font-bold py-4'>Face Makeup</h1>
        </div>
        <div className='flex flex-col items-center mt-4 '>
            <img src={discover1} className='h-[45rem] w-[70rem] rounded-md shadow-lg mt-10'></img>
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

        <div className='flex justify-between gap-10 mt-24 bg-slate-100 p-2'>
            <div className='w-1/3 flex flex-col items-center p-2 m-2 shadow-xl rounded-xl'>
                <img src={bride} alt='MAC Makeup' className='rounded-lg h-[20rem] w-[20rem]'></img>
                <h1 className='font-Poppins text-xl font-semibold p-2'>Bridal Makeup</h1>
                <p className='font-Poppins p-2'>Elevate your beauty experience with our tailored bridal makeup services. From flawless complexions to accentuated features, we specialize in creating stunning bridal looks that enhance your natural beauty and reflect your individual style. Trust us to make your special day even more memorable with our meticulous attention to detail and expert artistry.</p>
            </div>
            <div className='w-1/3 flex flex-col items-center p-2 m-2 shadow-xl rounded-xl'>
                <img src={eye} alt='eyemakeup' className='rounded-lg h-[20rem] w-[20rem]'></img>
                <h1 className='font-Poppins text-xl font-semibold p-2 '>Eye Makeup</h1>
                <p className='font-Poppins p-2'>Transform your look with our expertly crafted eye makeup services. Whether you desire a subtle enhancement or a bold statement, our skilled artists will create mesmerizing eye looks tailored to your unique style and preferences. From classic elegance to avant-garde creativity, let us accentuate your eyes and captivate with every glance.</p>
            </div>
            <div  className='w-1/3 flex flex-col items-center p-2 m-2 shadow-xl rounded-xl'>
                <img src={effect} alt='effect' className='rounded-lg h-[20rem] w-[20rem]'></img>
                <h1 className='font-Poppins text-xl font-semibold p-2'>Effect Makeup</h1>
                <p className='font-Poppins p-2'>Experience the magic of cosplay makeup with our specialized services. Unleash your imagination and bring your favorite characters to life with stunning transformations tailored to conventions, photoshoots, or special events. From intricate details to dramatic effects, our skilled artists will ensure you stand out in the crowd and embody the essence of your chosen character.</p>
            </div>
        </div>



        <div className='mt- mt-24'>
          <div className='flex flex-col items-center'>
            <h1 className='font-Poppins text-pink-500'>Frequently asked questions</h1>
            <h1 className='font-Poppins text-6xl p-3 font-semibold'>Popular Questions</h1>
          </div>
          <div style={{backgroundImage:`url(${faqbg})`, backgroundSize:'100vw'}}>
            <FAQ />
          </div>
        </div>
    </div>
  )
}

export default Discover