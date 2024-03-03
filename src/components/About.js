import React from 'react'
import dp from '../assets/images/simran.jpg'

const About = () => {
  return (
    <div className='bg-slate-100  w-[100vw] flex justify-center'>
        <div className='relative bg-white p-4 w-[90vw] flex flex-col bottom-10 border border-slate-100 shadow-2xl'>
            <div>
                <h1 className='font-Poppins text-2xl font-semibold mx-10'>About Me</h1>
            </div>
            <div className='flex flex-row my-4'>
                <img src={dp} alt = 'asd' className='h-[20rem] w-[15rem] mx-10'></img>
                <p className='font-Poppins my-16'>
                    Welcome to my world of beauty! 
                    <br></br>
                    <br></br>
                    Welcome to my vibrant world of beauty! I'm Simran, a passionate and versatile makeup artist renowned for my mastery of various 
                    makeup hacks and an impeccable eye for fine details. With over [X] years of experience in the industry, I've honed my skills to perfection, 
                    specializing in creating stunning makeup looks tailored to diverse occasions. From crafting glamorous bridal styles that capture the essence of romance to perfecting chic day-to-day looks that exude effortless elegance, my mission is to enhance your natural beauty while reflecting your unique personality. 
                    Join me on this enchanting beauty journey, where every brushstroke is infused with creativity, care, and a touch of magic, making you feel confident, empowered, and radiant for every event and moment in life.
                </p>

            </div>
        </div>
</div>

  )
}

export default About