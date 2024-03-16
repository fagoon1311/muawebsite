import React from 'react'
import {Instagram} from 'lucide-react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-white via-pink-300 to-pink-500 flex flex-col mt-10'>
        <h1 className='font-DancingScript mx-5'>By - Simran Panchal</h1>
        <div className='grid grid-cols-6'>
            <div className='col-span-2'>
              <h1 className='font-Poppins text-2xl px-10 pt-10'>Quicklinks</h1>
              <div><ul className='px-10'>
                <li className='font-Poppins mt-4'>About</li>
                <li className='font-Poppins'>Services</li>
                <li className='font-Poppins'>Works</li>
                </ul></div>
            </div>
            <div className='col-span-2'>
                <h1 className='font-Poppins text-2xl'>Socials</h1>
                  <div>
                    <ul >
                    <li className='font-Poppins  mt-4 flex items-center'><img className='h-5 w-5 mr-2' src='https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png' alt='Instagram Icon'></img>
                      makeoverby_simranpanchal
                    </li>
                    </ul>
                  </div>
                <h1 className='font-Poppins text-2xl mt-6'>Timings</h1>
                <div>
                    <ul className='mt-2 mx-4'>
                    <li className='font-Poppins'>Mon - Fri .............. 10:00AM to 8PM</li>
                    <li className='font-Poppins'>Sat ........................... 10:00AM to 6PM</li>
                    <li className='font-Poppins'>Sun ............................................. Closed</li>


                    </ul>
                  </div>
                </div>
            <div className='col-span-2'>
              <h1 className='font-Poppins text-2xl'>Contacts</h1>
              <div>
                <ul >
                  <li className='font-Poppins font-semibold mt-4'>Mobile:</li>
                  <li className='font-Poppins mx-4 p-2'>+91-7291898877</li>
                  <li className='font-Poppins font-semibold'>Email:</li>
                  <li className='font-Poppins mx-4 p-2'>panchalsimran6@gmail.com</li>
                  <li className='font-Poppins font-semibold'>Location</li>
                  <li className='font-Poppins mx-4 p-2'>New Delhi</li>
                </ul>
              </div>
            </div>


        </div>
    </div>
  )
}

export default Footer