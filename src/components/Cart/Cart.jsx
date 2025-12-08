import { Link } from "react-router";
import Title from "../Shared/Title";
import CartItem from "./CartItem";
import ProductCard from "../Shared/ProductCard";
import useFetch from "../../hook/useFetch";
import { useContext } from "react";
import { AuthContext } from "../../context/Authcontext";
import { CartContext } from "../../context/CartContext";
import { MdDelete } from "react-icons/md";
import axiosPublic from "../../config/axiosPublic";
import Swal from "sweetalert2";
const Cart = () => {

  const { data: ProductData } = useFetch("product");

  const { cartState, refetch, handleUpdateQuantity } = useContext(CartContext);

  const handleDeleteAll = () => {
    try {
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
          axiosPublic.delete("/cart").then((res) => {
            if (res?.data?.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        }
      });
    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-5 ">
      <div className="overflow-x-auto ">
        <table className="table  table-pin-rows min-w-[700px] bg-[#F7F7F8]">
          {/* head */}
          <thead className="bg-[#E9E9E9] ">
            <tr className="!z-[0]">
              <th>Product</th>
              <th>Price </th>
              <th>Quantity</th>
              <th>Total</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cartState.map((item, index) => (
              <CartItem
                handleUpdateQuantity={handleUpdateQuantity}
                refetch={refetch}
                key={index}
                item={item}
              />
            ))}
            {/* row 2 */}
          </tbody>
        </table>
      </div>

      <div className="flex my-10 justify-between items-center">
        <Link className="underline text-black/70" to={"#"}>
          Continue Shopping.
        </Link>
        <div className="flex gap-5">
          <button
            onClick={handleDeleteAll}
            className="btn bg-red-600 text-white"
          >
            <MdDelete /> Clear Cart
          </button>
          <Link to={"/checkout"}>
            <button className="btn bg-primary text-white">Checkout</button>
          </Link>
        </div>
      </div>

      <Title
        title={"Popular Products"}
        subTitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis."
        }
      />

      <div className="grid gap-5 mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {ProductData.slice(0, 4).map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
