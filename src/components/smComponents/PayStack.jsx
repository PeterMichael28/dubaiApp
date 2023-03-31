import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { MdFreeCancellation } from 'react-icons/md';
import { PaystackButton } from 'react-paystack'
import { Navigate, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { bookingState } from '../../recoil/atom';
import img1 from '/paystack.png'


const PayStack = ( { state } ) => {
  
  const [ bookings, setBookings ] = useRecoilState( bookingState )



 const navigate = useNavigate()

  const componentProps = {
    email: state.email,
    amount: bookings.totalAmount * 100,
    publicKey: 'pk_test_bb3331894f255038538be15b9019fe32cd261928',
    text: "Pay Now",
    onSuccess: () => {
      
      const userData = {
        firstname: state.name.split( ' ' )[ 0 ],
        lastname: state.name.split(' ')[1],
        email: state.email,
        country: state.country,
        numOfAdults: bookings.adult,
        numOfChildren: bookings.children,
        activitySlug: bookings.activitiesName,
        amountPaid: bookings.totalAmount,
        date: bookings.date,
        phone: state.phone
      }

      console.log(userData)
      const sendData = async () => {
        const res = await axios.post('https://api.arabianlens.com/bookings/new', userData, {withCredentials: true})
        console.log(res)
          toast.success( 'Thanks for booking, See you soon' )
        // navigate('/')
     
      }

     sendData()

        
      
    },
     
    onClose: () => toast.error( 'You cancelled your payment' ),
    
  }



  return (
    <div className='w-full sm:w-1/2 md:w-3/5'>
          <p className='font-bold text-[#2A2D46] mb-3 text-[1.2rem]'>Payment</p>
      <div>
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center gap-1'>
          <input type="radio" id='Paystack' defaultChecked/>
            <label htmlFor="Paystack" className='text-[.75rem] font-semibold text-[#2A2D46]'>Paystack</label>
          </div>
            <img src={img1} alt="" className='w-[40px]' />
        </div>
        <div className='flex flex-col gap-3 mt-6 text-[.7rem]'>
          <span> You will be redirected to PayPal to complete payment.</span>
         <span> By continuing, you agree to our general terms and condition and your activity’s provider’s terms and condition.</span>
        </div>
    </div>
        <div className='mt-4'>
          <PaystackButton {...componentProps} className='py-4 bg-[#253A72] text-white font-semibold text-[.9rem] w-44 rounded-md' />
      </div>

      
      <div className='text-[.65rem] text-[#2A2D46] font-light mb-4 flex items-center gap-1 w-full mt-5'>
      <MdFreeCancellation className='text-[.8rem] md:text-[1rem]' />
      Cancel before 24hours to get a full refund
      
      </div>
      </div>
  )
}

export default PayStack




// // fetch( 'https://api.arabianlens.com/bookings/new', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify( {
//     firstname: state.name.split( ' ' )[ 0 ],
//     lastname: state.name.split(' ')[1],
//     email: state.email,
//     country: state.country,
//     numOfAdults: bookings.adult,
//     numOfChildren: bookings.children,
//     activitySlug: bookings.activitiesName,
//     amountPaid: bookings.totalAmount,
//     date: bookings.date
//   })
// }).then((data) => {
//   toast.success( 'Thanks for booking, See you soon' )
//   console.log(data)
//   // navigate('/')
// })