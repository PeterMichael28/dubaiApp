import React from 'react'
import { GrDown } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const CustomersReview = () => {
    return (   
    <div className='flex flex-col gap-3 sm:gap-5'>
        <div className='flex gap-2 items-start'>
            <span className='bg-[#F58B8C] py-1 px-3 text-white font-bold text-[1.3rem] hidden sm:block'>N</span>
            <div className='p-3 flex flex-col gap-3 items-center border border-[#C4C4C4] rounded-md'>
                <div className='flex justify-between w-full items-center'>
                    <p className='text-[#1B309B] text-[.9rem] font-bold'>Nahan, Brazil</p>
                    <div className='flex justify-center items-center gap-1 text-[#FBB500]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                </div>
                <p className='text-[#222222] font-semibold text-[.7rem] md:text-[.8rem] '>The trip was excellent from start to finish we enjoyed every bit of it. Our tour guide was humble and he made the day special, taking photos for us all day and his driving through the sand dunes was brilliant fun. We loved the trip would highly recommend it to anyone and thank you to Gamal for a day full of memories</p>
            </div>
        </div>
        
        <div className='flex gap-2 items-start'>
            <span className='bg-[#F2C94C] py-1 px-3 text-white font-bold text-[1.3rem] hidden sm:block'>Y</span>
            <div className='p-3 flex flex-col gap-3 items-center border border-[#C4C4C4] rounded-md'>
                <div className='flex justify-between w-full items-center'>
                    <p className='text-[#1B309B] text-[.9rem] font-bold'>Yazid Abdulahi, Nigeria</p>
                    <div className='flex justify-center items-center gap-1 text-[#FBB500]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                </div>
                <p className='text-[#222222] font-semibold text-[.7rem] md:text-[.8rem] '>Amazing experience with Skyland. Picked up by an amiable driver at our hotel. The driver was amazing, and the ride was exciting, memorable, and unforgettable. There were lots of tasty food and drinks. Overall, the desert safari is essential for all tourists who visit Dubai.</p>
            </div>
            </div>
            
        <div className='flex gap-2 items-start'>
            <span className='bg-[#F58B8C] py-1 px-3 text-white font-bold text-[1.3rem] hidden sm:block'>P</span>
            <div className='p-3 flex flex-col gap-3 items-center border border-[#C4C4C4] rounded-md'>
                <div className='flex justify-between w-full items-center'>
                    <p className='text-[#1B309B] text-[.9rem] font-bold'>Paul, Nigeria</p>
                    <div className='flex justify-center items-center gap-1 text-[#FBB500]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                </div>
                <p className='text-[#222222] font-semibold text-[.7rem] md:text-[.8rem] '>The city tour and Dubai frame visit included package made my day. The city tour was nice but I plan to visit more often. The Dubai frame can be called as another fantastic concept of Dubai. Literally it’s just a frame that decorated with glittering golden color. But it offers very best panoramas of old and modern Dubai at a time. The southern side offers the views of modern Dubai and northern side is for olden Dubai.</p>
            </div>
        </div>
        
        
        <div className='flex gap-2 items-start'>
            <span className='bg-[#EB8C1A] py-1 px-3 text-white font-bold text-[1.3rem] hidden sm:block'>S</span>
            <div className='p-3 flex flex-col gap-3 items-center border border-[#C4C4C4] rounded-md'>
                <div className='flex justify-between w-full items-center'>
                    <p className='text-[#1B309B] text-[.9rem] font-bold'>Sarah Mensah, Ghana</p>
                    <div className='flex justify-center items-center gap-1 text-[#FBB500]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                       
                    </div>
                </div>
                <p className='text-[#222222] font-semibold text-[.7rem] md:text-[.8rem]'>Fabulous safari trip. For me, it’s a truly exceptional experience, and I will recommend it to my colleagues. Thank you, Skyland Tours. Riding the dunes with the tour guide was much fun and excitement. We never felt insecure when he was driving. Arabic fashionable dress wearing and taking photos. Thanks for a beautiful afternoon.</p>
            </div>
        </div>
        
        
        <div className='flex gap-2 items-start'>
            <span className='bg-[#747DA9] py-1 px-3 text-white font-bold text-[1.3rem] hidden sm:block'>B</span>
            <div className='p-3 flex flex-col gap-3 items-center border border-[#C4C4C4] rounded-md'>
                <div className='flex justify-between w-full items-center'>
                    <p className='text-[#1B309B] text-[.9rem] font-bold'>Britney, South Africa</p>
                    <div className='flex justify-center items-center gap-1 text-[#FBB500]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar/>
                        <AiOutlineStar />
                       
                    </div>
                </div>
                <p className='text-[#222222] font-semibold text-[.7rem] md:text-[.8rem] '>The Safari Tour was Excellent. The tour guide was amiable and a great driver. The driver was on time at our hotel for pickup. Dubai Desert safaris are the most famous attractions when you visit Dubai. I enjoyed it a lot and had a fabulous experience with camel riding dune bashing and so on. See you again and Thank you.</p>
            </div>
        </div>
    </div>
  )
}

export default CustomersReview;

