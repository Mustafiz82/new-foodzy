import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import axiosPublic from "../../config/axiosPublic";
import Swal from "sweetalert2";

const CartItem = ({ item, refetch }) => {
  const [quantity, setQuantity] = useState(item?.quantity);

  console.log(item);

  const handleChangeQuantity = (delta) => {
    delta == "+"
      ? setQuantity((prev) => prev + 1)
      : quantity > 1
      ? setQuantity((prev) => prev - 1)
      : setQuantity((prev) => prev);
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
        axiosPublic.delete(`/cart/${id}`).then((res) => {
          if (res?.data?.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <tr className="">
      <th className="flex gap-2 items-center">
        <img
          className="w-16 h-16 object-cover"
          src={item.productDetails.imageUrls[0]}
          alt=""
        />
        <p className="text-black/60">{item.productDetails.title}</p>
      </th>
      <td>${item.productDetails.offeredPrice}</td>
      <td>
        <div className="join">
          <button
            onClick={() => handleChangeQuantity("+")}
            className="btn join-item"
          >
            <FaPlus />
          </button>
          <button className="btn join-item">{quantity}</button>
          <button
            onClick={() => handleChangeQuantity("-")}
            className="btn join-item"
          >
            <FaMinus />
          </button>
        </div>
      </td>
      <td>${(quantity * item.productDetails.offeredPrice).toFixed(2)}</td>
      <td className="text-right min-h-full items-center ">
        <div className="flex justify-end">
          <RiDeleteBin6Line className="cursor-pointer" onClick={() => handleDelete(item._id)} />
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
