
import {Link} from 'react-router-dom';
import Fixednav from '../nav/Fixednav';
import Footer from '../footer/Footer';
import Copyright from '../footer/Copyright';

const Aboutus=()=>{

    return(
        <>
        <div className='flex flex-col w-screen items-center bg-fixed text-slate-800 '>

            <div className='flex flex-col mt-10 mb-36 gap-4 max-w-4xl text-cyan-50'>
                <h2 className="text-5xl sm:text-7xl md:text-9xl font-bold md:mt-5 text-center text-transparent bg-clip-text bg-cover " style={{ backgroundImage: "url('image/mesh1.png')" }}>ABOUT US</h2>
                {/* <h3 className='text-2xl font-semi-bold mt-10'>Where skills meet opportunity on a global scale.</h3> */}
                <div className='flex items-center gap-8 md:mt-20' >
                    <img className='rounded-full w-24 h-24' src="/image/ceo.jpeg" alt="" />
                    <div>
                    <h5 className='text-3xl font-bold text-white'>Nitin Gandhi</h5>
                    <p className='font-bold text-white' >Director</p>
                    </div>
                    
                </div>
                <p>Microsun Global Infotech began in 2020 by pioneering a better way of working, helping businesses find more flexibility and connecting talent with more opportunities.</p>
                <p className=' text-md '>Our mission to create economic opportunities so people have better lives has taken us so much further. As a result, we’ve become the world’s work marketplace where every day businesses of all sizes and independent talent from around the globe meet here to accomplish incredible things.</p>

                    <h5 className='text-bold text-2xl text-white'>We see what you do </h5>
                    <p>"At Upwork, we've witnessed a shared enthusiasm and unwavering dedication from every user. Whether crafting a quick PowerPoint presentation or embarking on a multi-year development project, the passion for exceptional work resonates. It's not by chance; we intentionally crafted our work marketplace to synchronize the aspirations of our clients with the passion of Upwork's talent. This alignment ensures superior outcomes, fostering mutual growth. Upwork provides a suite of tools designed to hone your skills, elevate your business, and grant you the autonomy needed for unparalleled success.</p>
                    <h5 className='text-bold text-2xl text-white'>Microsun is your workforce</h5>
                    <p>If you’re a client that’s come here to get things done, use this workforce of independent  talent to build faster and transform your business. If you’re independent talent that’s come here to realize your potential, know that you are a valuable and instrumental part of someone’s team.</p>
                    <h5 className='text-bold text-2xl text-white'>We make work more rewarding</h5>
                    <p>We see your vision, and everything we do is an effort to help you make the connections that will turn that vision into reality, by building your Virtual Talent Bench of trusted people.  

                        The impact is both economic and personal, in the everyday and in the long run. When you find the right people, you stop working to get by and start working strategically.

                        That is when real opportunity emerges.

                            I can say with confidence that the Upwork team - the team that serves you the talent and you the client - is still driven by our mission to create economic opportunity for our people around the world.

                            You’re our people now, and we’re glad that you’re here.

                            We can’t wait to see what you do.

                            </p>
                            
                            <div>
                    <h5 className='text-3xl font-bold'>Nitin Gandhi</h5>
                    <p className='font-bold'> & CEO</p>
                    </div>

                    <div className='flex flex-col gap-5 mt-10'>
                        <h2 className='text-4xl'>Start your journey </h2>
                        <div className='flex gap-4'>
                        <Link className='btn btn-primary'>Buy Project</Link>
                        <Link className='btn btn-primary'>Order Project</Link>
                        </div>
                        


                    </div>
          
          
            </div>

            <Footer/>
            <Copyright/>

        <Fixednav page="About"/>
        </div>
        
        </>
    )

}
export default Aboutus;