import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
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
        const response = await fetch("http://localhost:5000/category");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const filteredProducts = data.filter((item) => item.Email === email);
        setUsers(filteredProducts);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, [email]);

  const addProduct = (newProduct) => {
    setUsers((prevUsers) => [...prevUsers, newProduct]);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/category/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
            }
          })
          .catch((error) => {
            console.error("Error deleting the item:", error);
            Swal.fire(
              "Error!",
              "There was a problem deleting the item.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <AddCategory />
      <div className="overflow-x-auto mt-6">
        {users.length > 0 ? (
          <table className="table-auto w-full bg-white shadow-lg rounded-lg">
            <thead className="bg-gray-200 text-gray-600">
              <tr>
                <th className="px-4 py-2 b">Product Name</th>
                <th className="px-4 py-2 b">Category</th>
                <th className="px-4 py-2 b ">Cost</th>
                <th className="px-4 py-2 b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => (
                <tr key={item._id} className=" b">
                  <td className="px-4 py-2 b ">{item.productName}</td>
                  <td className="px-4 py-2 b">{item.category}</td>
                  <td className="px-4 py-2 b">{item.cost}</td>
                  <td className="px-4 py-2 flex justify-around">
                    <Link
                      to={`/updateCategory/${item._id}`}
                      className="btn bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-600">
            No Data found. Please check your data.
          </p>
        )}
      </div>
    </div>
  );
};

export default CategorycalPage;
