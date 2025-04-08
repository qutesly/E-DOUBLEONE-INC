import React from "react";
import CustomButton from "./Custom-button";

const Section2Component = () => {
  return (
    <div className="w-full h-full relative px-8  m-auto">
      <div className="absolute top-[0] left-[0] -z-10">
        <img src="./images/Background-Pattern (2).png" alt="" />
      </div>
      <div className="w-full flex justify-center items-center border m-auto text-white z-50">
        <div className="flex items-center justify-between mt-[120px] gap-5">
          <div className="w-[400px]">
            <h1 className="text-[64px] font-[900]">Project title</h1>
            <button className="bg-[#2A3187] px-4 py-2 w-[100px] text-[12px] rounded-md mb-2 z-50">
              Mobile App
            </button>
            <p className="text-[24px] z-50 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              corporis, sit quis laborum consequatur expedita labore!
            </p>
            <CustomButton title="Visit Project" className="w-[30px]" />
          </div>
          <div className="z-50">
            <img className="z-50" src="./images/iphone.png" alt="" />
            <img
              className="absolute hidden md:block top-[50%] right-[150px] translate-[50%]"
              src="./images/arrow-circle-right.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[150px] absolute left-0 right-0 bottom-0 z-50 bg-gradient-to-t from-[#3A4CBA] "></div>
    </div>
  );
};

export default Section2Component;
