import React from "react";

const HeroComponent = () => {
  return (
    <div className="w-full mt-20">
      <div className="relative px-10 md:px-40  flex flex-col text-white">
        <div className="absolute top-[-270px] right-[0] z-[-10]">
          <img
            src="./images/Background-Pattern.png"
            alt=""
          />
        </div>
        <div className="w-full mb-5 z-10 flex flex-col">
          <h1 className="text-[64px] font-[500] -mb-7">
            We create{" "}
            <span className="bg-gradient-to-r from-[#B923FF] via-[#fff] to-[#B923FF] bg-clip-text text-transparent font-[500]">
              beautiful Experience
            </span>{" "}
          </h1>
          <h1 className="text-[64px] ">Explore Our Portfolio</h1>
          <p className="w-full text-[18px] lg:w-[507px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            blanditiis deserunt dolore veniam fugiat eius suscipit, a dolor?
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
