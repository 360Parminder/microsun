

const Card=({heading,para})=>{
    return(
        <>
        <div className="flex mt-10 w-80 flex-col mb-10 ">
        <h2 className="text-2xl font-bold text-center">{heading}</h2>
        <p className=" mt-3 text-xl text-center">{para}</p>
        <div className=" mt-4 flex gap-3 justify-center w-full">
            
            <button type="button" className="btn btn-primary">Start</button>
            <button type="button" className="btn btn-default">Learn More</button>
            
        </div>
        
        </div>
        
        </>
    )
}
export default Card;
