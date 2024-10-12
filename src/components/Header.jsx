import logo from '../assets/Images/microsun.png';
const Header=()=>{
    return(
        <div className='w-full h-18 fixed flex flex-row justify-between items-center px-5 py-2 backdrop:blur-md backdrop:brightness-50 backdrop:bg-black'>
            <img src={logo} alt="logo" className='w-[10rem] h-auto '/>
            <div className='flex flex-row gap-x-5 '>
                <button>Services</button>
                <button>Team</button>
                <button>About Us</button>
                <button>Media</button>
                <button>Networks</button>
            </div>
            <div>
                <button className='border-2 border-[var(--primary-color)] text-[var(--primary-color)] rounded-full p-2  font-semibold'> GET IN TOUCH</button>
            </div>
        </div>
    )
}
export default Header;