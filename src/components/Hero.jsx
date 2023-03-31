import React from 'react'
import bgImage from '../assets/homeAssets/hero.png'
import Button from './smComponents/Button';
import img1 from '../assets/homeAssets/hero-carousel1.png'
import img2 from '../assets/homeAssets/hero-carousel2.png'
import img3 from '../assets/homeAssets/hero-carousel3.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return ( 
    <section
    className="section relative h-auto pt-6 pb-20 sm:pt-10 md:pt-24 md:pb-24 bg-cover bg-center bg-no-repeat mt-[3.6rem] sm:mt-[3.5rem] lg:mt-[4.1rem] px-5 sm:px-12 md:pr-1 lg:overflow-hidden hero"
    style={{ backgroundImage: `url(${bgImage})` }}
   >
    <div className='flex justify-between relative z-10 text-white lg:w-[88%] lg:mx-[auto]'>
    <div className='w-100 md:w-5/12 md:-mt-11'>
        <h1 className='text-[#EB8C1A] text-[3.5rem] sm:text-[4.3rem] lg:text-[5rem] font-extrabold'>Explore</h1>
        <h1 className=' text-[#EB8C1A] text-[3.5rem] sm:text-[4.3rem] -mt-6 font-extrabold sm:mb-4'>Dubai</h1>
        <h4 className='mb-8 sm:mb-11 w-[90%] sm:w-[70%] md:w-[90%] text-[1.1rem] font-semibold'>Discover and experience the adventure dubai has to offer and our company is the best to ensure you have a good experience</h4>
        <Link to='/offers'  className="mt-8 text-sm border-none bg-[#EB8C1A] px-5 md:px-7 py-3 text-white rounded-lg font-semibold hover:bg-white hover:border-[#EB8C1A] hover:border hover:text-[#EB8C1A] transition duration-[.2s]">Get Started</Link>
    </div>
    <div className='hidden md:flex md:w-auto relative w-100'>
        <img src={img1} loading="lazy" alt="" className='md:w-[18rem] h-[18rem] boxs2 object-cover rounded-md' />
        <img src={img3} loading="lazy" alt="" className='absolute md:w-[17rem] h-[22rem] left-[25%] -top-8 boxs rounded-md'/>
        <img src={img2} loading="lazy" alt="" className='md:w-[18rem] h-[18rem] boxs2 object-cover rounded-md'/>
    </div>
        
    </div>
    
   </section>
  )
}

export default Hero;

