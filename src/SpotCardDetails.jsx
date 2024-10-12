import { useLoaderData, useParams } from 'react-router-dom';

const SpotCardDetails = () => {
    const data = useLoaderData();
    const {_id} = useParams()
    const product = data.find(detail => detail._id === _id)
    const {Email,time ,Visitors,tourists_spot_name, Cost, Country, Location, Seasonality, photo,details} = product;
    
    return (
        <div className='border-2 rounded-lg border-gray-950 my-3'>
            <img className='w-full rounded-t-lg lg:h-[500px]' src={photo} alt="" />
            <p className='mb-2 px-3 text-center font-semibold text-5xl'>{tourists_spot_name}</p>
            <p className='mb-2 px-3 font-semibold text-3xl'>Location : {Location}</p>
            <p className='mb-2 px-3 font-bold text-2xl'>{time} Days</p>
            <p className='mb-2 px-3 font-semibold'>Total Cost : {Cost}  $ Per Person</p>
            <p className='mb-2 px-3'>Country : {Country}</p>
            <p className='mb-2 px-3'>Season : {Seasonality}</p>
            <p className='mb-2 px-3'>Visitors : {Visitors} Per Year</p>
            <p className='mb-2 px-3'>Details: {details}</p>
        </div>
    );
};

export default SpotCardDetails;