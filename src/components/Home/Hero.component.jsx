import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroComponent = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  });

  return (
    <div className="w-full h-[80vh]">
      <div className="relative h-full px-10 md:px-40  flex  flex-col text-white">
        <div className="hidden w-[2000.98px] h-[1000.98px] xl:flex absolute bottom-[0] right-[0] z-[-10]">
          <img
            data-aos="zoom-in-down"
            className="w-full h-full"
            src="./images/Background-Pattern.png"
            alt="background-pattern"
          />
        </div>
        <div className="absolute top-[-5.8rem] left-[43rem] animate-pulse">
          <img className="w-full h-full" src="./images/stars.png" alt="" />
        </div>
        <div className="w-full h-full mb-5 z-10 flex items-start justify-center flex-col">
          <h1
            className="text-[60px] font-[500]  leading-[110%] "
            data-aos="slide-right"
          >
            We create{" "}
            <span
              className="animate-pulse text-[60px] bg-gradient-to-r from-[#B923FF] via-[#fff] to-[#B923FF] bg-clip-text text-transparent font-[500]"
            >
              beautiful Experience
            </span>{" "}
          </h1>
            
            <h1 className="text-[60px] leading-[110%] font-[500] mb-4" data-aos="slide-right" >
            Explore Our Portfolio
          </h1>

          <p className="w-full text-[20px] font-[400] leading-[157%] lg:w-[709px]">
            We are a software solutions company based in Maryland, USA, with a
            globally distributed team of experts. Since 2015, we’ve helped over
            500 happy clients achieve their digital goals by delivering
            scalable, optimized, and beautifully crafted solutions. At
            Edoubleone, every project is handled with attention to detail and a
            deep commitment to quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
