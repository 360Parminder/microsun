import Reviewcard from '../card/Reviewcard';
const Feedback=()=>{
    return(
        <>
       <div className="container mt-20 mb-20 md:ms-10 flex flex-col w-11/12">
            <h2 className='text-5xl'>Happy Clients</h2>
            <p className='w-11/12 mt-5'>Hear what our clients have to say about us</p>
            <div className="flex flex-col md:flex-row w-full justify-around">
                <Reviewcard/>
                <Reviewcard/>
            </div>
       </div>
        </>
    )
}

export default Feedback;