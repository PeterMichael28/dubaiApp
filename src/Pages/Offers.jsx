import React, { useEffect } from 'react'
import HomeBanner from '../components/HomeBanner';
import img1 from '../assets/homeAssets/act1.png'
import img2 from '../assets/homeAssets/act2.png'
import img3 from '../assets/homeAssets/act3.png'
import img4 from '../assets/homeAssets/act4.png'
import img5 from '../assets/homeAssets/act5.png'
import img6 from '../assets/homeAssets/act6.png'
import EachAttractions from '../components/smComponents/EachAttractions';
import img7 from '../assets/homeAssets/home-banner.png'
import { url, fetchData } from "../utils/queries";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { AnimatePresence, motion } from 'framer-motion';

const Offers = () => {

  useEffect( () => {
    window.scrollTo( 0, 0 )
   }, [])

  //fetching data
 const { isLoading, isError, data } = useQuery(
  ["activities"],
  () => fetchData(url),
  {
   refetchOnMount: true,
   refetchOnWindowFocus: false,
   refetchIntervalInBackground: false,
  }
 );

  return (
    <AnimatePresence>
    <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={ { opacity: 0 } }
        transition={{duration: 1}}
        className="mt-[3.6rem] sm:mt-[3.5rem] lg:mt-[4.2rem] ">
   <HomeBanner
    text="WE HAVE THE BEST ACTIVITIES DESIGNED JUST FOR YOU "
    btn=""
    img={img7}
   />
   <section className="flex flex-wrap items-center mt-[3rem] md:mt-[4rem] justify-center px-3 xs:px-12 sm:px-4 md:px-5 lg:px-12">
    {isLoading ? (
     <p>Loading...</p>
    ) : (
     data !== undefined &&
     data.activityTypes.map((d) => {
      return (
       <Link
        to={`/activities/${d.slug}`}
        key={d.slug}
        className='w-[100%] sm:mr-3 sm:w-[48%] h-[23rem] md:w-[20rem] lg:w-[22rem] flex items-end px-5 pb-5 mb-6 md:mb-0relative md:ml-5 md:min-w-[20rem] md:h-[400px] rounded-lg'
       >
        <EachAttractions
         img={`${d.image}`}
         text={d.activityTypeName}
         
        />
       </Link>
      );
     })
    )}
   </section>
      </motion.main>
      </AnimatePresence>
 );
};

export default Offers