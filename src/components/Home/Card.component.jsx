import React from "react";
import CustomButton from "./Custom-button";

const CardComponent = ({ title, details, href, images }) => {
  return (
    <>
      <div className="bg-[#141e36] p-5 rounded-3xl flex flex-col gap-[32px] items-start">
        {/* <div className="w-full">
          {images.map((image, index) => (
            <img key={index} className="w-full mb-4" src={image} alt="" />
          ))}
        </div> */}
        <img className="w-full " src="./images/PlaceHolder.png" alt="" />
        <h2 className="text-[24px] font-[900] ">{title}</h2>
        <p className="text-[17px] font-[400] leading-[22px]">{details}</p>
        <div className="flex gap-[8px]">
          <CustomButton title="Mobile App" className="hidden xl:block" />
          <CustomButton title="Website" className="hidden xl:block" />
          <CustomButton title="View website" href={href} />
        </div>
      </div>
    </>
  );
};

export default CardComponent;
