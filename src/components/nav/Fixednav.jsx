import { IonIcon } from '@ionic/react';
import { logoTwitter,menu,star} from 'ionicons/icons';
import {Link} from 'react-router-dom';


const Fixednav=({page})=>{
    return(
        <>
            <div className="flex fixed z-50 bottom-5 w-full lg:w-3/4 h-24 rounded-lg bg-nav p-2 gap-2 bg-navbg text-white">
            <Link to="/" className="w-1/5 h-full btn flex flex-row items-center rounded-lg justify-center px-4">
                <p className=" text-white flex items-center gap-2">m.home</p> 
                <IonIcon className=' hidden md:flex text-lg' icon={menu}/>
            </Link>
            <div className="w-11/12 h-full bg-slate-700 flex flex-row justify-between items-center rounded-lg gap-2 px-3">
                            <h5 className="ms-2">{page}</h5>
                            <div className='flex flex-row text-xs gap-2'>

                            <a className="md:btn" href="">Company</a><a className="md:btn" href="">Servces</a><Link to="/hire" className="md:btn" href="">Hire Devloper</Link><Link to="/faq" className="md:btn" href="">FAQs</Link>
                            </div>
                   </div>
            </div>

        </>
    )
}

export default Fixednav;