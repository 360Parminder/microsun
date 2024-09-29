import {Link} from 'react-router-dom';


const Consultation=()=>{
    return(
        <>
        <div className=" relative -bottom-32 z-20 rounded-3xl flex items-center justify-center  text-black  bg-mesh-pattern bg-no-repeat bg-cover w-11/12 md:w-4/5  md:h-80">
            <div className=" flex flex-col justify-center gap-4 md:gap-8 m-5 ">
            <h2 className="text-3xl md:text-5xl">Get a Free Project Quote</h2>
            <p className="text-lg md:text-xl">Contact us today for a free consultation or quote for your project.</p>
            <div className="flex gap-4">
                <Link to="/contact" className="btn">Contact</Link>
                <Link to="/quote" className="btn">Get Quote</Link>
            </div>
            </div>
        </div>
        </>
    )
}

export default Consultation;