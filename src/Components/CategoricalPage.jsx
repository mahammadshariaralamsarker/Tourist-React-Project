import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
// import useAuth from "./Components/Providers/UseAuth";
import Swal from 'sweetalert2';
// import AddSpot from "./Components/AddProduct";
import useAuth from "./Providers/UseAuth";
import AddCategory from "./AddCategory";

const CategorycalPage = () => {
    const { user } = useAuth();
    const loadedUsers = useLoaderData();
    const email = user?.email;
    const [users, setUsers] = useState(loadedUsers);
    useEffect(() => {
        const fetchData = async () => {
            if (!email) return;
            try {
                const response = await fetch('http://localhost:5000/category');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const filteredProducts = data.filter(item => item.Email === email);
                setUsers(filteredProducts);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchData();
    }, [users]);

    const addProduct = (newProduct) => {
        setUsers(prevUsers => [...prevUsers, newProduct]);
    };

    const handleDelete = (id) => {
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
                fetch(`http://localhost:5000/category/${id}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then((response) => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            "Deleted!",
                            "Your file has been deleted.",
                            "success"
                        );
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);
                    }
                })
                .catch(error => {
                    console.error('Error deleting the item:', error);
                    Swal.fire("Error!", "There was a problem deleting the item.", "error");
                });
            }
        });
    };

    return (
        <div>
            <AddCategory/>
            <div className="grid gap-4 m-5 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
                {users.map(item => (
                    <div key={item._id} className="card card-compact shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{item.productName}</h2>
                            <h2 className="card-title">{item.category}</h2>
                            <h2 className="card-title">{item.cost}</h2>
                            <div className="flex justify-around">
                                <Link to={`/updateCategory/${item._id}`} className="btn join-item">Edit</Link>
                                <button onClick={() => handleDelete(item._id)} className='btn w-[100px] bg-red-500 text-white'>X</button>
                            </div>
                        </div>
                    </div>
                ))}
                {users.length === 0 && <p>No Data found. Please check your data.</p>}
            </div>
        </div>
    );
};

export default CategorycalPage;
