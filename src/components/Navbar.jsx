import React, { useEffect, useState } from "react";
import CustomButton from "./Home/Custom-button";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import NavLinks from "./Navlinks";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const body = document?.body;
    if (body) {
      body.style.overflow = menuOpen ? "hidden" : "unset";
      body.style.position = menuOpen ? "fixed" : "static";
      body.style.width = menuOpen ? "100%" : "auto";
    }

    return () => {
      if (body) {
        body.style.overflow = "unset";
        body.style.position = "static";
        body.style.width = "auto";
      }
    };
  }, [menuOpen]);

  return (
    <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-20 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4 relative">
        {/* Logo */}
        <img
          src="./images/Edoubleone-logo-1.png"
          alt="Edoubleone logo"
          className="w-40 sm:w-48 cursor-pointer"
        />

        {/* Navigation */}
        <div
          className={`fixed md:static top-0 right-0 w-64 md:w-auto h-full md:h-auto flex flex-col md:flex-row items-start md:items-center bg-[#283082] md:bg-transparent text-white z-[500] transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0`}
        >
          {/* Close button - visible on mobile */}
          <div
            className="absolute top-4 left-2 md:hidden text-3xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <CloseIcon />
          </div>

          {/* Navigation links */}
         
          <div
            className={`absolute md:static top-full left-0 w-full md:w-auto transition-all duration-300 ease-in-out ${
              menuOpen ? "block" : "hidden"
            } md:block`}
          >
            <NavLinks />
          </div>
        </div>

        <CustomButton
          title="Get in touch"
          className="hidden md:block cursor-pointer button"
          // onClick={() => console.log("I am clicked")}
        />

        <div
          className="text-4xl text-white block md:hidden cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <MenuOpenIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
