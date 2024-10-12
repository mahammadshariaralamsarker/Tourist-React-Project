import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Thailand = () => {
    const [sunglassesData, setSunglassesData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://coffee-store-server-zeta-mauve.vercel.app/coffee');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                const desiredObject = data.filter(item => item.Country === "Thailand");
                console.log(desiredObject);
                setSunglassesData(desiredObject)

            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchData();
    }, []);
    return (
                <div className=" grid gap-4 my-5 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
                    {sunglassesData.map(item => (
                        <div key={item._id} className="card    shadow-xl">
                            <figure><img className="w-full" src={item.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.tourists_spot_name}</h2>
                                <p>{}</p>                    
                                <Link to={`/coffee/${item._id}`} ><button className="btn">View Details</button></Link>                
                            </div>
                        </div>
                    ))}
                </div>
            
        
    );
};

export default Thailand;