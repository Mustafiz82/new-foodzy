import React from "react";
import logo from "../../assets/Layout/logo.png";
import { FaSearch } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { route } from "./TopNav";
import { NavLink } from "react-router";

const MobileHeader = () => {
  return (
    <div className="  lg:hidden">
      <div className="flex bg-primary text-white px-4 justify-between">
        <div className="flex  items-center">
          <img src={logo} className="" />
          <div>
            <h2 className="capitalize font-bold font-sans text-2xl">foodzy</h2>
            <p className="text-sm font-semibold "> A Treasure of Tastes</p>
          </div>
        </div>

        <div className="flex gap-5 items-center">
        

          <label htmlFor="my-drawer" className="">
            <RiMenu3Fill className="text-3xl" />
          </label>
        </div>
      </div>

      <div className="bg-primary px-2 pb-2">
        <input
          type="text"
          className=" border-2 bg-white flex-1 focus:outline-0 border-primary w-full rounded-l-md  p-4  "
          placeholder="Search For Items"
        />
      </div>

      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu !relative !z-[9999] bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}

            {route.map((item, index) => (
              <NavLink
                key={index}
                to={item?.link}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-primary hover:scale-105 duration-300 font-semibold "
                    : "hover:scale-105 my-2 duration-300"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
