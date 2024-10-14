import {Link} from 'react-router-dom';
import Logo from '../../assets/Images/microsun.png';

const Footer=()=>{
    return(

        <div className=" relative w-full mt-10 px-14 bg-[#18181b]">
            <div className="flex flex-col sm:flex-row mt-5 md:justify-between   m-2 items-center">
            <div className=" sm:w-11/12 md:w-1/5">
            <img src={Logo} alt="Microsun Logo" />
            <p className='mt-4'>We are committed to continue to grow and develop as a leading digital creative agency.</p>
            </div>

            <div className="flex flex-row gap-16 md:gap-20">
            <div>
                <ul className="text-lg md:text-xl gap-3">
                    <p className='text-2xl font-semibold mb-4'>Pages</p>
                    <Link to={'/'} >Home</Link>
                    <li>Services</li>
                    <Link to="/contact">About Us</Link>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <ul className="text-lg md:text-xl">
                    <p className='text-2xl font-semibold mb-4'>Utility Pages</p>
                    <li>Style Guides</li>
                    <li>Changelog</li>
                    <li>Licenses</li>
                    <li>Instructions</li>
                    
                </ul>
            </div>
            <div>
                <ul className="text-lg md:text-xl">
                    <p className='text-2xl font-semibold mb-4'>Office </p>
                </ul>
            </div>
            </div>
            

            </div>
        </div>
    )
}
export default Footer;