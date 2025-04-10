import React, { useEffect } from "react";
import CardComponent from "./Card.component";
import Aos from "aos";
import "aos/dist/aos.css";

const Section3Component = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative overflow-hidden"> {/* ✅ Ensures nothing spills outside */}
  <div className="absolute top-[710px] left-0 -z-10 w-full">
    <img
      src="./images/Background-Pattern-(1).png"
      alt=""
      className="w-full object-cover"
    />
  </div>

  <div className="flex flex-col text-white mt-[3rem] md:mt-[5rem] px-6 sm:px-10 md:px-20 lg:px-40 mb-5 z-50">
    <h1 className="text-[30px] lg:text-[56px] font-[900] text-start leading-[40px] md:leading-[60px] mt-8 mb-4 w-full max-w-[300px] md:max-w-[606px]">
      More Projects From our Archive
    </h1>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/** Example of one refactored card: */}
      <CardComponent
        title="OverSabi Nurse"
        href="https://oversabinurse.com/"
        src="./images/oversabi-project.png"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum arcu, posuere nec dolor ac, feugiat dictum urna."
        data-aos="slide-right"
      />
      <CardComponent
        title="Genzee Real Estate"
        href="/https://www.genzeerealty.com/"
        src="./images/genzee-project.png"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum arcu, posuere nec dolor ac, feugiat dictum urna."
        data-aos="slide-left"
      />
      <CardComponent
        title="Ejiro's Kitchen"
        href="https://www.ejirokitchen.com/"
        src="./images/ejiro-project.png"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum arcu, posuere nec dolor ac, feugiat dictum urna."
        data-aos="fade-down-left"
      />
      <CardComponent
        title="First Class Financial"
        href="http://firstclassfinserve.com/"
        src="./images/first-class-project.png"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum arcu, posuere nec dolor ac, feugiat dictum urna."
        data-aos="fade-down-right"
      />
      <CardComponent
        title="Memscepter"
        href="/https://www.memscepterbhc.com/"
        src="./images/memscepter-project.png"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum arcu, posuere nec dolor ac, feugiat dictum urna."
        data-aos="zoom-in-left"
      />
      <CardComponent
        title="Summit Alliance"
        href="/"
        src="./images/summit-project.png"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum arcu, posuere nec dolor ac, feugiat dictum urna."
        data-aos="zoom-in-right"
      />
    </div>
  </div>
</div>
  );
};

export default Section3Component;
