import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './Layouts';
import Accomodation from './Pages/Accomodation';
import Homepage from './Pages/Homepage';
import Offers from './Pages/Offers';
import Service from './Pages/Service';
import './App.css'

function App() {


  return (
    <>
    <Routes>
     <Route path="/plcDubaiTouristApp/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="/plcDubaiTouristApp/service" element={<Service />} />
      <Route path="/plcDubaiTouristApp/accommodation" element={<Accomodation />} />
      <Route path="/plcDubaiTouristApp/offers" element={<Offers />} />
     
     </Route>
    </Routes>
   </>
  )
}

export default App
