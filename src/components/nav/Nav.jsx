import HeroSection from '../hero/HeroSection';
import { Link } from 'react-router-dom';

const Nav=()=>{
    return(
       <>
       <div className='w-full md:w-4/5 h-20 navbar gap-32'> 
    <img className='w-36 md:navbar-start md:w-40' src="/image/microsun.png" alt="" />
            <div className=' hidden sm:flex md:navbar-center gap-6 text-2xl font-medium text-slate-600'><Link to="/work" href="">Work</Link> <Link to="/aboutus" href=" ">About us</Link><Link to="/contact">Contact us</Link> </div>
       </div>
       </>
    )
}

export default Nav;