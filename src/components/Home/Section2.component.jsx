import React, { useEffect, useRef, useState } from "react";
import CustomButton from "./Custom-button";
import Aos from "aos";
import "aos/dist/aos.css";

const Section2Component = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const slides = [
    {
      backgroundImage: "./images/roaders-map-map.png"
    },
    {
      backgroundImage: "./images/roaders-map.png"
    },
    {
      backgroundImage: "./images/roaders-map-map1.png"
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const { backgroundImage } = slides[currentIndex];

  return (
    <div className="w-full h-full relative px-6 sm:px-8 mx-auto z-[100] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 -z-20 w-full">
        <img
          src="./images/Background-Pattern (2).png"
          alt="Background Pattern"
          className="w-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center mx-auto text-white z-50">
        <div className="w-full flex flex-col md:flex-row items-center justify-center mt-[70px] md:mt-[120px] gap-10 md:gap-5 px-2">
          {/* Left Content */}
          <div className="relative md:static flex flex-col items-center md:items-start text-center md:text-left max-w-[500px] z-[100]">
            {/* Mobile App Button - Mobile */}
            <button className="bg-[#2A3187] md:hidden px-4 py-2 text-[12px] rounded-md mb-2">
              Mobile App
            </button>

            {/* Title */}
            <h1
              className="text-[20px] lg:text-[56px] font-[900] leading-tight mb-4 break-words"
              data-aos="slide-down"
            >
              Roader's Map
            </h1>

            {/* Mobile App Button - Desktop */}
            <button className="bg-[#2A3187] hidden md:inline-block px-4 py-2 text-[12px] rounded-md mb-4">
              Mobile App
            </button>

            {/* Description */}
            <p className="text-[12px] text-[#B4BEFF] md:text-[18px] mb-4 leading-[1.4] text-center md:text-left break-words">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              ipsum arcu, posuere nec dolor ac, feugiat dictum urna.
            </p>

            {/* CTA Button */}
            <CustomButton title="Visit Project" className="mb-6" href="https://roadersmap.com/" />
          </div>

          {/* Right Image */}
          <div className="relative md:max-w-none px-2" data-aos="zoom-in-right">
            {/* iPhone Image */}
            <img
              className="w-full object-contain"
              src={backgroundImage}
              alt="iPhone image"
            />
          </div>
        </div>
      </div>

      {/* Gradient Backgrounds */}
      <div className="w-full md:hidden h-[400px] absolute bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-[#17223E]"></div>
      <div className="w-full hidden md:block h-[100px] absolute bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-[#3A4CBA]"></div>
    </div>
  );
};

export default Section2Component;
