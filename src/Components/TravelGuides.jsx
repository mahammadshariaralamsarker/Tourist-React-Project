import name1 from './../assets/1images.jpg';
import name2 from './../assets/2images.jpg';
import name3 from './../assets/3images.jpg';
const TravelGuides = () => {
    return (
        <div>
            <h1 className="text-center font-bold lg:text-6xl text-3xl m-4">Our Travel Guide</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 border p-8 ">
                <div className="card border-2 border-slate-950 text-center border-white  ">
                    <div className="">
                    <img className='w-full h-[300px] rounded-t-2xl' src={name1} alt="" />
                        <h2 className="font-bold lg:text-3xl text-2xl  text-center">Kumar Vattacharjee</h2>
                        <p className='lg:text-2xl text-xl font-medium'>Senior</p>
                        
                    </div>
                </div>
                <div className="card border-2 border-slate-950 text-center border-white  ">
                    <div className="">
                    <img className='w-full h-[300px] rounded-t-2xl' src={name3} alt="" />
                        <h2 className="font-bold lg:text-3xl text-2xl  text-center">Alexa </h2>
                        <p className='lg:text-2xl text-xl font-medium'>Junior</p>
                        
                    </div>
                </div>
                <div className="card border-2 border-slate-950 text-center border-white  ">
                    <div className="">
                    <img className='w-full h-[300px] rounded-t-2xl' src={name2} alt="" />
                        <h2 className="font-bold lg:text-3xl text-2xl  text-center">Rahul Mondol</h2>
                        <p className='lg:text-2xl text-xl font-medium'>Senior </p>
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default TravelGuides;