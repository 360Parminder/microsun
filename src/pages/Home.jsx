import Info from '../components/Cards/Info';
import Project from '../components/Cards/Project';
import project1 from '../assets/Images/Clothing.png';
import project2 from '../assets/Images/LMS.png';
import project3 from '../assets/Images/FoodPlanet.png';
import Clients from '../components/Cards/Clients';
import client1 from '../assets/Images/ceo.jpeg';
import bg from '../assets/Images/office.jpg';
import logo from '../assets/Images/microsun.png';
const Home =()=>{
    return(
        <>
                <div className='w-full h-screen flex flex-col px-16 '>
                    <div className='flex flex-row items-center mt-24 justify-between'>
                        <h1 className='text-6xl w-3/5'>Color Digitally with imagination Palette</h1>
                        <p className='w-2/6'>We are digital magicians, turning ideas into compelling designs, driving change and creating real impact.</p>
                    </div>
                    <div className=' flex flex-row items-center mt-10 gap-10'>
                        <div className='w-1/6 flex flex-col gap-7 mt-10'>
                                <div className='bg-[#18181b] rounded-md p-4'>
                                    <p className='text-xl font-semibold'>500+</p>
                                    <p>Happy Clients</p>
                                </div>
                                <div className='bg-[#18181b] rounded-md p-4'>
                                    <p>200+</p>
                                    <p>Projects</p>
                                </div>
                                <div className='bg-[#18181b] rounded-md p-4'>
                                    <p>12yrs+</p>
                                    <p>Experience</p>
                                </div>
                        </div>
                        <div className='w-5/6 flex flex-row  gap-20 justify-center items-end h-[40vh] bg-[#18181b] rounded-s-[3rem] pb-10'>
                                <img className='w-[10rem]' src={logo} alt="" />
                                <div>
                                    <p>We are based in</p>
                                    <p className=' font-semibold'>Rajasthan, India</p>
                                </div>
                                <div>
                                    <p>Let's talk</p>
                                    <p className=' font-semibold'>nitinmicrosun@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                    <div className=' grid grid-cols-2 gap-10 w-full mt-5'>
                        <Project title={"Clothing Website"} content={"Step into a world of style and convenience at Microsun. From fashion to tech, find curated treasures that elevate your everyday. Explore now for a seamless shopping experience that reflects your unique taste."} image={project1}/>
                        <Project title={"Library Management System"} content={"Our streamlined library management system (LMS) empowers librarians to manage collections, resources, and patrons with ease, enhancing efficiency and engagement."} image={project2}/>
                        <Project title={"Food Planet"} content={"Microsun's Food Planet is a one-stop destination for all your favorite food-related needs. Whether you're in the mood for a quick bite or want to explore new flavors, we've got you covered."} image={project3}/>
                        <Project title={"Student ERP"} content={"Our intuitive student ERP system enables administrators to manage student information, attendance, academic performance, and resources seamlessly, improving efficiency and student engagement."} image={project3}/>
                    </div>
                </div>
                    {/* Testimonials */}
                <div className=' flex flex-col items-center rounded-lg p-5 mt-20 gap-5 ' >
                    <button className='flex items-center justify-center w-28 border border-[var(--primary-color)] text-[var(--primary-color)] rounded-full px-4 py-2  font-semibold'>Testimonials</button>
                    <h3 className='text-4xl font-semibold rounded-xl items-center justify-center flex'>What our clients are saying</h3>
                    <p className=' max-w-4xl text-xl text-center'>This testimonial is a motivation for us to continue to improve quality and provide better satisfaction to every customer who entrusts us.</p>
                    <div className='carousel w-[68vw]  gap-10'>
                        <Clients title={"Sunil Yadav"}  subtitle={"Owner of Food Planet"} date={"10-October-2024"} content={"The team at Microsun did an outstanding job building the Food Planet app in React Native. Their expertise and attention to detail ensured a smooth and seamless user experience. I highly recommend them for any app development project!"} image={client1}/>
                        <Clients title={"Client 2"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor."} image={client1}/>
                        <Clients title={"Client 3"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor."} image={client1}/>
                        <Clients title={"Client 4"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor."} image={client1}/>
                        <Clients title={"Client 5"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor."} image={client1}/>
                       </div>
                </div>
                {/* Contact us */}
                <div className='w-[90vw] flex flex-col rounded-lg p-5 mt-[4.5rem] items-center gap-4' style={{backgroundImage:`url(${bg})`,backgroundSize:"cover",backgroundPosition:"center",}}>
                <p className='border-2 border-[var(--primary-color)] text-[var(--primary-color)] w-[8rem] rounded-xl items-center justify-center flex'>OUR SERVICES</p>
                <h3 className=' text-6xl'>Ready To Talk</h3>
                <p className='text-center text-sm w-3/6'>Feel free to contact us right now. we are pleased to announce our readiness to recive contacts from potential clients.</p>
                <button className='w-28 border border-[var(--primary-color)] text-[var(--primary-color)] rounded-full px-4 py-2  font-semibold'>Let's Talk</button>
                </div>
        </>
    )
}
export default Home;