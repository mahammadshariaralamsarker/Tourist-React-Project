import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee,coffees, setCoffees }) => {
        const handleDelete=(_id)=>{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  
                fetch( `https://coffee-store-server-zeta-mauve.vercel.app/coffee/${_id}`,{
                    method:"DELETE",
                    headers: {
						'Content-Type': 'application/json',
					},
                })
                .then((response) => response.json())
                .then(data =>{
                    if(data.deletedCount > 0){
                        Swal.fire(
                              "Deleted!",
                             "Your file has been deleted.",
                            "success" 
                        ) 
                        const remaining = coffees.filter(coff=>coff._id !== _id);
                        setCoffees(remaining);
                    }
                })
                
                    
                }
              });
            
        }
    const {_id,Email,time ,Visitors,tourists_spot_name, Cost, Country, Location, Seasonality, details, photo} = coffee
    
    return (
        <div className="border-2 border-black m-3 card-side  rounded-lg shadow-xl">
            <img src={photo} className='w-full lg:h-[250px]  rounded-t-lg ' alt="Movie" />
            <div className="  w-full ">
                <div className='px-6' >
                    <h2 className="card-title">Name: {tourists_spot_name}</h2>
                    <p>Total Cost : {Cost}</p>
                    <p>{time}</p>
                    <p>Visitor : {Visitors}</p>
                    <Link to={`/coffee/${_id}`} ><button className="btn m-5 mx-auto">View Details</button></Link>
                </div>
                
            </div>
        </div>
    );
};

export default CoffeeCard;