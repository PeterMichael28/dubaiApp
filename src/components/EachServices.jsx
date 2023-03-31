import React from 'react'
import img1 from '../assets/offerDetails/desertBanner.png'
import Button from './smComponents/Button';

const EachServices = ({activityName, price, description, img}) => {
  return (
    <div className='ser-con flex flex-col md:flex-row gap-4 md:gap-10 items-center justify-center px-3 md:px-5 py-8 md:py-5 w-full shadow-lg rounded-md cursor-pointer transition-all hover:shadow-xl eachSer'>
 
          <img src={img} alt="" className='rounded-md w-[200px]' />

    
          <div className='flex flex-col gap-1 md:gap-3'>
            <span className='text-[#2A2D46] text-[1rem] font-[500]'>Safari</span>
        <h1 className='text-[#EB8C1A] text-[1.3rem] md:text-[1.5rem] font-bold'>{activityName }</h1>
            <span className='text-[#2A2D46] text-[1.1rem] font-semibold'>Dubai</span>
            <p className='text-[#222222] text-[.80rem] xs:text-[.85rem] md:text-[.9rem] font-[500] line-clamp-3'>{description}</p>
            <div className='mt-2 md:mt-0 flex gap-3 font-[500]'>
            <p className='text-[.8rem] font-semibold text-black'><span className='text-[#EB8C1A]'>Meeting Point:</span> La Suite</p>
            <p className='text-[.8rem] font-semibold text-black'><span className='text-[#EB8C1A]'>Duration: </span> 24hours</p>
            </div>
          </div>
          <div className='flex flex-col gap-5 text-[#222222] md:items-center w-full justify-center'>
            <div className='flex md:flex-col md:gap-5 gap-2 items-center'>
              <span className='font-semibold md:font-[500]'>Starting with:</span>
            <h1 className='md:text-[1.7rem] font-bold'>${price}</h1>
            </div>
            <div className='mt-1 md:mt-6'>
            <Button text='Details' />
            </div>
          </div>
        </div>
  )
}

export default EachServices