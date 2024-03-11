import React from 'react'
import Cover from '../components/Cover';
import Services from '../components/Services';
import About from '../components/About';
import Works from './Works';


const MainPage = () => {
  return (
    <div>
      <Cover />
      <About />
      <Services />
      <Works />
    </div>
  )
}

export default MainPage