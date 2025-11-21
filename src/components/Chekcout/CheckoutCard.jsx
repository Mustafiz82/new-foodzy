import React from "react";
import { GoStar, GoStarFill } from "react-icons/go";
import Rating from "react-rating";

const CheckoutCard = ({ item }) => {
  return (
    <div className="flex gap-4">
      <img className="w-28" src={item.productDetails.imageUrls[0]} alt="" />
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
    </div>
  );
};

export default CheckoutCard;
