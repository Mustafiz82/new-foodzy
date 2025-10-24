import React, { useContext, useState } from "react";
import logo from "../../assets/Layout/logo.png";
import { IoCartOutline, IoChevronDown } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router";
import { AuthContext } from "../../context/Authcontext";
import { MdOutlineAccountCircle } from "react-icons/md";

const Nav = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const category = [
    "Fruits",
    "Vegetables",
    "Grains",
    "Proteins",
    "Dairy",
    "Seafood",
    "Beverages",
    "Snacks",
    "Baked Goods",
    "Sweets",
    "Spices & Herbs",
    "Condiments & Sauces",
    "Frozen Foods",
    "Canned & Jarred Foods",
    "Prepared Meals",
    
  ];

  console.log(isDropDownOpen);

  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <div className="container px-5 flex  items-center justify-between mx-auto">
      <div className="flex  items-center">
        <img src={logo} className="" />
        <div>
          <h2 className="capitalize font-bold font-sans text-2xl">foodzy</h2>
          <p className="text-sm font-semibold "> A Treasure of Tastes</p>
        </div>
      </div>

      <div className="flex  w-[500px] ">
        <input
          type="text"
          className="border flex-1 rounded-l-md focus:border-2 border-[#64B496] focus:outline-[#64B496] p-4  "
          placeholder="Search For Items"
        />
        <div className="relative">
          <div
            onClick={() => setIsDropDownOpen((prev) => !prev)}
            className="flex p-4 border-y  border-[#64B496]  items-center gap-2"
          >
            All Categories <IoChevronDown />
          </div>
          <div
            className={`absolute  z-[999] duration-300 ${
              isDropDownOpen ? "h-[400px]" : "h-0"
            }  overflow-auto w-[200px] top-[60px] shadow-sm`}
          >
            {category.map((item, idx) => (
              <div className="p-4 py-2 hover:bg-black/5  bg-white" key={idx}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <button className="btn rounded-l-none m-0 outline-0 hover:outline-0 outline-offset-0 bg-primary h-auto text-white">
          <FaSearch />
        </button>
      </div>

      <div>
        <ul className="flex  gap-5">
          {user?.email ? (
            <Link to={"/user"}>
              <li className="flex items-center gap-2">
                <MdOutlineAccountCircle  /> Account{" "}
              </li>
            </Link>
          ) : (
            <Link to={"/login"}>
              <li className="flex items-center gap-2">
                <FiUser /> Login{" "}
              </li>
            </Link>
          )}

         <Link to={"/wishlist"}>
          <li className="flex items-center gap-2">
            <CiHeart /> WishList{" "}
          </li></Link>
          <Link to={"/cart"}>
            <li className="flex items-center gap-2">
              <IoCartOutline /> Cart{" "}
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
