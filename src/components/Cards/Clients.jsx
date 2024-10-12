import { IonIcon } from "@ionic/react";
import { star } from "ionicons/icons";

const Clients=({image,title,content})=>{
    return(
        <div className=' carousel-item  rounded-box w-[26rem] h-[14rem] flex flex-col bg-[var(--primary-color)]  p-5'>
          <div className="flex flex-row gap-4 items-center">
          <img className="w-12 h-12 rounded-full" src={image} alt="Image for the content" />
           <div className="flex flex-col">
           <p className=" text-xl font-semibold">{title}</p>
           <p>sdhjvskvs</p>
           </div>
          </div>
           <p className=" ">{content}</p>
            <div className="flex flex-row justify-between items-center">
                <p>10:00 AM Jun 23, 2022</p>
                <div>
                    <IonIcon icon={star} className="text-yellow-500"/>
                    <IonIcon icon={star} className="text-yellow-500"/>
                    <IonIcon icon={star} className="text-yellow-500"/>  

                </div>

            </div>
        </div>
    )
}
export default Clients;