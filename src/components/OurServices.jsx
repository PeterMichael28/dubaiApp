import React from 'react'
import img1 from '../assets/homeAssets/service-img.png'

const OurServices = () => {
  return (
    <section className='bg-[#38414D] h-auto px-8 pt-6 pb-4 md:pb-12 lg:pb-16 xs:px-12 sm:px-3 md:px-5'>
          <h1 className='text-[#EB8C1A] text-center text-[1.8rem] xs:text-[2rem] font-bold mb-4 sm:text-[2.3rem] lg:font-extrabold lg:text-[2.6rem] lg:mb-8'>Our Services</h1>
          <div className='flex flex-col md:flex-row justify-between sm:w-[100%] sm:px-14 md:px-4 xs:items-center sm:items-start lg:px-24 lg:mx-auto'>
              <img src={img1} loading="lazy" alt='img' className='w-100 md:mr-10 md:w-[48%] mb-5 md:mb-0 lg:mr-12 lg:max-h-[330px]' />
              <div className='w-100 md:w-[48%]'>
                  <div className='lg:flex'>
                      <h5 className='hidden lg:flex mr-6 text-white pt-1'>01</h5>
                      <div>
                          <h1 className='services sm:mt-0'>Tour Guide</h1>
                          <p className='services-text'>We will give you the best in in touring around the whole dubai and guide you also in the making sure have you have the best you can ever imagine and beyond.</p>
                      </div>
                  </div>
                  <div className='lg:flex'>
                      <h5 className='hidden lg:flex mr-6 text-white pt-2'>02</h5>
                      <div>
                          <h1 className='services'>Affordable Hotels and Accommodation</h1>
                          <p className='services-text'>When touring around to your favorite’s spots and location around Dubai, we will provide affordable accommodation for you and your loved ones.</p>
                      </div>
                  </div>
                  <div className='lg:flex'>
                      <h5 className='hidden lg:flex mr-6 text-white pt-2'>03</h5>
                      <div>
                          <h1 className='services'>Exquisite Experience</h1>
                          <p className='services-text'>We tend to bring out the best and memorable experience when we take you on a tour to your desired location.</p>
                      </div>
                  </div>
              </div> 
          </div>
    </section>
  )
}



export default OurServices