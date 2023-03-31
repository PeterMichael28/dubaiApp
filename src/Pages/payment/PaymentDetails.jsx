import React, { useEffect, useRef, useState} from 'react'
import Button from '../../components/smComponents/Button';
import InforForm from '../../components/smComponents/InforForm';
import { data } from '../../utils/data';
import { PaystackButton } from 'react-paystack'
import PayStack from '../../components/smComponents/PayStack';
import { MdFreeCancellation } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { bookingState } from '../../recoil/atom';
import { Navigate, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const PaymentDetails = () => {

    useEffect( () => {
        window.scrollTo( 0, 0 )
       }, [])


    //recoil state
    const [ bookings, setBookings ] = useRecoilState( bookingState )
    
    const navigate = useNavigate()

    
//protecting the route 
    useEffect( () => {
        if ( !bookings.activitiesName ) {
            navigate('/')
        }
    }, [navigate])


//toggle between personal info and payment
    const [ readyToPay, setReadyToPay ] = useState( false )
    

    //handling form input
    const [ state, setState ] = useState( {
        name: '',
        email: '',
        country: '',
        phone: ''
    })
    

    //form input event handler
    const handleChange = e => {
      const {name, value} = e.target
      setState( { ...state, [name]: value} )
    }

    //handling the form submit
    const handleOnSubmit = (e) => {
        e.preventDefault()
        // console.log(state)

       
        setReadyToPay(true)
    }

        
  

  return (
    <AnimatePresence>
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={ { opacity: 0 } }
        transition={{duration: 1}}
        className="container mx-auto mt-[5rem] sm:mt-[5.5rem] lg:mt-[6rem] px-4 xs:px-16 sm:px-4 md:px-10 lg:px-28">
        <div className='flex gap-7 items-center font-semibold text-[1.1rem] mt-5 mb-10'>
              <p className={`${!readyToPay ? 'text-[#EB8C1A]' :' text-[#BDBDBD]'}  cursor-pointer`}>Personal Information</p>
              <p className={`${readyToPay ? 'text-[#EB8C1A]' :' text-[#BDBDBD]'}  cursor-pointer`}>Payment</p>
        </div>
        <div className={`flex items-start flex-col ${readyToPay && 'flex-col-reverse'} justify-between sm:flex-row gap-14 sm:gap-6 md:gap-16 lg:gap-24`}>
              { readyToPay ? <PayStack state={ state} /> : <InforForm handleChange={ handleChange} state={state} handleOnSubmit={handleOnSubmit} />}
              <div className='w-full sm:w-1/2 md:w-2/5'>
                  <p className='font-bold text-[#2A2D46] mb-3 text-[1.2rem]'>Order Summary</p>
                  <div className='flex flex-col  border border-[#EB8C1A] p-3 rounded-md shadow-lg'>
                      <div className='flex gap-3 mb-4'>
                          <img src={bookings.activitiesImage} alt="" className='w-1/2 h-28 rounded-md' />
                          <div className='w-1/2'>
                          <h2 className='text-[#EB8C1A] text-[1.2rem] font-bold'>Dubai: <span className='text-[#2A2D46] text-[.9rem]'>{bookings.activitiesName}</span></h2>
                          <p className='text-[#2A2D46] text-[.75rem] font-semibold'>
                         {` ${bookings.date} at ${bookings.time}`}
                          </p>
                            
                          </div>
                      </div>
                      {bookings.adult > 0 && <p className='text-[.8rem] text-[#2A2D46] font-semibold mb-1'>{bookings.adult} Adult(s) <span className='text-[.6rem]'>(12- 64)</span></p>}
                      {bookings.children > 0 &&  <p className='text-[.8rem] text-[#2A2D46] font-semibold mb-1'>{bookings.children} Children(s) <span className='text-[.6rem]'>(0- 11)</span></p>}
                      <p className='text-[.65rem] text-[#2A2D46] mb-4 flex items-center gap-1 w-full'>
                          <MdFreeCancellation className='text-[.8rem] md:text-[1rem]' />
                          Cancel before 24hours to get a full refund</p>
                      <div className='flex items-center justify-between'>
                          <h3 className='font-bold text-[#2A2D46] text-[1.2rem]'>Total Price</h3>
                          <div className='flex flex-col items-end'>
                              <h2 className='font-bold text-[1.4rem] tracking-wide'>${bookings.totalAmount}</h2>
                              <span className='text-[.7rem] font-light text-[#EB8C1A] '>All taxes and fees included</span>
                          </div>
                      </div>
                  </div>
              </div>

        </div>
          </motion.main>
    </AnimatePresence>
  )
}

export default PaymentDetails