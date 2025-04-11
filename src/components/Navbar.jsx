import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./Home/Custom-button";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import NavLinks from "./Navlinks";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    body.style.overflow = menuOpen ? "hidden" : "unset";
    body.style.position = menuOpen ? "fixed" : "static";
    body.style.width = menuOpen ? "100%" : "auto";

    return () => {
      body.style.overflow = "unset";
      body.style.position = "static";
      body.style.width = "auto";
    };
  }, [menuOpen]);

  return (
    <div className="w-full  text-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-20 py-6 flex items-center justify-between relative">
        
        {/* Logo (left) */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="./images/Edoubleone-logo-1.png"
            alt="Edoubleone logo"
            className="w-40 sm:w-48 cursor-pointer"
          />
        </Link>

        {/* Nav links (center) */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavLinks />
        </div>

        {/* CTA Button (right on desktop) */}
        <div className="hidden md:block">
          <CustomButton
            title="Get in touch"
            className="cursor-pointer"
            onClick={() => console.log("I am clicked")}
          />
        </div>

        {/* Hamburger Menu (mobile only) */}
        <div
          className="text-3xl text-white block md:hidden cursor-pointer ml-auto"
          onClick={() => setMenuOpen(true)}
        >
          <MenuOpenIcon />
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#283082] text-white z-[999] transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close Button */}
        <div
          className="absolute top-4 left-4 text-3xl cursor-pointer"
          onClick={() => setMenuOpen(false)}
        >
          <CloseIcon />
        </div>

        {/* Mobile Nav Links */}
        <div className="mt-20 px-6">
          <NavLinks onClickLink={() => setMenuOpen(false)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
