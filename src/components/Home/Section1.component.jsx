import React, { useEffect, useRef, useState } from "react";
import CustomButton from "./Custom-button";
import Aos from "aos";
import "aos/dist/aos.css";

// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Section1Component = () => {
  const photos = [
    "./images/genzee-img.png",
    "./images/oversabi-nurse.png",
    "./images/ejiro-kitchen.png",
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [isPaused, photos.length]);

  const pauseAutoSlide = () => {
    setIsPaused(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  const prevImage = () => {
    if (current > 0) {
      pauseAutoSlide();
      setCurrent((prev) => prev - 1);
    }
  };

  const nextImage = () => {
    if (current < photos.length - 1) {
      pauseAutoSlide();
      setCurrent((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full h-full relative pt-[10rem] px-8 overflow-hidden">
      <div className="w-full absolute inset-0 bg-gradient-to-b from-black/30 z-10"></div>

      <div className="w-[1960.98px] h-[800px] hidden xl:block absolute top-[0] right-[0] -z-50">
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
          className="text-[34px] lg:text-[60px] leading-[100%] font-[900]"
          data-aos="zoom-in-up"
        >
          Genzee Real Estate
        </h1>
        <p className="text-[20px] mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum
          arcu, posuere nec dolor ac, feugiat
        </p>
        <CustomButton title="View website" />
      </div>

      {/* Image slider area */}
      <div className="flex items-center justify-between z-30 relative">
        {/* Prev Button */}
        <button
          onClick={prevImage}
          disabled={current === 0}
          className={`transition-opacity ${
            current === 0
              ? "opacity-0 cursor-not-allowed"
              : "cursor-pointer hover:opacity-80"
          }`}
        >
          <img
            className="cursor-pointer"
            src="./images/arrow-circle-right.png"
            alt="prev arrow"
          />
        </button>

        {/* Image container with Union bg */}
        <div className="w-[70%] relative flex items-center justify-center">
          <img
            className="w-full"
            src="./images/Union.png"
            alt=""
            data-aos="zoom-in-up"
          />
          <div className="absolute top-1/2 left-1/2 w-[100%] aspect-[1/1] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center px-8 pt-8 overflow-hidden">
            <img
              key={current}
              className="w-full h-full object-contain rounded-lg "
              src={photos[current]}
              alt=""
              data-aos={current % 2 === 0 ? "slide-right" : "slide-left"}
            />
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextImage}
          disabled={current === photos.length - 1}
          className={`transition-opacity ${
            current === photos.length - 1
              ? "opacity-0 cursor-not-allowed"
              : "cursor-pointer hover:opacity-80"
          }`}
        >
          <img
            className="cursor-pointer"
            src="./images/arrow-circle-right.png"
            alt="next arrow"
          />
        </button>
      </div>

      <div className="w-full h-[150px] absolute left-0 right-0 bottom-0 z-[100] bg-gradient-to-t from-[#3A4CBA] "></div>
    </div>
  );
};

export default Section1Component;
