import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { NavLink } from "react-router";

export const route = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Product", link: "/product" },
 
  { name: "FAQ", link: "/faq" },
];
const TopNav = () => {

  return (
    <div className="flex justify-between items-center container px-5 mx-auto py-4 px-5">
      <ul className="flex gap-5">
        {route.map((item, index) => (
          <NavLink
            key={index}
            to={item?.link}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-primary cursor-pointer hover:scale-110 duration-300 font-semibold " : "hover:scale-110 duration-300"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </ul>

      <p className="flex gap-2 items-center">
        <IoCallOutline className="text-lg"/>  
        017111111111
      </p>


    </div>
  );
};

export default TopNav;
