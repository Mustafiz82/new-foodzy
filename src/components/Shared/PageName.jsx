import React from "react";
import { useLocation } from "react-router";

const PageName = () => {
  const { pathname } = useLocation();

  console.log(pathname.length)

  const newPathName = pathname.slice(1);
  console.log(pathname);
  return (
    <div className={`${pathname.length <= 1 && "hidden"} lg:bg-primary`}>
      <div className="container capitalize flex justify-between lg:text-white font-semibold mx-auto p-5">
        <p>{newPathName || ""}</p>
        <p>Home - {newPathName || ""}</p>
      </div>
    </div>
  );
};

export default PageName;
