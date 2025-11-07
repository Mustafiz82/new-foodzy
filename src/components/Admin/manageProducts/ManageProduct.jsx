import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const ManageProduct = () => {
  const [data, setData] = useState([]);
  const [refetch , setRefetch] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3000/product").then((res) => setData(res.data));
  }, [refetch]);

  const handleDelete = (id) => {
    console.log(id);

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
        try {
          axios.delete(`http://localhost:3000/product/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            setRefetch(!refetch)
            console.log(res.data);
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
           
          });
          console.log(error);
        }
      }
    });
  };


  const handleEdit = (id) => {
    navigate(`/admin/manage-products/edit/${id}`)

  }

  console.log(data);
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Manage Products</h2>
        <Link to={"/admin/manage-products/add"}>
          <button className="btn hover:bg-primary hover:text-white btn-outline ">
            <FaPlus /> Add New Product
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table mt-5">
          {/* head */}
          <thead>
            <tr className="bg-primary text-white">
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Original Price</th>
              <th>Offered Price </th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {data.map((item, idx) => (
              <tr>
                <th>{idx + 1}</th>
                <td className="flex h-full  items-center gap-2">
                  <img className="w-10 h-10 " src={item.imageUrls?.[0]}></img>{" "}
                  {item.title}
                </td>
                <td>{item.category}</td>
                <td>{item.originalPrice}</td>
                <td>{item.offeredPrice}</td>
                <td className="">
                  <div className="flex  items-center  h-full gap-5">
                    <button className="btn  btn-sm btn-primary">
                      view Product
                    </button>
                    <button
                      onClick={() => handleEdit(item._id)}
                      className="btn  btn-sm  text-white bg-purple-600"
                    >
                     <FaEdit/> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn  btn-sm btn-primary"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
