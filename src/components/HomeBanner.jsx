import React from 'react'
import Button from './smComponents/Button';



const HomeBanner = ({text, btn, img}) => {
  return (
      <section className='banner section relative bg-cover bg-center w-full h-[37vh] md:h-[40vh] lg:h-[49vh] flex flex-col justify-center items-center mt-14 px-5 sm:px-15 lg:px-0'
          style={ { backgroundImage: `url(${ img })` } }>
          <p className={`text-center font-bold text-white text-[1.5rem] xs:text-[1.7rem] md:text-[2rem] lg:text-[2.7rem] ${btn ? 'lg:w-[90%]' : 'lg:w-[80%]'}`}>{text}</p>
          { btn && <Button text='Book Now'/>}
    </section>
  )
}

export default HomeBanner