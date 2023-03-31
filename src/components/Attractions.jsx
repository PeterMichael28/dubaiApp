import React, { useEffect } from "react";
import { useRef, useState } from "react";
import {
 BsChevronLeft,
 BsChevronRight,
} from "react-icons/bs";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { url, fetchData } from "../utils/queries";
import EachAttractions from "./smComponents/EachAttractions";
import Loader from "./smComponents/Loader";

const Attractions = () => {


  // fetching attrcations
 const { isLoading, isError, error, data } = useQuery(
  ["activities"],
  () => fetchData(url)
  );
  
 

  //ref for the attraction slider
 const rowRef = useRef(null);
  const [ isMoved, setIsMoved ] = useState( false );
  
  const [hoverState, setHoverState] = useState(false)

  
  //handle slider function
 const handleClick = (direction) => {
  setIsMoved(true);
  if (rowRef.current) {
   const { scrollLeft, clientWidth } = rowRef.current;

   const scrollTo =
    direction === "left"
     ? scrollLeft - clientWidth
     : scrollLeft + clientWidth;
   rowRef.current.scrollTo({
    left: scrollTo,
    behavior: "smooth",
   });
  }
 };

 return (
  <section className="bg-[#38414D] pt-4 pb-10 w-auto h-auto mt-10">
   <p className="tracking-[.2rem] text-white font-semibold text-center text-[1.1rem] ">
    A lot of
   </p>
   <h1 className="text-[#EB8C1A] font-bold tracking-wide text-[1.5rem] sm:text-[1.8rem] lg:text-[2.2rem] lg:font-extrabold text-center mb-4">
    Activities for Everyone
   </h1>
   <div className="group relative">
    <BsChevronLeft
     className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
      !isMoved && "hidden"
     } text-white hidden md:block`}
     onClick={() => handleClick("left")}
    />
    <div
     className="flex flex-wrap md:flex-nowrap items-center px-5 xs:px-14 sm:px-8 justify-center md:justify-start md:px-0 md:pl-[6rem] overflow-x-hidden scrollbar-hide"
     ref={rowRef}
    >
     {isLoading ? (
      <Loader />
     ) : (
      data !== undefined &&
      data.activityTypes.map((d) => {
       return (
        <Link
         to={`/activities/${d.slug}`}
         key={d.slug} className='w-[100%] sm:mr-3 sm:w-[48%] h-[23rem] md:w-[20rem] lg:w-[22rem] flex items-end px-5 pb-5 mb-6 md:mb-0 relative md:ml-5 md:min-w-[20rem] md:h-[400px] rounded-lg sinAttraction'
           onMouseEnter={ () => setHoverState( true ) }
           onMouseOut={() => {setHoverState(false)}}
        >
         <EachAttractions
          img={d.image}
          text={d.activityTypeName}
         />
        </Link>
       );
      })
     )}
    </div>
    <BsChevronRight
     className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 text-white hidden md:block"
     onClick={() => handleClick("right")}
    />
   </div>
  </section>
 );
};

export default Attractions;
