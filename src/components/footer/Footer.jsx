import {Link, useNavigate} from 'react-router-dom';
import Logo from '../../assets/Images/microsun.png';

const Footer=()=>{
    const navigate = useNavigate();
    return(

        <div className=" relative w-full mt-10 px-14 bg-[#18181b]">
            <div className="flex flex-col sm:flex-row mt-5 md:justify-between m-2 items-center">
            <div className=" sm:w-11/12 md:w-1/5">
            <img src={Logo} alt="Microsun Logo" />
            <p className='mt-4'>We are committed to continue to grow and develop as a leading digital creative agency.</p>
            </div>
            <div className="flex flex-row gap-16 md:gap-20">
            
                <ul className="text-lg md:text-xl gap-3">
                    <p className='text-2xl font-semibold mb-4'>Pages</p>
                    <button onClick={()=>navigate('/')} >Home</button>
                    <li>Services</li>
                    <button onClick={()=>navigate('/aboutUs')} >About Us</button>
                    {/* <li>Blog</li> */}
                    <li><button onClick={()=>navigate('/contact')}>Contact Us</button></li>
                </ul>
          
        
                <ul className="text-lg md:text-xl">
                    <p className='text-2xl font-semibold mb-4'>Utility Pages</p>
                    <li>Style Guides</li>
                    <li>Changelog</li>
                    <li>Licenses</li>
                    <li>Instructions</li>
                    
                </ul>
         
                <ul className="text-lg md:text-xl w-[10rem]">
                    <p className='text-2xl font-semibold mb-4'>Office </p>
                    <a target="_blank" href='https://maps.app.goo.gl/sMSees4StYw22gZE7' >125, SCH NO.1, ALWAR, Rajasthan, India - 301001</a>
                </ul>
            </div>

            </div>
        </div>
    )
}
export default Footer;