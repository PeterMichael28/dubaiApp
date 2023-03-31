import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const ContactDetails = ({ icon, text, details }) => {




 return (
  <div className="flex flex-col justify-center items-start md:space-y-1 space-y-2 w-full h-fit">
   <div className="flex md:flex-col space-x-3 md:space-y-2 md:space-x-0">
    {icon}
    <p className="text-gray-600 text-sm md:text-base font-semibold">
     {text}
    </p>
   </div>
   <p className="text-sm font-semibold text-[#EB8C1A]">
    {details}
   </p>
  </div>
 );
};

const ContactUs = () => {

  const [loading, setLoading] = useState(false)



  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();
    // console.log(form.current)
    setLoading(true)

    emailjs.sendForm('service_478smyu', 'template_8xaw1v5', form.current, 'vqrP8pcEfFpj4-p_V')
      .then((result) => {
        toast.success( "message sent successfully" );
        form.current.reset()
        setLoading(false)
      }, (error) => {
        toast.error( "failed to send message" );
        console.log(error)
        setLoading(false)
      });
  };



 return (
  <AnimatePresence>
   <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    className="mt-[3.6rem] sm:mt-[3.5rem] lg:mt-[4.2rem] flex flex-col items-center px-4"
   >
    <div className="mt-7">
     <h2 className="text-center text-[#EB8C1A] font-extrabold text-2xl md:text-4xl mb-2">
      Contact Us
     </h2>
     <p className="text-gray-400 font-semibold text-center text-sm md:text-base">
      We will love to hear from you and get a feedback from
      you
     </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 mt-7 justify-center items-start">
     {/* Contact us form */}
         <form
           className="flex flex-col justify-center space-y-4"
           ref={ form }
           onSubmit={ sendEmail }
         >
      <div className="flex flex-col justify-start space-y-1">
       <label htmlFor="fullName" className="text-sm">
        Full Name
       </label>
       <div className="flex items-center space-x-3 p-2 py-[5px] border border-gray-200 bg-[#f8fafc] rounded-sm">
        <FaUser className="text-sm" />
        <input
         type="text"
         name="user_name"
         className="border-none outline-none bg-transparent w-full"
         
         required
        />
       </div>
      </div>

      <div className="flex flex-col justify-start space-y-1">
       <label htmlFor="email" className="text-sm">
        Email Address
       </label>
       <div className="flex items-center space-x-3 p-2 py-[5px] border border-gray-200 bg-[#f8fafc] rounded-sm">
        <MdEmail className="text-sm" />
        <input
         type="text"
         name="user_email"
         className="border-none outline-none bg-transparent w-full"
         required
        />
       </div>
      </div>

      <div>
       <label htmlFor="message">Message</label>
       <div>
        <textarea
         name="message"
         id=""
         cols="30"
         rows="6"
         className=" outline-none bg-[#f8fafc] w-full border border-gray-200 p-3 rounded-sm"
         
         required
        ></textarea>
       </div>
      </div>

      <button className="bg-[#EB8C1A] py-3 text-white rounded-md font-semibold">
       {loading ? 'Sending...' : 'Send message'}
      </button>
     </form>

     {/* Contact Details */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-14 items-center mt-14 md:mt-5">
      <ContactDetails
       icon={
        <MdEmail className="text-[#EB8C1A] text-lg md:text-x" />
       }
       text="Email"
       details="Arabieniens@gmail.com"
      />
      <ContactDetails
       icon={
        <RiWhatsappFill className="text-[#EB8C1A] text-lg md:text-x" />
       }
       text="Whatsapp"
       details="+234800000000"
      />
      <ContactDetails
       icon={
        <BsTelephoneFill className="text-[#EB8C1A] text-lg md:text-x" />
       }
       text="Phone"
       details="+234 956 4564 245"
      />
      <ContactDetails
       icon={
        <MdLocationPin className="text-[#EB8C1A] text-lg md:text-xl" />
       }
       text="Office"
       details="100 Las Charles Street"
      />
     </div>
    </div>
   </motion.main>
  </AnimatePresence>
 );
};

export default ContactUs;
