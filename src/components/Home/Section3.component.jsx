import React from "react";
import CardComponent from "./Card.component";

const Section3Component = () => {
  return (
    <div className="relative">
      <div className="absolute top-[700px] left-[0] -z-10">
        <img src="./images/Background-Pattern-(1).png" alt="" />
      </div>
      <div className="flex flex-col text-white mt-[10rem] px-10 md:px-40 mb-5 z-50">
        <h1 className="text-[64px] font-[900] w-[606px] leading-[75px] mt-8 mb-4">
          More Projects From our Archive
        </h1>
        <div className="grid grid-cols-2 gap-10">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        </div>
      </div>
    </div>
  );
};

export default Section3Component;
