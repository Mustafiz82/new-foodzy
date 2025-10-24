import React from "react";

const Title = ({ title, subTitle }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl  font-bold ">{title}</h1>
      <p className="max-w-lg mx-auto mt-4  text-black/80 ">
      {subTitle}
      </p>
    </div>
  );
};

export default Title;
