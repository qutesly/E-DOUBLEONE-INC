import React, { useEffect } from "react";
import CustomButton from "./Custom-button";
import Aos from "aos";
import "aos/dist/aos.css";

const Section1Component = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const photos = [
    "./images/genzee-img.png",
    "./images/oversabi-nurse.png",
    "./images/ejiro-kitchen.png",
  ]

  return (
    <div className="w-full  h-full relative pt-[10rem] px-8">
      <div className="w-full absolute inset-0 bg-gradient-to-b from-black/30  z-10"></div>
      <div className=" w-[1960.98px] h-[800px] hidden xl:block absolute top-[0] right-[0] -z-50">
        <img
          className="w-full h-full"
          src="./images/Top-Background-Pattern.png"
          alt=""
          data-aos="zoom-in-up"
        />
      </div>
      <div className="w-full lg:w-[700px] m-auto flex flex-col items-center justify-center text-white text-center z-50 mb-16">
        <button className="bg-[#2A3187] min-w-[20px] px-4 py-2 text-[12px] rounded-md mb-2 z-50">
          Website
        </button>
        <h1
          className="text-[34px] lg:text-[60px] leading-[100%] font-[900] z-50"
          data-aos="zoom-in-up"
        >
          Genzee Real Estate
        </h1>
        <p className="text-[20px] z-50 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum
          arcu, posuere nec dolor ac, feugiat
        </p>
        <CustomButton title="View website" />
      </div>
      <div className="flex border items-center justify-between z-30">
        {/* <div> */}
          <img className="" src="./images/arrow-circle-right.png" alt="" />
        {/* </div> */}

        <div className="w-[70%] relative">
          <img
            className="w-full"
            src="./images/Union.png"
            alt=""
            data-aos="zoom-in-up"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%]">
          {/* {
            photos.map((src, id) => {
              <img key={id} src={src} data-aos={id % 2 === 0 ? 'fade-right' : 'fade-left'} />
            })
          } */}
            <img
            className="w-full h-full"
            src="./images/genzee-img.png"
            alt="" 
          />
          </div>
          
        </div>

        {/* <div> */}
          <img
            className=""
            src="./images/arrow-circle-right.png"
            alt=""
          />
        {/* </div> */}
      </div>
      <div className="w-full h-[150px] absolute left-0 right-0 bottom-0 z-[100] bg-gradient-to-t from-[#3A4CBA] "></div>
    </div>
  );
};

export default Section1Component;
