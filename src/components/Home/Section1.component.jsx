import React from "react";
import CustomButton from "./Custom-button";

const Section1Component = () => {
  return (
    <div className="w-full h-full relative pt-[10rem] px-8">
      <div className="w-full absolute inset-0 bg-gradient-to-b from-black/30  z-10"></div>
      <div className="hidden xl:block absolute top-[3px] right-[0] -z-10">
        <img src="./images/Top-Background-Pattern.png" alt="" />
      </div>
      <div className="w-full lg:w-[700px] m-auto flex flex-col items-center justify-center text-white text-center z-50 mb-16">
        <button className="bg-[#2A3187] min-w-[20px] px-4 py-2 text-[12px] rounded-md mb-2 z-50">
          Website
        </button>
        <h1 className="text-[64px] font-[900] z-50">Project title</h1>
        <p className="text-[24px] z-50 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          corporis, sit quis laborum consequatur expedita labore!
        </p>
        <CustomButton title="View website" />
      </div>
      <div className="flex items-center justify-center relative z-30">
        <img className="w-[790px]" src="./images/Union.png" alt="" />
        <img className="absolute hidden lg:block top-[5px] right-[100px]" src="./images/arrow-circle-right.png" alt="" />
      </div>
      <div className="w-full h-[150px] absolute left-0 right-0 bottom-0 z-50 bg-gradient-to-t from-[#3A4CBA] "></div>
    </div>
  );
};

export default Section1Component;
