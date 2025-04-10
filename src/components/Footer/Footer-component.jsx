import React from "react";

const FooterComponent = () => {
  return (
    <div className="w-full relative text-white pb-32 overflow-hidden"> {/* ✅ Prevents overflow */}
    {/* Content Section */}
    <div className="w-full  flex flex-col md:flex-row items-start justify-between gap-10 px-6 sm:px-10 md:px-40 py-10">
      
      {/* Left Column */}
      <div className="flex flex-col items-start gap-5 max-w-full md:max-w-[311px]">
        <img
          src="./images/Edoubleone-logo-1.png"
          alt="Edoubleone Logo"
          className="w-[180px] object-contain"
        />
        <p className="text-[14px] leading-[1.6]">
          Edoubleone - the leading digital agency based in the US, working with
          top-tier clients, from start-ups to enterprises.
        </p>
      </div>
  
      {/* Right Column */}
      <div className="flex flex-col items-start gap-6 w-full md:w-auto overflow-hidden"> {/* ✅ overflow-hidden added */}
        
        {/* Contact Rows */}
        <div className="flex gap-4 items-center">
          <img src="./images/message.png" alt="Email icon" className="w-5 h-5" />
          <p className="text-sm break-all">support@edoubleone.net</p> {/* ✅ break-all prevents overflow */}
        </div>
        <div className="flex gap-4 items-center">
          <img src="./images/message.png" alt="Email icon" className="w-5 h-5" />
          <p className="text-sm break-all">support@edoubleone.net</p>
        </div>
        <div className="flex gap-4 items-center">
          <img src="./images/message.png" alt="Email icon" className="w-5 h-5" />
          <p className="text-sm break-all">support@edoubleone.net</p>
        </div>
  
        {/* Socials */}
        <div className="flex flex-wrap gap-4 mt-2">
          <img src="./images/facebook.png" alt="Facebook" className="w-6 h-6" />
          <img src="./images/instagram.png" alt="Instagram" className="w-6 h-6" />
          <img src="./images/LinkedIn.png" alt="LinkedIn" className="w-6 h-6" />
          <img src="./images/socials.png" alt="Socials" className="w-6 h-6" />
        </div>
      </div>
    </div>
  
    {/* Background Image */}
    <div className="w-full absolute bottom-0 left-0 -z-10">
      <img
        src="./images/Footer-Background-Pattern.png"
        alt="Footer Background"
        className="w-full object-cover"
      />
    </div>
  </div>
  );
};

export default FooterComponent;
