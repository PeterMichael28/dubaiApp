import React from 'react'
import { useRef, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import img1 from '../assets/homeAssets/act1.png'
import img2 from '../assets/homeAssets/act2.png'
import img3 from '../assets/homeAssets/act3.png'
import img4 from '../assets/homeAssets/act4.png'
import img5 from '../assets/homeAssets/act5.png'
import img6 from '../assets/homeAssets/act6.png'
import EachAttractions from './smComponents/EachAttractions';

const Attractions = () => {


    const rowRef = useRef(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <section className='bg-[#38414D] pt-4 pb-10 w-auto h-auto mt-10'>
         <p className='tracking-[.2rem] text-white font-semibold text-center text-[1.1rem] '>Alot of</p> 
          <h1 className='text-[#EB8C1A] font-bold tracking-wide text-[1.5rem] sm:text-[1.8rem] lg:text-[2.2rem] lg:font-extrabold text-center mb-4'>Activities for Everyone</h1>
          <div className='group relative'>
              <BsChevronLeft className={ `absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${ !isMoved && "hidden" } text-white hidden md:block` }
              onClick={() => handleClick("left")}/>
              <div className="flex flex-wrap md:flex-nowrap items-center px-5 xs:px-14 sm:px-8 justify-center md:justify-start md:px-0 md:pl-[6rem] overflow-x-hidden scrollbar-hide" ref={ rowRef }>
                  <EachAttractions img={img1} text='Desert Tour' />
                  <EachAttractions img={img2} text='Adventure' />
                  <EachAttractions img={img3} text='Speed Boating' />
                  <EachAttractions img={img4} text='Combo Tours' />
                  <EachAttractions img={img5} text='Sky-Diving' />
                  <EachAttractions img={img6} text='Luxury Tours' />
              </div>
              <BsChevronRight className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 text-white hidden md:block"
              onClick={() => handleClick("right")}/>
          </div>
    </section>
  )
}

export default Attractions;
