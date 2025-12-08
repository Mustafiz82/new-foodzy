import React, { useContext } from "react";
import { Link, Outlet } from "react-router";
import { AuthContext } from "../context/Authcontext";

const UserLayout = () => {
  const { signOutUser } = useContext(AuthContext);
  return (
    <div className="drawer drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="p-5">
          <Outlet />
        </div>
        <label
          htmlFor="my-drawer"
          className="btn lg:hidden btn-primary drawer-button"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-lg text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}

          <li>
            <Link to={"/user/my-order"}>My Orders</Link>
          </li>
          <li>
            <a>Return And Refunds</a>
          </li>
          <li>
            <Link to={"/user"}>Update Profile </Link>
          </li>
          <li>
            <a>WishList </a>
          </li>
          <li>
            <a> Cart </a>
          </li>
          <li>
            <a> Ratings & reviews</a>
          </li>

          <button onClick={signOutUser} className="mt-auto">
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default UserLayout;
