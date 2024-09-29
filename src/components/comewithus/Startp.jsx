import Card from '../card/Card';
const Startp=()=>{
    return(
        <>
        <div className=" mb-10 flex flex-col md:flex-row items-center h-full w-full gap-5 justify-around bg-mesh2-pattern bg-cover bg-center bg-no-repeat">
            <Card heading="Get Started with Your Project Today" para="Our Process is simple and effcient, allowing you to bring your ideas to life" />
            <Card heading="Collaborate with Our Expert Team" para="Our Team of exprienced professionals will guide you through the entrie devlopment process." />
            <Card heading="Deliver High-Quality Results on Time" para="We are committed to delivering exceptional products within the agreed-upon timeline." />
        </div>
        </>

    )
}
export default Startp;