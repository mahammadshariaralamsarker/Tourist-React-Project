import Swal from "sweetalert2";
import useAuth from "./Providers/UseAuth";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddSpot = () => {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const Email = user.email;
    const category = form.category.value;
    const cost = form.Cost.value;
    const date = selectedDate;

    const newData = { Email, productName, category, cost, date };

    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
          });
          form.reset();
          setSelectedDate(null); // Reset date picker
        }
      });
  };

  return (
    <form
      onSubmit={handleAddCoffee}
      className="max-w-4xl mx-auto bg-white p-10 shadow-lg rounded-lg"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">
        Add New Tourist Spot
      </h1>
      <div className="lg:flex justify-between gap-4">
        {/* Product Name */}
        <div className="form-control w-full mb-6 lg:mb-0">
          <label className="text-lg font-semibold mb-2">Product Name</label>
          <input
            name="productName"
            className="input input-bordered w-full p-3"
            placeholder="Tourist Spot Name"
            required
          />
        </div>

        {/* Product Cost */}
        <div className="form-control w-full mb-6 lg:mb-0">
          <label className="text-lg font-semibold mb-2">Product Cost</label>
          <input
            name="Cost"
            className="input input-bordered w-full p-3"
            placeholder="Product Cost"
            required
          />
        </div>
      </div>

      <div className="lg:flex justify-between gap-4">
        {/* Category Name */}
        <div className="form-control w-full mb-6 lg:mb-0">
          <label className="text-lg font-semibold mb-2">Category</label>
          <input
            name="category"
            className="input input-bordered w-full p-3"
            placeholder="Category Name"
            required
          />
        </div>

        {/* Date */}
        <div className="form-control w-full">
          <label className="text-lg font-semibold mb-2">Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="input input-bordered w-full p-3"
            placeholderText="Select Date"
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <input
          className="btn btn-primary w-full py-3 font-semibold text-lg"
          type="submit"
          value="Add Spot"
        />
      </div>
    </form>
  );
};

export default AddSpot;
