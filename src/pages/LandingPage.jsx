import { IonIcon } from '@ionic/react';
import { logoTwitter, logoFacebook, logoInstagram, logoLinkedin, logoYoutube, logoCodepen,logoGithub,star } from 'ionicons/icons';
import {easeOut, motion as m} from "framer-motion";
import Header from '../components/Header';
import Info from '../components/Cards/Info';
import Project from '../components/Cards/Project';

import project1 from '../assets/Images/Clothing.png';
import project2 from '../assets/Images/LMS.png';
import project3 from '../assets/Images/FoodPlanet.png';
import Clients from '../components/Cards/Clients';
import client1 from '../assets/Images/ceo.jpeg';



const LandingPage=()=>{

    return(
            <m.div initial={{opacity:0}} animate={{opacity:1}} 
            transition={{duration:1.5, ease:easeOut}}
            className='w-screen bg-black flex flex-col items-center'>
                <Header/>
                {/* Services */}
                <div className='w-[90vw] bg-[#18181b] flex flex-col rounded-lg p-5 mt-[4.5rem] ' >
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
                {/* Projects */}
                <div className=' flex flex-col items-center rounded-lg p-5 mt-20 gap-5 ' >
                    <button className='w-28 border border-[var(--primary-color)] text-[var(--primary-color)] rounded-full px-4 py-2  font-semibold'>Projects</button>
                    <h3 className='text-4xl font-semibold rounded-xl items-center justify-center flex'>Our Creative Digital Projects</h3>
                    <p className=' max-w-4xl text-xl text-center'>Every project we work on is an opportunity to demonstrate our dedzation to creating creative solutions that have a positive impact and meet our clients business needs.</p>
                    <div className=' grid grid-cols-2 gap-5 w-full mt-5'>
                        <Project title={"Clothing Website"} content={"Step into a world of style and convenience at Microsun. From fashion to tech, find curated treasures that elevate your everyday. Explore now for a seamless shopping experience that reflects your unique taste."} image={project1}/>
                        <Project title={"Library Management System"} content={"Our streamlined library management system (LMS) empowers librarians to manage collections, resources, and patrons with ease, enhancing efficiency and engagement."} image={project2}/>
                        <Project title={"Food Planet"} content={"Microsun's Food Planet is a one-stop destination for all your favorite food-related needs. Whether you're in the mood for a quick bite or want to explore new flavors, we've got you covered."} image={project3}/>
                        <Project title={"Project 4"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor."} image={star}/>
                    </div>
                </div>
                    {/* Testimonials */}
                <div className=' flex flex-col items-center rounded-lg p-5 mt-20 gap-5 ' >
                    <button className='flex items-center justify-center w-28 border border-[var(--primary-color)] text-[var(--primary-color)] rounded-full px-4 py-2  font-semibold'>Testimonials</button>
                    <h3 className='text-4xl font-semibold rounded-xl items-center justify-center flex'>What our clients are saying</h3>
                    <p className=' max-w-4xl text-xl text-center'>This testimonial is a motivation for us to continue to improve quality and provide better satisfaction to every customer who entrusts us.</p>
                    <div className='carousel w-full  gap-10'>
                        <Clients title={"Client 1"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor."} image={client1}/>
                        <Clients title={"Client 2"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor."} image={star}/>
                        {/* <Clients title={"Client 3"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor."} image={star}/> */}
                        {/* <Clients title={"Client 4"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor."} image={star}/> */}
                        {/* <Clients title={"Client 5"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor."} image={star}/> */}
                       </div>
                </div>
            </m.div> 
    )
}
export default LandingPage;