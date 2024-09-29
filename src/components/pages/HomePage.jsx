import Startp from '../comewithus/Startp';
import Consultation from '../consultation/Consultation';
import Feedback from '../feedback/Feedback';
import HeroSection from '../hero/HeroSection';
import Info from '../info/Info'
import Nav from '../nav/Nav';
import './HomePage.css';
import { IonIcon } from '@ionic/react';
import { logoTwitter, logoFacebook, logoInstagram, logoLinkedin, logoYoutube, logoCodepen,logoGithub,star } from 'ionicons/icons';
import {easeOut, motion as m} from "framer-motion";
import Footer from '../footer/Footer';
import Copyright from '../footer/Copyright';
import Fixednav from '../nav/Fixednav';


const HomePage=()=>{

    return(
        <>
           <m.div   variants={{
                hidden:{opacity:0, y:75},
                visible:{opacity:1,y:0}
            }}
            initial="hidden"
            animate="visible"
            transition={{duration:0.75, delay:0.25}}
             className=' hidden  social items-center text-3xl lg:flex align-middle flex-col fixed bottom-0 left-0 h-60vh w-20 text- gap-2'>
                <a className='hover:-translate-y-1 text-linkedin' href=""><IonIcon icon={logoLinkedin}/> </a>
                <a className='hover:-translate-y-1 text-twitter' href=""><IonIcon icon={logoTwitter}/> </a>
                <a className='hover:-translate-y-1 text-instagram' href=""><IonIcon icon={logoInstagram}/> </a>
                <a className='hover:-translate-y-1 text-black ' href=""><IonIcon icon={logoGithub}/> </a>
                <a className='hover:-translate-y-1 text-codepen' href=""><IonIcon icon={logoCodepen}/> </a>
         </m.div>

         <m.div   variants={{
                hidden:{opacity:0, y:75},
                visible:{opacity:1,y:0}
            }}
            initial="hidden"
            animate="visible"
            transition={{duration:0.75, delay:0.25}}
             className='mail hidden lg:flex flex-row items-center text-xl gap-1 fixed bottom-0 right-0 w-20 h-60vh text-text200'>
                <a className='hover:-translate-y-1 text-slate-600' href="">360.parminder@gmail.com</a>
         </m.div>

            <m.div initial={{opacity:0}} animate={{opacity:1}} 
            transition={{duration:1.5, ease:easeOut}}
            className='w-full h-full text-black bg-light' >
                    <div className='flex flex-col max-w-7xl mx-auto relative overflow-hidden items-center bg-light '>
                        <div className='md:h-screen w-full bg-hero-sm-light xl:bg-hero-lg bg-cover bg-no-repeat md:bg-right xl:bg-center'>
                        <Nav/>
                        <HeroSection/>
                        </div>
                        <Info/>
                        <Startp/>
                        <Feedback/>
                        <Consultation/> 
                        <Footer/>
                         <Copyright/>
                         <Fixednav page="Home" />
                    </div>

            </m.div>
      

        
        
         
        </>
    )
}
export default HomePage;