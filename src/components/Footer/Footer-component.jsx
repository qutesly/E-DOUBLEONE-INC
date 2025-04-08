import React from "react";

const FooterComponent = () => {
  return (
    <div className="w-full border relative text-white">
      <div className="flex flex-col items-start gap-[19px] justify-between px-10 md:px-40 py-10">
        <img src="./images/Edoubleone-logo-1.png" alt="" />
        <p className="w-[311px]">
          Edoublone - the leading digital agency based in the Us, working with
          top-tier clients, from start-ups to enterprises.
        </p>
      </div>

      <div className="bottom-[0] left-[0] -z-10">
        <img src="./images/Footer-Background-Pattern.png" alt="" />
      </div>
    </div>
  );
};

export default FooterComponent;
