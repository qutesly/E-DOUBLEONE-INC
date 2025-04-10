import React from "react";
import CustomButton from "./Custom-button";

const Section2Component = () => {
  return (
    <div className="w-full h-full relative px-8  m-auto z-[100]">
      <div className="absolute top-[0] left-[0] -z-20">
        <img src="./images/Background-Pattern (2).png" alt="" />
      </div>
      <div className=" flex justify-center items-center m-auto text-white z-50 ">
        <div className="w-full relative flex-col md:flex-row flex items-center justify-center mt-[70px] md:mt-[120px] gap-5">
          <div className="absolute -bottom-10 w-full md:w-[500px] md:relative flex flex-col items-center md:items-start text-center md:text-left z-[100]">
          <button className="bg-[#2A3187] block md:hidden px-4 py-2 w-[100px] text-[12px] rounded-md mb-2 z-50">
              Mobile App
            </button>
            <h1 className="text-[34px] lg:text-[60px] font-[900] leading-[100%] mb-6 z-[100]">
              Roader’s Map
            </h1>
            <button className="bg-[#2A3187] hidden md:block px-4 py-2 w-[100px] text-[12px] rounded-md mb-2 z-50">
              Mobile App
            </button>
            <p className="text-[18px] lg:text-[24px] z-[100] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              ipsum arcu, posuere nec dolor ac, feugiat dictum urna.
            </p>
            <CustomButton title="Visit Project" className="mb-8 z-[100]" />
          </div>
          <div className="w-[300px] md:w-[368px] px-4">
            <img className="w-full " src="./images/iPhone.png" alt="" />
          </div>
        </div>
      </div>
      <div className="w-full md:hidden h-[400px] absolute left-0 right-0 bottom-0 z-50 bg-gradient-to-t from-[#17223E] "></div>
      <div className="w-full hidden md:inline-block h-[100px] absolute left-0 right-0 bottom-0 z-50 bg-gradient-to-t from-[#3A4CBA] "></div>
    </div>
  );
};

export default Section2Component;
