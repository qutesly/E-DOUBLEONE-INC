import React from "react";

const CustomButton = ({ title, className, href, onClick }) => {
  const handleClick = (e) => {
    if (href) {
      window.open(href, "_blank");
    }
    if (onClick) {
      onClick(e); // Pass the event to the parent handler if needed
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} min-w-[40px] bg-[#FF4B0A] px-8 py-3 text-white text-[10px] md:text-[14px] rounded-md flex items-center justify-center hover:bg-[#ff4c1fb4] cursor-pointer transition-opacity`}
    >
      {title}
    </button>
  );
};

export default CustomButton;