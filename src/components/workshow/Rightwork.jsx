import { IonIcon } from '@ionic/react';
import { shareOutline } from 'ionicons/icons';

function Rightwork({Projecttitle,Projectdesc,projectfeature1,projectfeature2,projectfeature3,Projectimg}) {
  return (
    <div className="lg:container mt-20 w-full flex flex-col-reverse md:flex-row">
         <div className="flex flex-col gap-4 md:w-1/2">
                <h3 className="text-4xl text-left">Featured Project</h3>
                <a className="text-2xl  text-left" href="">{Projecttitle}</a>
                <div className=" bg-white p-2 text-lg rounded flex items-center w-full md:w-8/12 md:ms-80 md:relative">
                    <p>{Projectdesc}</p>
                </div>
            <ul className="flex justify-around mt-10 p-2 ps-0"> 
                <li>{projectfeature1}</li>
                <li>{projectfeature2}</li>
                <li>{projectfeature3}</li>
            </ul>
            <div className="p-5 flex  text-2xl gap-4 justify-start">
                <a href=""><IonIcon icon={shareOutline} /></a>
                <a href=""><IonIcon icon={shareOutline} /></a>
                <a href=""><IonIcon icon={shareOutline} /></a>
            </div>
        </div>

    <div className="w-full md:w-1/2 h-auto">
        <a href=""><img className="w-full h-full" src={Projectimg} alt="" /></a>
    </div>
       

   </div>
  )
}

export default Rightwork;

