import { IonIcon } from '@ionic/react';
import { logoTwitter, logoFacebook, logoInstagram, logoLinkedin, logoYoutube, logoCodepen, logoGithub, star } from 'ionicons/icons';
import { easeOut, motion as m } from "framer-motion";
import Header from '../components/Header';
import Info from '../components/Cards/Info';
import Project from '../components/Cards/Project';

import project1 from '../assets/Images/Clothing.png';
import project2 from '../assets/Images/LMS.png';
import project3 from '../assets/Images/FoodPlanet.png';
import Clients from '../components/Cards/Clients';
import client1 from '../assets/Images/ceo.jpeg';
import bg from '../assets/Images/office.jpg';
import Footer from '../components/footer/Footer';
import logo from '../assets/Images/microsun.png';
import { Outlet } from 'react-router-dom';

const LandingPage = () => {
    return (
        <m.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.5, ease: easeOut }}
            className="w-screen bg-black flex flex-col items-center"
        >
            <Header />
            <div className="flex flex-col items-center"> 
                <Outlet /> 
            </div>
            {/* footer */}
            <Footer />
        </m.div>
    );
};

export default LandingPage;
