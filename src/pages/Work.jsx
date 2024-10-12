import Copyright from "../footer/Copyright";
import Footer from "../footer/Footer";
import Fixednav from "../nav/Fixednav";
import Leftwork from "../workshow/Leftwork";
import Rightwork from "../workshow/Rightwork";

const Work=()=>{
    return(
        <>
        <div className="flex flex-col items-center bg-fixed text-black">
                <h2 className="md:text-6xl text-left md:mt-20 mt-5">Some things we`ve Built</h2>
            <Leftwork Projecttitle="ECommerce" Projectdesc="Step into a world of style and convenience at Microsun. From fashion to tech, find curated treasures that elevate your everyday. Explore now for a seamless shopping experience that reflects your unique taste." Projectfeature1="feature1" Projectfeature2="feature2" Projectfeature3="feature3" Projectimg="/image/eshop.png"/>
            <Rightwork Projecttitle="Library Management System" Projectdesc="Our streamlined library management system (LMS) empowers librarians to manage collections, resources, and patrons with ease, enhancing efficiency and engagement" Projectfeature1="Circulation" Projectfeature2="Cataloging" Projectfeature3="Acquisitions" Projectimg="/image/lib.png"/>
            <Leftwork Projecttitle="" Projectdesc="" Projectfeature1="" Projectfeature2="" Projectfeature3=""/>
            <Rightwork Projecttitle="" Projectdesc="" Projectfeature1="" Projectfeature2="" Projectfeature3=""/>

          <Footer/>
          <Copyright/>
          <Fixednav/>  
        </div>
        </>
    )
}

export default Work;