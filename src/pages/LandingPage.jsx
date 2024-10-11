import { IonIcon } from '@ionic/react';
import { logoTwitter, logoFacebook, logoInstagram, logoLinkedin, logoYoutube, logoCodepen,logoGithub,star } from 'ionicons/icons';
import {easeOut, motion as m} from "framer-motion";
import Header from '../components/Header';
import Info from '../components/Cards/Info';



const LandingPage=()=>{

    return(
            <m.div initial={{opacity:0}} animate={{opacity:1}} 
            transition={{duration:1.5, ease:easeOut}}
            className='w-screen h-screen bg-black flex flex-col items-center ' >
                <Header/>
                <div className='w-[90vw] bg-[#18181b] flex flex-col rounded-lg p-5 ' >
                    <p className='border-2 border-[var(--primary-color)] text-[var(--primary-color)] w-[8rem] rounded-xl items-center justify-center flex'>OUR SERVICES</p>
                    <div className='flex flex-row justify-between mt-4'>
                        <h3 className=' w-2/6 font-semibold text-4xl'>We Build Best Service Experience</h3>
                        <p className='w-2/6 text-lg'>we belive that creativity, collaboration and adaptability are the keys to success in this fast-changing digital era.</p>
                    </div>
                    <div className='grid grid-cols-3 gap-5 w-full mt-5'>
                    <Info title={"UI/UX"} content={"UI/UX in app is a key to creating a great user experience. We have a team of designers and developers who work together to create a seamless user experience."}/>
                    <Info title={"WEB DEVELOPMENT"} content={"We have a team of developers who work together to create a seamless user experience."} />
                    <Info title={"MOBILE APP DEVELOPMENT"} content={"We have a team of developers who work together to create a seamless user experience."} />
                    </div>
                </div>
            </m.div> 
    )
}
export default LandingPage;