import Footer from "../footer/Footer";
import Copyright from "../footer/Copyright";
import Fixednav from "../nav/Fixednav";
import { IonIcon } from '@ionic/react';
import { checkmarkDone } from 'ionicons/icons';


const Hire=()=>{
    return(
        <>
        <div className="flex flex-col items-center w-screen text-black bg-fixed ">
            <h2 className="text-5xl sm:text-7xl md:text-9xl font-bold mt-5 text-center text-transparent bg-clip-text bg-cover " style={{ backgroundImage: "url('image/mesh1.png')" }}>HIRE DEVLOPER</h2>
            <div className="flex flex-col items-center md:items-start md:flex-row mt-10 md:mt-24 gap-10 md:justify-around w-full">
                <div className="w-11/12 md:w-5/12 gap-2  " >
                    <h4 className="text-3xl md:text-7xl font-bold">Hire</h4>
                    <h4 className="text-2xl md:text-6xl font-bold">Remote Devlopers</h4>
                    <p className="w-full text-lg md:text-3xl mt-4">For Small and Large Scale Projects</p>
                    <p className="text-lg md:text-3xl">10X Faster</p>
                    <div className="flex gap-4 items-center mt-5">
                    <p className="text-sm md:text-base"><IonIcon className="text-xl text-green" icon={checkmarkDone} /> All Full Time Senior Developers</p>
                    <p className="text-sm md:text-base"><IonIcon className="text-xl text-green" icon={checkmarkDone} /> 99% Customer Satisfaction Rate</p>
                    </div>
                    
                </div>
                <div className="w-11/12 md:w-5/12 mb-10"> 
                    <form  className="flex flex-col gap-4 text-left " action="">

                    <label htmlFor="name">Name</label>
                    <input className="h-10 rounded-md text-xl text-fixed" id="name" type="text" />
                    <label htmlFor="email">Email </label>
                    <input className="h-10 rounded-md text-xl text-fixed" id="email" type="text" />
                    <label htmlFor="devlopers">Developers</label>
                    <select className="h-10 rounded-md text-xl p-2 text-fixed" name="" id="devlopers">
                        <option value="">Select Developer</option>
                        <option value="">IOS App Developer</option>
                        <option value="">Android App Developer</option>
                        <option value="">Website Developer</option>
                        <option value="">Software Developer</option>    
                    </select>
                    <label htmlFor="designers">Designers</label>
                    <select className="h-10 rounded-md text-xl p-2 text-fixed" name="" id="designers">
                        <option value="">Select Designer</option>
                        <option value="">App Designer </option>
                        <option value="">Website Designer</option>
                        <option value="">UI/UX Designer</option>
                        <option value="">Software Designer</option>
                    </select>
                    
                    
                   <label htmlFor="comment">Comment</label>
                    <textarea className="h-10 rounded-md text-xl text-fixed px-2" id="comment" type="text" />

                        <button className="btn btn-primary" type="submit">Hire Devloper</button>
                        
                    </form>
                    
                    
                    </div>
            </div>
            <Footer/>
            <Copyright/>
            <Fixednav page="Hire"/>
        </div>
        </>
    )
}
export default Hire;