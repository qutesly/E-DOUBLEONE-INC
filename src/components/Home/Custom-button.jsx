import React from "react";

const CustomButton = ({ title, className }) => {
  return (
    <>
      <button className={`${className}min-w-[50px] bg-[#FF4B0A] px-8 py-3 text-white text-[17px] rounded-md flex items-center justify-center`}>
        {title}
      </button>
    </>
  );
};

export default CustomButton;
