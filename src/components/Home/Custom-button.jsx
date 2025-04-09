import React from "react";

const CustomButton = ({ title, className, href, onClick }) => {
  const handleClick = () => {
    if (href) {
      window.open(href, "_blank");
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`${className} min-w-[50px] bg-[#FF4B0A] px-8 py-3 text-white text-[17px] rounded-md flex items-center justify-center opacity-100 hover:opacity-30 transition-opacity `}
      >
        {title}
      </button>
    </>
  );
};

export default CustomButton;
