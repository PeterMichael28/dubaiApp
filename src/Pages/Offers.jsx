import React from 'react'
import HomeBanner from '../components/HomeBanner';
import img1 from '../assets/homeAssets/act1.png'
import img2 from '../assets/homeAssets/act2.png'
import img3 from '../assets/homeAssets/act3.png'
import img4 from '../assets/homeAssets/act4.png'
import img5 from '../assets/homeAssets/act5.png'
import img6 from '../assets/homeAssets/act6.png'
import EachAttractions from '../components/smComponents/EachAttractions';
import img7 from '../assets/homeAssets/home-banner.png'

const Offers = () => {
  return (
    <main className='mt-[3.6rem] sm:mt-[3.5rem] lg:mt-[4.9rem] '>
      <HomeBanner text='WE HAVE THE BEST ACTIVITIES DESIGNED JUST FOR YOU ' btn='' img={img7} />
      <section className='flex flex-wrap items-center mt-[3rem] md:mt-[4rem] justify-center px-3 xs:px-12 sm:px-4 md:px-5 lg:px-12'>
            <EachAttractions img={img1} className='mb-8' text='Desert Tour' />
            <EachAttractions img={img2} className='mb-8' text='Adventure' />
            <EachAttractions img={img3} className='mb-8' text='Speed Boating' />
            <EachAttractions img={img4} className='mb-8' text='Combo Tours' />
            <EachAttractions img={img5} className='mb-8' text='Sky-Diving' />
            <EachAttractions img={img6} className='mb-8' text='Luxury Tours' />
      </section>
    </main>
  )
}

export default Offers