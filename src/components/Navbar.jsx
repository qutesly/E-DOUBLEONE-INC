import React from "react";
import CustomButton from "./Home/Custom-button";
import NavLinks from "./Navlinks";

const Navbar = () => {
  return (
    <div className="w-full md:-[1500px] px-8 lg:px-28 py-10 m-auto">
      <div className="w-full p-4 flex items-center justify-between">
        <img
          src="./images/Edoubleone-logo-1.png"
          alt="Edoubleone logo"
          className="w-[186px]"
        />
        <NavLinks className="hidden lg:flex " />
        <CustomButton title="Get in touch" />
      </div>
    </div>
  );
};

export default Navbar;
