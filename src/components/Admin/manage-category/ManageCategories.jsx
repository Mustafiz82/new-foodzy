import axios from "axios";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router";
import { ImCross } from "react-icons/im";
import useFetch from "../../../hook/useFetch";

const ManageCategories = () => {
  const { data, refetch } = useFetch("category");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    const obj = { name, image };
    console.log(obj);

    try {
      const response = await axios.post("http://localhost:3000/category", obj);

      console.log(response);
      refetch()
      document.getElementById("my_modal_2").close();
    } catch (error) {
      console.log(error);
    }
  };

  

  const handleRemoveCategory = async (item) => {
    console.log("object");

    try {
      const response = await axios.delete(
        `http://localhost:3000/category/${item._id}`
      );

      console.log(response?.data);
      if (response?.data?.acknowledged) {
        refetch()
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        {data?.map((item) => (
          <div className="border relative border-black p-5 ">
            <div className="h-[150px] flex items-center">
              {" "}
              <img className="w-full " src={item?.image} alt="" />
            </div>

            <h2 className="text-xl line-clamp-2 text-center font-semibold">
              {item.name}
            </h2>

            <p
              onClick={() => handleRemoveCategory(item)}
              className="text-red-500 cursor-pointer absolute top-2 right-2"
            >
              <ImCross />{" "}
            </p>
          </div>
        ))}
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
