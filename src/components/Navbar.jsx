import React, { useState } from "react";
import CustomButton from "./Home/Custom-button";
// import NavLinks from "./Navlinks";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-20 py-10 ">
      <div className="flex flex-wrap items-center justify-between gap-4 relative">
        {/* Logo */}
        <img
          src="./images/Edoubleone-logo-1.png"
          alt="Edoubleone logo"
          className="w-40 sm:w-48"
        />
  
        {/* Navigation */}
        <div
          className={`
            fixed md:static top-0 right-0
            w-64 md:w-auto h-full md:h-auto
            flex flex-col md:flex-row items-start md:items-center
            bg-[#283082] md:bg-transparent text-white z-[100]
            transition-transform duration-300 ease-in-out
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
            md:translate-x-0
          `}
        >
          {/* Close button - visible on mobile */}
          <div
            className="absolute top-6 left-4 md:hidden text-3xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <CloseIcon />
          </div>
  
          {/* Navigation links */}
          <ul className="flex flex-col md:flex-row w-full md:w-auto h-full md:h-auto mt-12 md:mt-0">
            {["Home", "About", "Services", "Portfolio", "Contact us", "Blog"].map((item, index) => (
              <li
                key={index}
                className="text-base hover:text-[#FF4B0A] transition-colors duration-200 px-8 py-10 md:px-4 md:py-2 border-b md:border-none flex items-center"
              >
                {item === "Services" ? (
                  <>
                    {item}
                    <img
                      className="w-4 h-4 ml-1"
                      src="./images/arrow_drop_down.png"
                      alt="arrow drop-down"
                    />
                  </>
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>
        </div>
  
        <CustomButton title="Get in touch" className="hidden md:inline-block" />
  
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
