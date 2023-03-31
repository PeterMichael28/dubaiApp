import React from 'react'
import { BsArrowRight } from "react-icons/bs"
import img1 from '../assets/homeAssets/att1.png'
import img2 from '../assets/homeAssets/att2.png'
import img3 from '../assets/homeAssets/att3.png'
import img4 from '../assets/homeAssets/att4.png'

const Popular = () => {
  return (
    <section className='pt-10 px-4 popularSection'>
          <h1 className='text-[#EB8C1A] font-bold text-center text-[1.7rem] mb-6 md:text-[2rem] '>Popular Tourist Attraction</h1>
          <div className='flex flex-col items-center sm:flex-row sm:flex-wrap sm:px-4 md:px-10 lg:px-20 md:justify-center'>
              <div
                  className='popular2 lg:mb-8'
                  style={ { backgroundImage: `url(${ img1 })` } }>Burj Khalifa, Dubai</div>
              <div
                  className='popular1 lg:mb-8'
                  style={ { backgroundImage: `url(${ img2 })` } }>Dubai Aquarium, Dubai</div>
              <div
                  className='popular2'
                  style={ { backgroundImage: `url(${ img3 })` } }>Safari Desert, Dubai</div>
              <div
                  className='popular1'
                  style={ { backgroundImage: `url(${ img4 })` } }>Sheik Saeed Al-Maktoum House</div>
          </div>
          <a href="#" className='flex text-[#F58B8C] justify-end w-[95%] items-center text-[.9rem] font-semibold'>VIEW MORE <BsArrowRight className='ml-3' /></a>
    </section>
  )
}

export default Popular