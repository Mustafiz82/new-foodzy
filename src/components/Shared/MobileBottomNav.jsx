import React, { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoCartOutline, IoLogInSharp } from "react-icons/io5";
import { Link } from "react-router";
import { AuthContext } from "../../context/Authcontext";

const MobileBottomNav = () => {
  const { user } = useContext(AuthContext);
  return (
    <ul className="flex lg:hidden !z-[999] justify-between px-4 text-white bg-primary fixed w-full bottom-0 py-3 gap-5">
    
      <Link className="flex-1" to={"/"}>
          <li className="flex flex-1 flex-col  items-center gap-2">
        <FaHome className="text-2xl" /> Home{" "}
      </li>
      </Link>
      {user?.email ? (
        <Link className="flex-1" to={"/user"}>
          <li className="flex flex-1 flex-col  items-center gap-2">
            <FaUser className="text-2xl" /> Account{" "}
          </li>
        </Link>
      ) : (
        <Link className="flex-1" to={"/login"}>
          <li className="flex flex-1 flex-col  items-center gap-2">
            <IoLogInSharp className="text-[26px]" /> Login{" "}
          </li>
        </Link>
      )}
      <Link className="flex-1" to={"/wishlist"}>
        <li className="flex flex-1 flex-col  items-center gap-2">
          <FaHeart className="text-2xl" /> WishList{" "}
        </li>
      </Link>
      <Link className="flex-1" to={"/cart"}>
        <li className="flex flex-1  flex-col  items-center gap-2">
          <FaShoppingCart className="text-2xl" /> Cart{" "}
        </li>
      </Link>
    </ul>
  );
};

export default MobileBottomNav;
