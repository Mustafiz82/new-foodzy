import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = ({item}) => {
  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = (delta) => {
    delta == "+"
      ? setQuantity((prev) => prev + 1)
      : quantity > 1
      ? setQuantity((prev) => prev - 1)
      : setQuantity((prev) => prev);
  };
  
  return (
    <tr className="">
      <th className="flex gap-2 items-center">
        <img className="w-16 h-16 object-cover" src={item.image} alt="" />
        <p className="text-black/60">{item.name}</p>
      </th>
      <td>${item.currentPrice}</td>
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
      <td>${(quantity * item.currentPrice).toFixed(2)}</td>
      <td className="text-right min-h-full items-center ">
        <div className="flex justify-end">
          <RiDeleteBin6Line />
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
