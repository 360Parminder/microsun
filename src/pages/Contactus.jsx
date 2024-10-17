

const Contactus=()=>{
    return(
      
        <div className="flex flex-col items-center text-center w-screen bg-fixed ">
            <h5 className="text-lg md:text-xl mt-10 text-black">Get in touch</h5>
            <h2 className="text-4xl md:text-9xl font-bold text-transparent bg-clip-text bg-cover " style={{ backgroundImage: "url('image/mesh2.png')" }}>CONTACT US</h2>
            <div className="flex flex-col items-center md:items-start md:flex-row mt-10 md:mt-24 gap-10 md:justify-around">
                <div className="w-11/12 md:w-5/12 " >
                    <h4 className="text-lg md:text-4xl font-normal">We are here to serve! How can we help you?</h4>
                    <p className=" md:text-xl mt-4">If you have any questions about your submission, directory, billing, products or anything else microsun related, we’re here to help</p>
                </div>
                <div className="w-11/12 md:w-5/12 mb-10"> 
                    <form  className="flex flex-col gap-4 text-left " action="">
                    <label htmlFor="name">Name</label>
                    <input className="h-10 rounded-md text-xl ps-2 text-fixed " id="name" type="text"  required/>
                    <label htmlFor="email">Email </label>
                    <input className="h-10 rounded-md text-xl ps-2 text-fixed " id="email" type="email" required />
                    <label htmlFor="project">Project</label>
                    <input className="h-10 rounded-md text-xl ps-2 text-fixed " id="project" type="text" />
                    <label htmlFor="service">Service</label>
                    <input className="h-10 rounded-md text-xl ps-2 text-fixed " id="service" type="text" />
                   <label htmlFor="comment">Comment</label>
                    <textarea className="h-10 rounded-md text-xl ps-2 text-fixed " id="comment" type="text" />
                        <button className="btn btn-primary" type="submit">Send Message</button>
                    </form>
                    
                    
                    </div>
            </div>
        </div>
    )
}
export default  Contactus;