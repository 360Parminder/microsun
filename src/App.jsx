import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage';
import Contactus from './components/pages/Contactus'; 
import Aboutus from './components/pages/Aboutus'
import Quote from "./components/pages/Quote";
import Hire from './components/pages/Hire';
import Faq from "./components/pages/Faq";
import Work from "./components/pages/Work";


function App() {

  return (
    <>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contactus/>} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/quote" element={<Quote/>} />
      <Route path="/hire" element={<Hire/>} />
      <Route path="/faq" element={<Faq/>}/>
       <Route path="/work" element={<Work /> } />

      
    </Routes>
    </>
  )
}

export default App
