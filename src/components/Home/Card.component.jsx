import React, { useEffect } from "react";
import CustomButton from "./Custom-button";
import Aos from "aos";
import "aos/dist/aos.css";

const CardComponent = ({ title, details, src, href, ...props }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="bg-[#141e36] p-5 rounded-3xl flex flex-col gap-6 items-start h-full"
      {...props}
    >
      <img className="w-full rounded-xl" src={src} alt={title} />
      <div className="leading-[30px]">
        <h2 className="text-[20px] font-[900]">{title}</h2>
        <p className="text-[12px] md:text-[18px] text-[#B4BEFF] font-[400] leading-[15px] md:leading-[22px]">
          {details}
        </p>
      </div>

      {/* ✅ Button group aligned and wrapped correctly */}
      <div className="flex flex-wrap gap-3 mt-auto">
        {/* <CustomButton title="Mobile App" className="hidden xl:block" /> */}
        {/* <CustomButton title="Website" className="hidden xl:block" /> */}
        <CustomButton title="View website" href={href} />
      </div>
    </div>
  );
};

export default CardComponent;
