import {Link} from 'react-router-dom';

const Footer=()=>{
    return(
        <>

        <div className=" relative w-full mt-10  bg-footer bg-cover bg-no-repeat bg-center rounded-md text-white ">
            <div className="flex flex-col sm:flex-row sm:mt-36 md:mt-36 md:justify-between m-2 items-center">

            
            <div className=" sm:w-11/12 md:w-1/5"><img src="/image/microsun.png" alt="" /></div>
            <div className="flex flex-row gap-16 md:gap-20">
            <div>
                <ul className="text-lg md:text-xl">
                    <Link to="/aboutus">About us</Link>
                    <li>Services</li>
                    <li>Products</li>
                    <Link to="/contact">Contact Us</Link>
                    <li>Support</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div>
                <ul className="text-lg md:text-xl">
                    <li>Resources</li>
                    <li>Blog</li>
                    <li>Patners</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>Events</li>
                </ul>
            </div>
           
            </div>
          
            <div className=" flex flex-col md:w-4/12 mt-5 md:mt-1 items-center">
                <h5 className="text-2xl mb-2 ">Subscribe</h5>
                <p className="mb-2">Stay informed with our latest news and updates.</p>
                <div className='flex items-center'>
                <input className="h-10 rounded-md text-base md:text-lg ps-2 " type="text" /> <button className="btn py-2  h-8">Submit</button>
                </div>
                <p className="mt-2 text-sm">By subscribing,you agree to our privacy Policy and consent to recive updates from us.</p>
            </div>
            </div>
        </div>


        </>
    )
}
export default Footer;