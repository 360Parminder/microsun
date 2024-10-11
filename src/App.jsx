import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css'
import LandingPage from "./pages/LandingPage";


function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      {/* <Route path="/contact" element={<Contactus/>} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/quote" element={<Quote/>} />
      <Route path="/hire" element={<Hire/>} />
      <Route path="/faq" element={<Faq/>}/>
       <Route path="/work" element={<Work /> } /> */}

      
    </Routes>
  )
}

export default App
