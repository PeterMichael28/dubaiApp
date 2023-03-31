import React, { useEffect } from 'react'
import Attractions from '../components/Attractions';
import Hero from '../components/Hero';
import HomeBanner from '../components/HomeBanner';
import OurServices from '../components/OurServices';
import Popular from '../components/Popular';
import img7 from '../assets/homeAssets/home-banner.png'
import { AnimatePresence, motion } from 'framer-motion';

const Homepage = () => {

  


  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={ { opacity: 0 } }
        transition={{duration: 1}}
        className='overflow-x-hidden'>
      <Hero />
      <OurServices />
      <Popular />
      <Attractions />
      <HomeBanner text='WE HAVE THE BEST OFFER DESIGNED FOR YOU' btn='true' img={img7} />
      </motion.main>
      </AnimatePresence>
  )
}

export default Homepage;



 