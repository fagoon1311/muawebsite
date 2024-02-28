import React from 'react';
import CoverImage from '../assets/images/coverpage.png';

const Cover = () => {
  return (
    <div className='bg-slate-100 flex flex-row'>
        <div className='flex items-center mx-60'>
            <h1 className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl flex flex-col">
                <span class="text-transparent bg-clip-text bg-gradient-to-r to-pink-800 from-pink-500">Professional</span>
                <span class="text-transparent bg-clip-text bg-gradient-to-r to-pink-800 from-pink-500">Makeup Artist</span>
            </h1>
        </div>
        <div>
            <img src={CoverImage} alt="Cover"></img>
        </div>
    </div>
  );
}

export default Cover;
