import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Nav = ({navbarOpen, setNavbarOpen}) => {
  return (
   <>
    <div
     className={
      `lg:flex flex-grow lg:items-center lg:justify-center" +
      ${navbarOpen
       ? " flex flex-col items-start lg:flex-row bg-[#2A2D46]"
       : " hidden"}
     `}
     id="example-navbar-danger"
    >
     <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
      <li className="nav-link">
       <NavLink
        to="/
        "
        end
        className={`px-3 py-1 flex items-center backdrop:hover:opacity-75 ${({
         isActive,
        }) => (isActive ? "active" : "inactive")}`} // setting the active class
        onClick={() => setNavbarOpen(!navbarOpen)} //closing the nav onClick
       >
        <span className="ml-3">Home</span>
       </NavLink>
      </li>
      
      {/* <li className="nav-link">
       <NavLink
        to="/service"
        className={`px-3 py-1 flex items-center hover:opacity-75 ${({
         isActive
        }) => (isActive ? "active" : "inactive")}`} // setting the active class
        onClick={() => setNavbarOpen(!navbarOpen)} //closing the nav onClick
       >
        <span className="ml-3">Our Service</span>
       </NavLink>
      </li>
       */}
       {/* <li className="nav-link">
       <NavLink
        to="/accommodation"
        className={`px-3 py-1 flex items-center hover:opacity-75 ${({
         isActive,
        }) => (isActive ? "active" : "inactive")}`} // setting the active class
        onClick={() => setNavbarOpen(!navbarOpen)} //closing the nav onClick
       >
        <span className="ml-3">Accommodation</span>
       </NavLink>
          </li> */}
          
      <li className="nav-link">
       <NavLink
        to="/offers"
        className={`px-3 py-1 flex items-center hover:opacity-75 ${({
         isActive,
        }) => (isActive ? "active" : "inactive")}`} // setting the active class
        onClick={() => setNavbarOpen(!navbarOpen)} //closing the nav onClick
       >
        <span className="ml-3">Our Services</span>
       </NavLink>
      </li>

      <li className="nav-link">
       <NavLink
        to="/contact-us"
        className={`px-3 py-1 flex items-center mr-6 hover:opacity-75 ${({
         isActive,
        }) => (isActive ? "active" : "inactive")}`} // setting the active class
        onClick={() => setNavbarOpen(!navbarOpen)} //closing the nav onClick
       >
        <span className="ml-3 mr-6">Contact Us</span>
       </NavLink>
      </li>
      
     </ul>
     <Link to='/offers'
      className="border border-[#EB8C1A] py-2 text-[.8rem] font-semibold px-4 text-[#EB8C1A] rounded-lg hover:bg-[#EB8C1A] hover:text-white transition duration-[.2s] mt-4 lg:ml-5 lg:mt-0"
     >
     Book Now
     </Link>
    </div>
   </>
  );
}

export default Nav