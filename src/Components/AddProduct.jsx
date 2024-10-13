import Swal from 'sweetalert2';
import useAuth from './Providers/UseAuth';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: "Success!",
                        text: "Tourist Spot Added Successfully",
                        icon: "success",
                    });
                    form.reset();
                    setSelectedDate(null);  // Reset date picker
                }
            });
    };

    return (
        <form onSubmit={handleAddCoffee}>
            <h1>This is the add product page</h1>
            <div className="bg-[#F4F3F0] p-24">
                <div className="lg:flex justify-between">
                    <div className="join w-full m-5 form-control">
                        <h1 className="flex items-center mr-4">Product Name</h1>
                        <input
                            name="productName"
                            className="input input-bordered join-item flex-1 p-2"
                            placeholder="Tourists Spot Name"
                        />
                    </div>
                    <div className="join w-full m-5 form-control">
                        <h1 className="flex items-center mr-4">Product Cost</h1>
                        <input
                            name="Cost"
                            className="input p-2 input-bordered join-item flex-1"
                            placeholder="Product Cost"
                        />
                    </div>
                </div>
                <div className="lg:flex justify-between">
                    <div className="join w-full m-5 form-control">
                        <h1 className="flex items-center mr-4">Category Name</h1>
                        <input
                            name="category"
                            className="input input-bordered p-2 join-item flex-1"
                            placeholder="Country Name"
                        />
                    </div>
                </div>
                <div className="lg:flex justify-between">
                    <div className="join w-full m-5 form-control">
                        <h1 className="flex items-center mr-4">Date</h1>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            className="input input-bordered p-2 join-item flex-1"
                            placeholderText="Select Date"
                        />
                    </div>
                </div>
                <input
                    className="btn btn-block bg-primary text-white mx-5"
                    type="submit"
                    value="Add Spot"
                />
            </div>
        </form>
    );
};

export default AddSpot;
