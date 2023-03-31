import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import img1 from '../../assets/offerDetails/desertBanner.png'
import Slider from '../../components/slider';
import Button from '../../components/smComponents/Button';
import BookingForm from '../../components/BookingForm'
import BookingDetails from '../../components/BookingDetails'
import EachServices from '../../components/EachServices'
import CustomersReview from '../../components/CustomersReview';
import { useQuery } from 'react-query';
import { fetchData, url2 } from '../../utils/Queries';
import Loader from '../../components/smComponents/Loader';
import {
  useRecoilState
} from 'recoil';
import {bookingState} from '../../recoil/atom'
import { AnimatePresence, motion } from 'framer-motion';



const SingleActivities = () => {

  useEffect( () => {
    window.scrollTo( 0, 0 )
   }, [])
 
    //getting the slug from the params
 const {activityslug }= useParams();

    
//  fetching data
 const { isLoading, isError, data, error } = useQuery(
  ["singleActivity"],
  () => fetchData(`${url2}/${activityslug}`)
    );


    
 
  //recoil state
  const [bookings, setBookings] = useRecoilState(bookingState)



  //loading state
  if ( isLoading ) {
    return <Loader />
  }
    

  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={ { opacity: 0 } }
        transition={ { duration: 1 } }
        className='singleActivities'
      >
      {/* banner */}
      {data !== undefined && <div className='banner section relative bg-cover bg-center w-full h-[14vh] md:h-[22vh] lg:h-[25vh] flex flex-col justify-center items-center mt-14 px-5 sm:px-15 lg:px-0'
            style={ { backgroundImage: `url(${ data && data.images[ 0 ] })` } }>
            <p className={`text-center font-bold text-white text-[1.5rem] xs:text-[1.7rem] md:text-[2rem] lg:text-[2.7rem] lg:w-[80%]`}>{data.activityName}</p>
      </div>}
     
      <div className='px-4 md:px-10 lg:px-16 mt-7'>
        <h2 className='font-[700] text-[1.1rem] md:text-[1.4rem]'><span className='text-[#EB8C1A]'>Dubai: </span> {data.activityName}</h2>
        <div className='md:mt-1 flex gap-3 font-[600] text-[.78rem] md:text-[.9rem]'>
            <p className=''><span className='text-[#EB8C1A]'>Meeting Point:</span> La Suite</p>
            <p className=''><span className='text-[#EB8C1A]'>Duration: </span> 24hours</p>
        </div>
      </div>
       {/* slider and activities */}
      <section className='flex flex-col md:flex-row gap-5 lg:gap-10 px-[1.5rem] md:px-[3rem] lg:px-[7rem] mt-6 items-center justify-center sliderCon'>
        <div className='md:w-[50%]'>

        <Slider images={ data && data.images} />
        </div>
        <div className='flex flex-col gap-6 md:gap-4 px-4 py-5 shadow-lg md:ml-12 w-full md:w-fit'> 
          <h2 className='text-center text-[1.2rem] font-[600] text-[#EB8C1A]'>Activities</h2>

          { data.itenerary ? data.itenerary.map( itenerary => {
            return (
              <div className='flex px-2 justify-between items-center border-t-2 pt-4 gap-9' key={itenerary}>
            <span className='text-[.75rem] font-[600]'>{itenerary}</span>
            <div className='scale-[.7]'>
            <a className="mt-8 text-sm bg-[#EB8C1A] px-5 md:px-7 py-3 text-white rounded-lg font-semibold hover:bg-white hover:border-[#EB8C1A] hover:border hover:text-[#EB8C1A] transition duration-[.2s]">Included</a>
            </div>
          </div>
            )
          } ) : 
            
          <div className='flex px-2 justify-between items-center border-t-2 pt-4 gap-9'>
          <span className='text-[.75rem] font-[600]'>No Activities Yet</span>
          <div className='scale-[.7]'>
          <a className="mt-8 text-sm bg-[#EB8C1A] px-5 md:px-7 py-3 text-white rounded-lg font-semibold hover:bg-white hover:border-[#EB8C1A] hover:border hover:text-[#EB8C1A] transition duration-[.2s]">Included</a>
          </div>
        </div>
          }
          
          {/* <div className='flex px-2 justify-between items-center border-t-2 pt-4 gap-9'>
            <span className='text-[.75rem] font-[600]'>Sandboarding</span>
            <div className='scale-[.7]'>
            <Button text='Included' />
            </div>
          </div>
          <div className='flex px-2 justify-between items-center border-t-2 pt-4 gap-9'>
            <span className='text-[.75rem] font-[600]'>Activities</span>
            <div className='scale-[.7]'>
            <Button text='Included' />
            </div>
          </div>
          <div className='flex px-2 justify-between items-center border-t-2 pt-4 gap-9'>
            <span className='text-[.75rem] font-[600]'>Activities</span>
            <div className='scale-[.7]'>
            <Button text='Included' />
            </div>
          </div>
          <div className='flex px-2 justify-between items-center border-t-2 pt-4 gap-9'>
            <span className='text-[.75rem] font-[600]'>Activities</span>
            <div className='scale-[.7]'>
            <Button text='Included' />
            </div>
          </div> */}
        </div>
      </section>

      {/* description */}
      <section className='flex flex-col gap-5 px-[1.9rem] md:px-[3rem] lg:px-[7rem] lg:w-[89%] md:w-[90%] w-[100%] mt-10 description'>
        <h2 className='text-[#EB8C1A] text-[1.5rem] font-bold'>Description</h2>
        <hr className='w-full bg-[#CCCCCC] h-[2px]' />
        <p className=' text-[.85rem] md:text-[.95rem] font-[500] leading-6'>{data !== undefined && data.description}</p>
      </section>

      {/* About the activities */ }
      <section className='flex flex-col gap-5 px-[1.9rem] md:px-[3rem] lg:px-[7rem] lg:w-[85%] md:w-[90%] w-[100%] mt-12 aboutActivity'>
        <h2 className='text-[#EB8C1A] text-[1.5rem] font-bold'>About this activity
        </h2>
        <hr className='w-full bg-[#CCCCCC] h-[2px]' />
        { data.services.map( (service, i) => {
          return (
            <div key={service+i}>
            <div className='mb-4'>
              <h3 className='text-[.8rem] text-[#222222] font-semibold mb-1'>{service.serviceName}</h3>
              <p className='text-[.7rem] text-[#555555]'>{service.description}</p>
              </div>
              </div>
          )
        })}
         
    
      </section>

      {/* schedule form */ }

      <BookingForm data={data } />

      {/* <BookingDetails /> */ }
      {bookings.bookingStatus && <BookingDetails />}


      {/* terms and conditions */ }
      <section className='flex flex-col gap-4 px-[1.9rem] md:px-[3rem] lg:px-[4rem] lg:w-[80%] md:w-[90%] w-[100%] mt-16'>
        <h2 className='text-[#EB8C1A] text-[1.5rem] font-bold'>Terms and Conditions</h2>
        <hr className='w-full bg-[#CCCCCC] h-[2px]' />
        <ul className='list-disc text-[.6rem] leading-6 font-[600] md:text-[.8rem] text-[#222222]'>
          <li>Online Discount offer cannot be combined with any other promotions.</li>
          <li>All other promotions are applicable on publish price</li>
          <li>All Prices are on sharing basis.</li>
          <li>Private transport can be organized on request</li>
          <li>Suitable for all age groups</li>
          <li>Passengers with pre-existing medical conditions, especially heart ailments and back problems may be adversely affected and we do not recommend to participate in the journey so we will recommend to take an exclusive car so the driver can show you desert without dune bashing and send you direct in the camp.</li>
          <li>There will be no bally dance and musical programmes during Islamic Occasions and in the Holy Month of Ramadan as per law.</li>
          <li>100 % Charge for no-shows or cancellations made on same time</li>
          <li>Rates will be subject to change without further notice</li>
        </ul>
      </section>

      {/* you may also like section */ }
      {/* <section className='text-[#222222] px-[.8rem] md:px-[3rem] lg:px-[6rem] mt-14'>
        <h2 className='font-bold text-[1.2rem] md:text-[1.5rem] mb-3'>You may also like.........</h2>
        <div className='flex flex-col gap-6'>
          <EachServices />
          <EachServices />
          <EachServices />
          <EachServices />
        </div>
      </section> */}


      {/* Customers Review */ }
      <section className='flex flex-col gap-5 px-[1rem] md:px-[3rem] lg:px-[6rem] lg:w-[79%] md:w-[90%] w-[100%] mt-16'>
        <h2 className='text-[#EB8C1A] text-[1.5rem] font-bold'>Customer's Review</h2>
        
          <CustomersReview />
   
      </section>


      {/* banner and newsletter */ }
      <section className=' items-center justify-center grid grid-cols-1 md:grid-cols-2 px-[.4rem] md:px-[2rem] lg:px-[4rem] w-[100%] mt-16'>
        <img src={img1} alt="" className='hidden md:block h-[17rem] w-full '/>
        <div className='flex flex-col gap-3 bg-[#747DA9] py-6 md:py-3 text-white h-full justify-center px-3 md:px-6'>
          <h2 className='font-bold text-[1.3rem] xs:text-[1.5rem]'>Your Dubai itinerary is waiting</h2>
          <p className='font-semibold text-[.85rem]'>Receive a curated 48-hour itinerary featuring the most iconic experiences in Dubai, straight to your inbox.</p>

          <form action="" className='flex gap-2 mt-6 md:mt-8'>
            <input type="text" placeholder='Your email' required className='rounded-md px-3 w-[70%] text-[#222222] focus:border-none focus:outline-gray-500 placeholder:text-[.8rem] placeholder:font-semibold placeholder:text-gray-700' />
            <button className="text-sm w-[30%] bg-[#EB8C1A] px-2 md:px-7 lg:px-9 py-2 text-white rounded-md font-semibold hover:bg-white hover:border-[#EB8C1A] hover:border hover:text-[#EB8C1A] transition duration-[.2s]">Sign Up</button>
          </form>
        </div>
      </section>
    </motion.main>
    </AnimatePresence>
  )
}

export default SingleActivities