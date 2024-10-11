
const Info=({image,title,content})=>{
    return(
        <div className='w-[18rem] h-[14rem] flex flex-col bg-[var(--primary-color)] rounded-md p-5'>
            <img className="w-10 , h-10 rounded-full" src={image} alt="Image for the content" />
            <h3 className=" text-xl font-semibold">{title}</h3>
            <p className=" ">{content}</p>
        </div>
    )
}
export default Info;