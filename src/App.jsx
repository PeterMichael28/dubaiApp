import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './Layouts';
import Accomodation from './Pages/Accomodation';
import Homepage from './Pages/Homepage';
import Offers from './Pages/Offers';
import ContactUs from './Pages/ContactUs';
import Service from './Pages/Service';
import './App.css'
import Activities from './Pages/Activities/Activities';
import SingleActivities from './Pages/Activities/SingleActivities';

import PaymentDetails from './Pages/payment/PaymentDetails';
import Page404 from './Pages/Page404';
import { AnimatePresence } from 'framer-motion';



function App() {

  
  return (
    <>
      <Routes>
  
     <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="/activities/:slug" element={<Activities />} />
      <Route path="/activities/:slug/:activityslug" element={<SingleActivities />} />
      <Route path="/payment" element={ <PaymentDetails />} />
      {/* <Route path="/service" element={<Service />} /> */}
      {/* <Route path="/accommodation" element={<Accomodation />} /> */}
      <Route path="/offers" element={<Offers />} />
      <Route path="/contact-us" element={<ContactUs />} />
     <Route path='/*' element={<Page404 />} />
     </Route>

    </Routes>
   </>
  )
}

export default App
