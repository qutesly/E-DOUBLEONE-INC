import React from "react";
import CustomButton from "./Custom-button";

const Section2Component = () => {
  return (
    <div className="w-full h-full relative px-8  m-auto z-[100]">
      <div className="absolute top-[0] left-[0] -z-20">
        <img src="./images/Background-Pattern (2).png" alt="" />
      </div>
      <div className="w-full flex justify-center items-center m-auto text-white z-50">
        <div className=" flex-col md:flex-row flex items-center justify-between mt-[120px] gap-5">
          <div className="w-full md:w-[400px] flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-[34px] lg:text-[60px] font-[900] leading-[100%] mb-6">
              Roader’s Map
            </h1>
            <button className="bg-[#2A3187] px-4 py-2 w-[100px] text-[12px] rounded-md mb-2 z-50">
              Mobile App
            </button>
            <p className="text-[18px] lg:text-[24px] z-50 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              ipsum arcu, posuere nec dolor ac, feugiat dictum urna.
            </p>
            <CustomButton title="Visit Project" className="mb-8 z-[100]" />
          </div>
          <div className="">
            <img className="z-50" src="./images/iPhone.png" alt="" />

            {/* <img
              className="absolute hidden lg:block top-[50%] right-[150px] translate-[50%]"
              src="./images/arrow-circle-right.png"
              alt=""
            /> */}
          </div>
        </div>
      </div>
      <div className="w-full h-[150px] absolute left-0 right-0 bottom-0 z-50 bg-gradient-to-t from-[#3A4CBA] "></div>
    </div>
  );
};

export default Section2Component;
