import Copyright from "../footer/Copyright";
import Footer from "../footer/Footer";
import Fixednav from "../nav/Fixednav";

const Faq=()=>{
    return(
        <>
        
        <div className="flex flex-col w-screen items-center bg-black text-white ">
            <div className="flex flex-col mt-10 mb-36 gap-4 max-w-4xl">
            <h2 className="text-9xl font-bold mt-5 text-center text-transparent bg-clip-text bg-cover " style={{ backgroundImage: "url('image/mesh1.png')" }} >FAQ`s</h2>
            <h5 className="text-3xl mt-10">Find answers to frequently asked questions about our services.</h5>

            <h5 className="font-bold text-xl">How do I get started?</h5>
            <p>We develop websites and mobile apps for both Android and iOS platforms. Our team is experienced in creating user-friendly and responsive solutions.</p>
            <h5 className="font-bold text-xl">How long does it take to develop a website?</h5>
            <p>The time it takes to develop a website depends on various factors such as the complexity of the project and the client's requirements. We work closely with our clients to ensure timely delivery.</p>
            <h5 className="font-bold text-xl">Do you offer software development services?</h5>
            <p>Yes, we offer software development services for PC. Our team can create custom software solutions tailored to your specific needs.</p>
            <h5 className="font-bold text-xl">What is your pricing model?</h5>
            <p>Our pricing model is based on the scope of the project and the specific requirements of the client. We provide transparent pricing and work within your budget.</p>
            </div>
            <Footer/>
            <Copyright/>
            <Fixednav page="FAQs" />
        </div>
        
        </>
    )
}
export default Faq;