import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact Us", path: "/contact" },
  { name: "Blog", path: "/blog" },
];

const NavLinks = ({ onClickLink }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center gap-6">
      {navItems.map((item) => (
        <li key={item.name} onClick={onClickLink}>
          <Link
            to={item.path}
            className="text-base hover:text-[#FF4B0A] transition-colors duration-200 flex items-center"
          >
            {item.name === "Services" ? (
              <>
                Services
                <img
                  className="w-4 h-4 ml-1"
                  src="./images/arrow_drop_down.png"
                  alt="dropdown icon"
                />
              </>
            ) : (
              item.name
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
