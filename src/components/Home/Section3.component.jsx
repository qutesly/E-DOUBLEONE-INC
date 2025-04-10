import React, { useEffect } from "react";
import CardComponent from "./Card.component";
import Aos from "aos";
import "aos/dist/aos.css";

const Section3Component = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-[710px] left-[0] -z-10">
        <img src="./images/Background-Pattern-(1).png" alt="" />
      </div>
      <div className="flex flex-col text-white mt-[3rem] md:mt-[10rem] px-10 md:px-40 mb-5 z-50">
        <h1 className="text-[34px] lg:text-[60px] w-full md:w-[606px] font-[900] text-start leading-[36px] md:leading-[75px] mt-8 mb-4">
          More Projects From our Archive
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 overflow-x-hidden">
          <CardComponent
            title="OverSabi Nurse"
            href="https://www.ejirokitchen.com/"
            src="./images/oversabi-project.png"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum arcu, posuere nec dolor ac, feugiat dictum urna. "
            data-aos="slide-right"
          />
          <CardComponent
            title="Genzee Real Estate"
            href="http://firstclassfinserve.com/"
            src="./images/genzee-project.png"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum arcu, posuere nec dolor ac, feugiat dictum urna. "
            data-aos="slide-left"
          />
          <CardComponent
            title="Ejiro's Kitchen"
            href="https://roadersmap.com/"
            src="./images/ejiro-project.png"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum arcu, posuere nec dolor ac, feugiat dictum urna. "
            data-aos="fade-down-left"
          />
          <CardComponent
            title="First Class Financial"
            href=""
            src="./images/first-class-project.png"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum arcu, posuere nec dolor ac, feugiat dictum urna. "
            data-aos="fade-down-right"
          />
          <CardComponent
            title="Memscepter"
            href=""
            src="./images/memscepter-project.png"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum arcu, posuere nec dolor ac, feugiat dictum urna. "
            data-aos="zoom-in-left"
          />
          <CardComponent
            title="Summit Alliance"
            href=""
            src="./images/summit-project.png"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum arcu, posuere nec dolor ac, feugiat dictum urna. "
            data-aos="zoom-in-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3Component;
