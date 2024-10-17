import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from 'ionicons/icons';
const Project=({image,title,content})=>{
    return(
        <div className='w-[40vw] flex flex-col items-center text-center bg-[#4e46e578] rounded-md p-5 '>  
            <img className="w-full h-4/6 m-4 rounded-xl" src={image} alt="Image for the content" />
            <h3 className=" text-xl font-semibold">{title}</h3>
            <p className=" ">{content}</p>
            <button className=" flex items-center justify-center gap-1 border-2 border-[var(--primary-color)] text-[var(--primary-color)] rounded-full p-2  font-semibold">Learn More <IonIcon icon={arrowForwardOutline}/></button>
          </div>

    )
}
export default Project;