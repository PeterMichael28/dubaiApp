import React from 'react'
import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter } from "react-icons/sl";
import { BsYoutube } from "react-icons/bs";  
import { MdOutlineEmail } from "react-icons/md";  
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
   <footer className="w-full bg-[#38414D] pb-10 pt-10 px-10 flex flex-col items-center mt-16">
      <div className='w-full flex flex-col items-center md:flex-row md:justify-between md:items-start text-center lg:px-24'>
        <div className='flex flex-col sm:flex-row md:text-left sm:space-x-12 mb-10'>
          <div>
          <h1 className='font-bold mb-4 md:mb-6 text-[#EB8C1A]'>EXPLORE</h1>
            <ul className='mb-10 sm:mb-0'>
            <Link to='/activities/desert-tour'>
            <li className='mb-3 font-semibold text-[.9rem] text-white'>Desert Tour</li>
              </Link>
              
              <Link to='/activities/speed-boating'>
              <li className='mb-3 font-semibold text-[.9rem] text-white'>Speed Boating</li>
              </Link>

              <Link to='/activities/skydiving'>
              <li className='mb-3 font-semibold text-[.9rem] text-white'>Sky Diving</li>
              </Link>

              <Link to='/activities/luxury-tour'>
              <li className='mb-3 font-semibold text-[.9rem] text-white'>Luxury Tour</li>
              </Link>
              

              <Link to='/activities/combo-tours'>
              <li className='mb-3 font-semibold text-[.9rem] text-white'>Combo Tours</li>
              </Link>
              

              <Link to='/activities/tourist-attraction'>
              <li className='mb-3 font-semibold text-[.9rem] text-white'>Tourist Attraction</li>
              </Link>
              
            </ul>
          
          </div>
          <div>
          <h1 className='font-bold mb-4 md:mb-6 text-[#EB8C1A]'>Top Places </h1>
            <ul className='mb-10 sm:mb-0'>
              
              <li className='mb-3 font-semibold text-[.9rem] text-white'>Burj Khalifa</li>
              <li className='mb-3 font-semibold text-[.9rem] text-white'>Dubai Aquatic</li>
              <li className='mb-3 font-semibold text-[.9rem] text-white'>Legoland Water Park</li>
              <li className='mb-3 font-semibold text-[.9rem] text-white'>Hero OdySEA</li>
              <li className='mb-3 font-semibold text-[.9rem] text-white'>Cold Souk</li>
              <li className='mb-3 font-semibold text-[.9rem] text-white'>The Green Planet</li>
            </ul>
         
          </div>
          <div>
          <h1 className='font-bold mb-4 md:mb-6 text-[#EB8C1A]'>COMMUNITY</h1>
            <ul className='mb-10 sm:mb-0'>
              <li className='mb-3 font-semibold text-[.9rem] text-white'>Accommodation</li>
              <li className='mb-3 font-semibold text-[.9rem] text-white'>Travel Guide</li>
              <li className='mb-3 font-semibold text-[.9rem] text-white'>Contact Us</li>
            </ul>
          
          </div>
        </div>
        <div className='md:text-right'>
          <h1 className='font-bold mb-4 md:mb-6 text-[#EB8C1A]'>CONNECT WITH US</h1>
          <div className='flex justify-between mb-6 text-[#EB8C1A]'>
            <SlSocialFacebook className='hover:scale-150 transition duration-200 ease-out scale-110' />
            <SlSocialInstagram className='hover:scale-150 transition duration-200 ease-out scale-110' />
            <SlSocialTwitter className='hover:scale-150 transition duration-200 ease-out scale-110' />
            <BsYoutube className='hover:scale-150 transition duration-200 ease-out scale-110'/>
            <MdOutlineEmail className='hover:scale-150 transition duration-200 ease-out scale-110' />
            </div>
            <ul >
              <li className='mb-3 font-semibold text-[.9rem] text-white'>Office</li>
              <li className='mb-3 font-semibold text-[.9rem] text-white'>Dubaio</li>
              <li className='mb-3 font-semibold text-[.9rem] text-white'>Dubai (ZIP 12214)</li>
              <li className='mb-3 font-semibold text-[.9rem] text-white'>(+55) 48126055</li>
            </ul>
          
        </div>
     </div>
     <p className='text-white text-[.7rem] mt-8'>2022 © Dubai. All rights reserved</p>
   </footer>
  ); 
}

export default Footer