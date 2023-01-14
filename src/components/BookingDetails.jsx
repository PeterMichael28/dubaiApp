import React from 'react'
import Button from './smComponents/Button';
import {MdFreeCancellation} from "react-icons/md";

const BookingDetails = () => {
  return (
      <section className='py-4 px-3 md:px-4 border border-[#EB8C1A] rounded-lg max-w-[550px] mt-3 mx-3 md:ml-16'>
          <div className='flex justify-between mb-6'>
              <h1 className='font-bold text-[.9rem] md:text-[1.3rem] text-[#2A2D46]'><span className='text-[#EB8C1A] '>Dubai:</span> Al Awir Safari Desert</h1>
              <div className='text-right p-0'>
                  <span className='text-[#747DA9] font-[600] text-[.9rem] md:text-[1.3rem]'>Total Price</span>
                  <h1 className='font-bold text-[1.3rem] md:text-[1.7rem] leading-6 md:leading-8 p-0'>$896.98</h1>
                  <span className='text-[#EB8C1A] font-[500] text-[.7rem] md:text-[.9rem] text-[500] text-left'>All taxes and fees included</span>
              </div>
          </div>
          <div className='flex'>
              <div className='flex items-start mr-6 xs:mr-16 md:mr-0 md:flex-1 flex-col'>
              <label htmlFor="select" className='text-[#747DA9] font-[500] text-[.9rem] md:text-[1.3rem]'>Starting time:</label>
              <div className="flex justify-center">
            <div className="mb-3">
            <select className="form-select w-[6.4rem] md:w-[10rem] form-select-lg mb-3
            appearance-none
            block
            px-2
            md:px-4
            py-2
            text-[.8rem]
            md:text-[1rem]
            font-semibold
            text-[#747DA9]
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-[#747DA9]
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-lg example">
                <option value='8am'>8:00 AM</option>
                <option value="12pm">12:00 PM</option>
                <option value="3pm">3:00 PM</option>
                <option value="6pm">6:00 PM</option>
            </select>
        </div>
            </div>
              </div>
              <div className='flex-1'>
                  <p className='text-[#747DA9] font-[500] text-[.9rem] md:text-[1.2rem]'>Price Breakdown</p>
                  <div className='border-t border-b py-2 flex flex-col gap-1 text-[#2A2D46]'>
                      <div className='flex justify-between gap-1 text-[.82rem] md:text-[1rem] font-semibold'>
                          <h2>Adult 1 x $896.98</h2>
                          <h2>$896.98</h2>
                      </div>
                      <div className='flex justify-between gap-1 text-[.7rem] md:text-[.9rem] font-semibold'>
                          <h2>Children 1 x $896.98</h2>
                          <h2 className=' text-[.82rem] md:text-[1rem]'>$896.98</h2>
                      </div>
                      
                  </div>
              </div>
          </div>
          
          <div className='flex flex-col md:flex-row justify-between md:items-center mt-11'>
                  <div className='flex items-center gap-1 text-[.7rem] md:text-[.9rem] font-semibold text-[#2A2D46]'>
                  <MdFreeCancellation className='text-[1rem] md:text-[1.2rem]' />
                  Cancel before 24hours to get a full refund
              </div>
              <div className='mt-5 md:mt-0 mx-auto'>
              <a href="#" className=" text-[1rem] bg-[#EB8C1A] px-5 md:px-7 py-3 text-white rounded-lg font-semibold hover:bg-white hover:border-[#EB8C1A] hover:border hover:text-[#EB8C1A] transition duration-[.2s]">Book Now</a>
              </div>
              </div>
    </section>
  )
}

export default BookingDetails