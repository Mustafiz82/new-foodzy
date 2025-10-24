import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router";

const ManageCategories = () => {
  const [data, setData] = useState([]);
  const [refetch , setRefetch] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    const obj = { name, image };
    console.log(obj);

    try {
      const response = await axios.post("http://localhost:3000/category", obj);
  

      console.log(response);
      setRefetch(!refetch)

      
    } catch (error) {
      console.log(error);
    }
  };
console.log(refetch);
  useEffect(() => {
    axios
      .get("http://localhost:3000/category")
      .then((res) => setData(res.data));
  }, [refetch]);



  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Manage Category</h2>

        <button
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="btn hover:bg-primary hover:text-white btn-outline "
        >
          <FaPlus /> Add New Cateogry
        </button>
      </div>



    <div className="grid gap-5 mt-10 grid-cols-8">
          {data?.map((item) => <div className="border border-black p-5 ">
            <img className="w-full h-" src={item?.image} alt="" />

            <h2 className="text-xl text-center font-semibold">{item.name}</h2>

      </div> )}
    </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              required
              name="name"
              placeholder="Enter Your Category Name"
              className="input input-bordered w-full focus:outline-0"
            />

            <input
              type="url"
              required
              name="image"
              placeholder="Enter Category Image Url"
              className=" input input-bordered w-full focus:outline-0"
            />

            <button className="btn w-full btn-primary">Submit</button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ManageCategories;
