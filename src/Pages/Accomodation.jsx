import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react'

const Accomodation = () => {

  useEffect( () => {
    window.scrollTo( 0, 0 )
   }, [])
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={ { opacity: 0 } }
        transition={{duration: 1}}
        className='mt-40'>
   
      <h1>Accommodation</h1>
      </motion.main>
      </AnimatePresence>
  )
}

export default Accomodation