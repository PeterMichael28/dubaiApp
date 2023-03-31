import React, { useRef } from "react";
import { data } from "../../utils/data";

const InforForm = ({
 state,
 handleChange,
 handleOnSubmit,
}) => {
 return (
  <div className="w-full sm:w-1/2 md:w-3/5">
   <p className="font-bold text-[#2A2D46] mb-3 text-[1.2rem]">
    Fill in your personal details
   </p>

   {/* personal information form */}
   <form
    className="flex flex-col gap-4"
    onSubmit={handleOnSubmit}
   >
    <input
     type="text"
     className="w-full p-3 text-[#747DA9] border border-[#bdbdbd] rounded placeholder:text-[#747DA9] placeholder:font-semibold placeholder:text-[.8rem] outline-none text-sm"
     placeholder="Full Name"
     name="name"
     onChange={handleChange}
     value={state.name}
     required
    />
    <input
     type="email"
     className="w-full p-3 text-[#747DA9] border border-[#bdbdbd] rounded placeholder:text-[#747DA9] outline-none text-sm placeholder:font-semibold placeholder:text-[.8rem]"
     placeholder="Email"
     name="email"
     onChange={handleChange}
     value={state.email}
     required
    />
    <select
     name="country"
     id=""
     className="w-full py-3 p-3 text-[#747DA9] border border-[#bdbdbd] rounded outline-none text-sm font-semibold"
     onChange={handleChange}
     value={state.country}
     required
    >
     <option value="">Select Country</option>
     {data.map((d, i) => {
      return (
       <option value={d} key={d + i}>
        {d}
       </option>
      );
     })}
    </select>
    <input
     type="telephone"
     className="w-full p-3 text-[#747DA9] border border-[#bdbdbd] rounded placeholder:text-[#747DA9] outline-none text-sm placeholder:font-semibold placeholder:text-[.8rem]"
     placeholder="Phone Number"
     onChange={handleChange}
     value={state.phone}
     name="phone"
     required
    />
    <button className="text-sm bg-[#EB8C1A] px-5 md:px-7 py-3 text-white rounded-lg font-semibold hover:bg-white hover:border-[#EB8C1A] hover:border hover:text-[#EB8C1A] transition duration-[.2s]">
     Payment Details
    </button>
   </form>
  </div>
 );
};

export default InforForm;
