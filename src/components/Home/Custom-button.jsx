import React from "react";

const CustomButton = ({ title, className }) => {
  return (
    <>
      <button className={`${className} min-w-[50px] bg-[#FF4B0A] px-8 py-3 text-white text-[17px] rounded-md flex items-center justify-center opacity-100 hover:opacity-30 transition-opacity duration-400 animate-pulse`}>
        {title}
      </button>
    </>
  );
};

export default CustomButton;
