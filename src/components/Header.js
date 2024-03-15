import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='grid grid-cols-12 grid-flow-col bg-slate-100'>
        <div className='col-span-3 px-2 py-2 font-DancingScript font-extrabold text-4xl'>By - "Simran Panchal"</div>
        <div className='col-span-9 flex justify-end items-center'>
            <ul className='flex font-Poppins '>
                <li className='px-10 py-3'>About</li>
                <Link to='/discover'><li className='px-10 py-3'>Services</li></Link>
                <li className='px-10 py-3'>Works</li>
                <li className='px-10 py-3'>Contact</li>
            </ul>
        </div>
        
    </div>
  )
}

export default Header