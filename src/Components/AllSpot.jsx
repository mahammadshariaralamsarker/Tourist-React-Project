// import { Tooltip } from 'react-tooltip'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const AllSpot = () => {
  const [sunglassesData, setSunglassesData] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascending');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://coffee-store-server-zeta-mauve.vercel.app/coffee');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Store the data
        setSunglassesData(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchData();
  }, []);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Sort function based on selected sort order
  const sortFunction = (a, b) => {
    if (sortOrder === 'ascending') {
      return a.Cost - b.Cost;
    } else {
      return b.Cost - a.Cost;
    }
  };

  // Sort the data based on selected sort order
  const sortedData = [...sunglassesData].sort(sortFunction);
  return (
    <div> 
    

      <select  className=" w-full  border" value={sortOrder} onChange={handleSortChange}>
        <option disabled>Pick your sorting order With Your Cost</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>

      <div  className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8  m-5'>
        {sortedData.map(item => (
          <div className='border-2 border-black card shadow-xl' key={item._id}>
            <div className=" rounded-xl shadow-xl">
              <img src={item.photo} className='w-full  h-[210px] rounded-t-xl' alt="Movie" />
              <div className=" w-full ">
                <div className='p-3' >
                  <h2 className="">Name: {item.tourists_spot_name}</h2>
                  <h1 >Total Cost : {item.Cost}</h1>
                  <p> Time: {item.time}days</p>
                  <p>Total Visitors Per Year : {item.Visitors}</p>
                  <p>Season : {item.Seasonality}</p>
                </div>
                <Link to={`/coffee/${item._id}`} ><button className="btn m-3">View Details</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSpot;


