import { IonIcon } from '@ionic/react';
import { shareOutline } from 'ionicons/icons';



const Leftwork=({Projecttitle,Projectdesc,Projectfeature1,Projectfeature2,Projectfeature3,Projectimg})=>{
    return(
        <>
       <div className="md:container mt-20 w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-auto">
            <a href=""><img className="w-full h-full" src={Projectimg} alt="" /></a>
        </div>
            <div className="flex flex-col gap-4 md:w-1/2">
                    <h3 className="text-4xl text-right">Featured Project</h3>
                    <a className="text-2xl  text-right" href="">{Projecttitle}</a>
                    <div className=" bg-dwhite p-2 text-lg rounded flex items-center md:w-8/12 -ms-24 md:relative ">
                        <p>{Projectdesc}</p>
                    </div>
                <ul className="flex justify-around mt-10 p-2"> 
                    <li>{Projectfeature1}</li>
                    <li>{Projectfeature2}</li>
                    <li>{Projectfeature3}</li>
                </ul>
                <div className="p-5 flex items-end text-2xl gap-4 justify-end">
                    <a href=""><IonIcon icon={shareOutline} /></a>
                    <a href=""><IonIcon icon={shareOutline} /></a>
                    <a href=""><IonIcon icon={shareOutline} /></a>
                </div>
            </div>


       </div>
        </>
    )
}
export default Leftwork;