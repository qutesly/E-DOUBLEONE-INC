import React, { useEffect } from "react";
import CustomButton from "./Custom-button";
import Aos from "aos";
import 'aos/dist/aos.css';

const CardComponent = ({ title, details, href, src, ...rest }) => {
  useEffect(() => {
    Aos.init({ duration: 1000})
  }, [])
  return (
    <>
      <div className="bg-[#141e36] p-5 rounded-3xl flex flex-col gap-[32px] items-start" {...rest}>
        <div className="w-full">
            <img className="w-full mb-4" src={`${src}`}  alt="" />
        </div>
        <h2 className="text-[24px] font-[900] ">{title}</h2>
        <p className="text-[17px] font-[400] leading-[22px]">{details}</p>
        <div className="flex flex-wrap gap-[8px]">
          <CustomButton title="Mobile App" className="block md:hidden xl:block" />
          <CustomButton title="Website" className="block md:hidden xl:block" />
          <CustomButton title="View website" href={href} />
        </div>
      </div>
    </>
  );
};

export default CardComponent;
