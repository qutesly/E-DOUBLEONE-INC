import React from "react";
import HeroComponent from "../components/Home/Hero.component";
import Section1Component from "../components/Home/Section1.component";
import Section2Component from "../components/Home/Section2.component";
import Section3Component from "../components/Home/Section3.component";
import ContactUs from "../components/Home/ContactUs";

const Home = () => {
  return (
    <>
    <HeroComponent />
    <Section1Component />
    <Section2Component />
    <Section3Component />
    <ContactUs />
    </>
  );
};

export default Home;
