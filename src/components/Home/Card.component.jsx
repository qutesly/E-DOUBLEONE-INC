import React from "react";
import CustomButton from "./Custom-button";

const CardComponent = () => {
  return (
    <>
      <div className="bg-[#141e36] p-5 rounded-3xl flex flex-col gap-[32px] items-start">
        <img className="w-full " src="./images/PlaceHolder.png" alt="" />
        <h2 className="text-[24px] font-[900] ">Project Title</h2>
        <p className="text-[17px] font-[400] leading-[22px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint neque
          reiciendis, obcaecati corporis aspernatur aperiam. Atque, tempore eos.
        </p>
        <div className="flex gap-[8px]">
          <CustomButton title="Mobile App" />
          <CustomButton title="Website" />
          <CustomButton title="SaaS" />
        </div>
      </div>
    </>
  );
};

export default CardComponent;
