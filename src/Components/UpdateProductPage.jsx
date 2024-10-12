import Swal from 'sweetalert2';
import {  useParams } from 'react-router-dom';

const UpdateCoffee = () => {
    const {id}= useParams();
    console.log(id);

    const handleUpdateCoffee =event=>{
        event.preventDefault();
        const form = event.target;
        const  productName = form.productName.value;
         const category =  form.category.value;
         const cost =  form.Cost.value;
         const newData = {  productName, category,cost };
         console.log(newData);
        
     fetch(`http://localhost:5000/product/${id}`,{
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(newData)
      })
      .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount>0){
        Swal.fire({
            title: "Success!",
            text: "Your data Updated Successfully",
            icon: "Cool"
          });
        form.reset();
      }
      })
      
    }
    
    return (
        <form onSubmit={handleUpdateCoffee}>
            <h1>this is update page 
                
            </h1>
            <div className=' bg-[#F4F3F0] p-24'>
                <div className=' lg:flex justify-between'>
                    <div className="join w-full m-5 form-control">
                        <h1 className='flex items-center mr-4'> Product Name</h1>
                        <input name='productName' className="input input-bordered join-item flex-1 p-2" placeholder=" Tourists Spot Name" />
                    </div>
                    <div className="join w-full m-5 form-control">
                        <h1 className='flex items-center mr-4'>Product Cost</h1>
                        <input name='Cost' className="input p-2  input-bordered join-item flex-1" placeholder="Product Cost " />
                    </div>
                </div>
                <div className=' lg:lg:flex justify-between'>
                    <div className="join w-full m-5 form-control ">
                        <h1 className='flex items-center mr-4'>Category Name</h1>
                        <input name='category' className="input input-bordered p-2  join-item flex-1" placeholder="Country Name" />
                    </div>
                </div>
                <input className='btn btn-block bg-primary text-white mx-5' type="submit" value="Update Spot" />
            </div>
        </form>
    );
};

export default UpdateCoffee;