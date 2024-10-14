import Swal from "sweetalert2";
import useAuth from "./Providers/UseAuth";

const AddSpot = () => {
  const { user } = useAuth();
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const Email = user.email;
    const category = form.category.value;
    const cost = form.Cost.value;
    const newData = { Email, productName, category, cost };

    fetch("http://localhost:5000/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Success!",
            text: "User Addded Successfully",
            icon: "Cool",
          });
          form.reset();
        }
      });
  };
  return (
    <form onSubmit={handleAddCoffee}>
      <div className=" bg-[#F4F3F0] p-24  ">
        <div className=" lg:flex justify-between ">
          <div className="join w-full  form-control m-1">
            <h1 className="flex items-center mr-4"> Product Name</h1>
            <input
              name="productName"
              className="box"
              placeholder=" Tourists Spot Name"
            />
          </div>
          <div className="join w-full  form-control m-1  ">
            <h1 className="flex items-center mr-4">Product Cost</h1>
            <input name="Cost" className="box" placeholder="Product Cost " />
          </div>
        </div>
        <div className=" lg:flex justify-between ">
          <div className="join w-full  form-control m-2">
            <h1 className="flex items-center mr-4">Category Name</h1>
            <input
              name="category"
              className="box"
              placeholder="Category Name"
            />
          </div>
        </div>
        <div className="flex justify-center ">
          <input
            className="box bg-primary text-white w-full m-2 "
            type="submit"
            value="Add Category"
          />
        </div>
      </div>
    </form>
  );
};

export default AddSpot;
