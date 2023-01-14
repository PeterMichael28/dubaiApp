import React from 'react'
import HomeBanner from '../components/HomeBanner';
import img1 from '../assets/offerDetails/desertBanner.png'

import '../css/Services.css'
import EachServices from '../components/EachServices';

const Service = () => {
  return (
    <main>
      <HomeBanner text='DESERT SAFARI' btn='' img={ img1 } />
      <div className='md:px-[6rem] gap-8 md:gap-10 py-7 flex flex-col items-center justify-center md:mt-9'>
       <EachServices />
       <EachServices />
       <EachServices />
       <EachServices />
       <EachServices />
       <EachServices />
       <EachServices />
       <EachServices />
      </div>
    </main>
  )
}

export default Service