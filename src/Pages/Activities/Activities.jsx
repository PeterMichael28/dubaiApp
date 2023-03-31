import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import EachServices from "../../components/EachServices";
import HomeBanner from "../../components/HomeBanner";
import { fetchData, url } from "../../utils/Queries";
import img1 from "../../assets/offerDetails/desertBanner.png";
import { useQuery } from "react-query";
import Loader from "../../components/smComponents/Loader";
import { AnimatePresence, motion } from "framer-motion";
import Page404 from '../Page404'


const Activities = () => {


  useEffect( () => {
    window.scrollTo( 0, 0 )
   }, [])

    //getting the slug from the params
 const { slug } = useParams();

    
 //fetching data
 const { isLoading, isError, data, error } = useQuery(
  ["activitiesTypes"],
  () => fetchData(`${url}/${slug}`)
    );

 
    
  if ( data && data.activities.length < 1 ) {
    return <Page404 />
  }


  return (
    <AnimatePresence>
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={ { opacity: 0 } }
      transition={{duration: 1}}
      className='allServices'
    >
   <HomeBanner text={data !== undefined && data.activityTypeName} btn="" img={data !== undefined && data.image} />
   <div className="px-[.8rem] md:px-[6rem] gap-8 md:gap-10 py-7 flex flex-col items-center justify-center md:mt-9">
    {isLoading ? (
     <Loader />
    ) : isError ? (
     <p>{error.message}</p>
    ) : (
     data !== undefined &&
     data.activities.map((d) => {
        
      return (
        <Link to={`/activities/${slug}/${d.slug}`} key={d.slug}>
            <EachServices
             activityName={d.activityName}
             price={d.price}
             description={d.description}
             img={d.images[0]}
              />
            
        </Link>
      );
     })
    )}
   </div>
  </motion.main>
  </AnimatePresence>
 );
};

export default Activities;
