import React, { useRef } from "react";
import HeroComponent from "../components/Home/Hero.component";
import Section1Component from "../components/Home/Section1.component";
import Section2Component from "../components/Home/Section2.component";
import Section3Component from "../components/Home/Section3.component";
import ContactUs from "../components/Home/ContactUs";
import Navbar from "../components/Navbar";

const Home = () => {
  const contactRef = useRef(null);

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <HeroComponent onScroll={handleScrollToContact}/>
      <Section1Component />
      <Section2Component />
      <Section3Component />
      <ContactUs ref={contactRef} />
    </>
  );
};

export default Home;
