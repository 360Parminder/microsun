import { IonIcon } from '@ionic/react';
import { logoTwitter, logoFacebook, logoInstagram, logoLinkedin, logoYoutube, logoCodepen,logoGithub,star } from 'ionicons/icons';

const Reviewcard=()=>{
    return(
        <>
        <div className="mt-10 flex w-full md:w-3/5 h-full flex-col ">
            <p className="flex text-2xl gap-2"><IonIcon icon={star}/><IonIcon icon={star}/><IonIcon icon={star}/><IonIcon icon={star}/><IonIcon icon={star}/></p>
            <p className="mt-2 w-full md:w-4/5">Our experience with the company has been nothing short of amazing. Their expertise and professionalism exceeded our expectations.</p>
            <div className='mt-4 flex flex-row gap-5'>
                <div className='ms-4 flex flex-row items-center gap-4'>
                    <img className='w-20 rounded-full' src="/image/review1.jpeg" alt="" />
                    <div>
                    <h4>John Doe</h4>
                    <p>CEO, ABC Company</p>
                    </div>

                </div>
                <div className='flex justify-center items-center'>
                    <img src="/vite.svg" alt="" />
                </div>
            </div>
        </div>


        </>
    )
}


export default Reviewcard;