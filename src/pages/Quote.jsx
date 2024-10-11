import Copyright from "../footer/Copyright";
import Footer from "../footer/Footer";
import Fixednav from "../nav/Fixednav";

const Quote=()=>{
    return(

        <>
        <div className="flex flex-col items-center text-white">
<h2 className="text-4xl mt-10 sm:text-5xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-cover " style={{ backgroundImage: "url('image/mesh2.png')" }}>Let's Discuss Your Idea </h2>
<form className="text-white flex flex-col mt-10 mb-10 w-11/12 md:w-1/2 gap-5" action="">
    <input className="text-xl p-2 rounded" type="text" placeholder="Name" />
    <input className="text-xl p-2 rounded" type="text"  placeholder="Your Email"/>
    <input className="text-xl p-2 rounded" type="number"  placeholder="Phone number"/>
    <select className="text-xl p-2 rounded" name="" id="">
        <option value="Project Type">Project Type</option>
        <option value="App Design">App Design</option>
        <option value="App Devlopment">App Devlopment</option>
        <option value="Website Design">Website Design</option>
        <option value="Website Devlopment">Website Devlopment</option>
        
    </select>
    <select className="text-xl p-2 rounded" name="" id="">
        <option value="Approx.budget">Approx.budget</option>
        <option value="Less than 10000">Less than 10000</option>
        <option value="50000 to 1L">50000 to 1L</option>
        <option value="1L to 1.5L">1L to 1.5L</option>
        <option value="above 2L">above 2L</option>
    </select>
    <textarea className="text-xl p-2 rounded" name="" cols={20} rows={5} id="" placeholder=" Please brief your requirement in detail. The more we Know about your amazing idea, the better we can guideand asssist you." ></textarea>
   
    <button className="btn btn-primary" type="submit">Get Free Quote</button>
</form>


        <Footer/>
        <Copyright/>
        <Fixednav page="Quote"/>
        </div>
        </>


    )
}

export default Quote;