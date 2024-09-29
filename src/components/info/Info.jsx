

const Info=()=>{
    return(
        <>
        <div className="w-full md:h-screen mt-10 mb-10 bg-light flex flex-col md:flex-row" >
        <div className="w-full md:w-2/5 h-full flex items-center justify-center">
            <img src="/image/info.png" alt="" />

        </div>
        <div className="w-full mt-10 md:w-4/5 md:mt-40">
            <div className="md:container md:mx-auto flex flex-col items-center">
            <h2 className="text-2xl md:text-5xl w-full md:w-4/5">Creating Stunning Websites and Powerful Web Applications</h2>
        <p className="text-xl w-full md:w-4/5 mt-4">Our team of expert developers specializes in designing and developing custom web solutions that meet your unique business needs. From simple websites to complex web applications, we have the skills and experience to bring your ideas to life.</p>
        <div className=" mb-10 w-4/5 flex flex-col md:flex-row gap-4 mt-5">
             <div className="flex flex-col ">
                <h4 className="text-3xl">Web Development</h4>
                <p className="text-lg mt-5">We leverage the latest technologies and industry best practices to deliver high-quality results.</p>
            </div>
            <div className="flex flex-col ">
                <h4 className="text-3xl">Mobile Apps</h4>
                <p className="text-lg mt-5">In addition to web development, we also create innovative and user-friendly mobile applications.</p>
            </div>
        </div>
            </div>
        
            
        </div>
        </div>
        
        
        </>
    )
}

export default Info;