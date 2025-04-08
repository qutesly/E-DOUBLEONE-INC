import React from "react";

const NavLinks = ({className}) => {
  return (
    <>
      <ul className={`${className}text-[#9A9A9A] flex items-center justify-between cursor-pointer`}>
        <li className="px-3 hover:text-[#FF4B0A]">Home</li>
        <li className="px-3 hover:text-[#FF4B0A]">About</li>
        <li className="flex items-center justify-center px-3 hover:text-[#FF4B0A]">
          Services{" "}
          <img src="./images/arrow_drop_down.png" alt="arrow drop-down" />{" "}
        </li>
        <li className="px-3 hover:text-[#FF4B0A]">Portfolio</li>
        <li className="px-3 hover:text-[#FF4B0A]">Contact Us</li>
        <li className="px-3 hover:text-[#FF4B0A]">Blog</li>
      </ul>
    </>
  );
};

export default NavLinks;
