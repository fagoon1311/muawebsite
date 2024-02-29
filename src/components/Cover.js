import React from 'react';
// import CoverImage from '../assets/images/coverpage.png';
import coverbg from '../assets/images/eye-shadows-with-lipsticks-white-table.jpg'

const Cover = () => {
  return (
    <div className='flex flex-row' style={{backgroundImage: `url(${coverbg})`, backgroundSize: '100vw'}}>
        <div className='flex flex-col items-center mx-20 w-1/2 py-32'> {/* Decreased mx-60 to mx-20 */}
            <h1 className="mb-4 text-7xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-8xl flex flex-col">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-800 from-pink-500">Professional</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-800 from-pink-500">Makeup Artist</span>
            </h1>
            <p className='font-Poppins p-2'> From elegant bridal looks to bold editorial styles, I specialize in creating personalized makeup experiences tailored to your unique personality and preferences. </p>
            <button type="button" 
            className="text-white font-Poppins text-3xl bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg  px-5 py-3.5 text-center me-2 mb-2 my-10">
                Booking Now</button>
        </div>
    </div>
);

}

export default Cover;
