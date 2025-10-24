import React from "react";
import { ProductData } from "../../Data/PopularProductData";
import WishListItem from "./WishlistItem";
import { FaCartPlus } from "react-icons/fa";

const Wishlist = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="overflow-x-auto">
        <table className="table min-w-[700px]  table-pin-rows  bg-[#F7F7F8]">
          {/* head */}
          <thead className="bg-[#E9E9E9]">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {ProductData.map((item, index) => (
              <WishListItem key={index} item={item} />
            ))}
            {/* row 2 */}
          </tbody>
        </table>
      </div>

     <div className="flex my-10 justify-center">
          <button className="btn btn-primary text-white"> <FaCartPlus /> Move All Item to Cart</button>
     </div>
    </div>
  );
};

export default Wishlist;
