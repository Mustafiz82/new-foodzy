import React from "react";
import { FaCrop } from "react-icons/fa";
import { GoStar, GoStarFill } from "react-icons/go";
import Rating from "react-rating";
import { RxCross2 } from "react-icons/rx";

const CheckoutCard = ({ item }) => {
  return (
    <div className="flex relative gap-4">
      <img className="w-28 h-28 object-cover" src={item.productDetails.imageUrls[0]} alt="" />
      <div className="space-y-2">
        <h2 className="text-xl font-semibold ">{item.productDetails.title}</h2>
        <Rating
          emptySymbol={<GoStar className="text-xl text-primary" />}
          fullSymbol={<GoStarFill className="text-xl text-primary" />}
          initialRating={4}
          readonly
        />
        <div className="space-x-3">
          <span className="font-bold text-primary text-lg"> ${item.productDetails.offeredPrice}</span>
          <del className=" text-black/70  ">${item.productDetails.originalPrice}</del>
        </div>

        {/* <p>Quantity : {item}</p> */}
      </div>
      <p className="absolute flex gap-1 bg-primary  p-2 py-1 text-white font-bold text-lg rounded-md items-center top-1/2 right-0 -translate-y-1/2"><RxCross2/>  {item?.quantity}</p>
    </div>
  );
};

export default CheckoutCard;
