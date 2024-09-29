
import { Link } from 'react-router-dom';
import {easeOut, motion as m} from "framer-motion";


const HeroSection=()=>{
    return(
        <>
            <m.div 
            variants={{
                hidden:{opacity:0, x:-75},
                visible:{opacity:1,x:0}
            }}
            initial="hidden"
            animate="visible"
            transition={{duration:0.75, delay:0.25}}


            className="mt-10 md:mt-40 w-full xl:w-50">
              <h2 className="text-4xl md:text-6xl text-transparent bg-clip-text bg-cover font-medium " style={{ backgroundImage: "url('image/mesh2.png')" }}>Expertise in Web, Mobile, and Desktop Software Development</h2>
            <h5 className="mt-5 md:mt-4 md:w-3/4 text-2xl">We specialize in creating high-quality web, mobile, and desktop software solutions that meet your unique needs.</h5>
            
            <div className="flex mt-4 mb-5 mx-4 md:mx-0 justify-between md:justify-normal gap-3">
                <Link to="/aboutus" className="btn btn-primary">Learn More</Link>
                <Link to="/contact" className="btn btn-primary">Contact us</Link>
            </div>
            
            </m.div>

        </>
    )
}

export default HeroSection;