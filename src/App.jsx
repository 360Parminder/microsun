import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css'
import LandingPage from "./pages/LandingPage";
import Aboutus from "./pages/Aboutus";
import Home from "./pages/Home";
import Contactus from "./pages/Contactus";


function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} >
      <Route index element={<Home/>}/>
      <Route path="aboutUs" element={<Aboutus/>} />
      <Route path="contact" element={<Contactus/>} />
      </Route>
      {/* 
      <Route path="/quote" element={<Quote/>} />
      <Route path="/hire" element={<Hire/>} />
      <Route path="/faq" element={<Faq/>}/>
       <Route path="/work" element={<Work /> } /> */}

      
    </Routes>
  )
}

export default App
