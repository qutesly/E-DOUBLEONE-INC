import React, { useEffect, useRef, useState } from "react";
import CustomButton from "./Custom-button";
import Aos from "aos";
import "aos/dist/aos.css";

const Section1Component = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "./images/genzee-img.png",
      title: "Genzee Real Estate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum arcu, posuere nec dolor ac, feugiat.",
      url: "/",
    },
    {
      image: "./images/oversabi-nurse.png",
      title: "OverSabi Nurse",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum arcu, posuere nec dolor ac, feugiat.",
      url: "/",
    },
    {
      image: "./images/ejiro-kitchen.png",
      title: "Ejiro's Kitchen",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum arcu, posuere nec dolor ac, feugiat.",
      url: "/",
    },
  ];

  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const pauseAutoSlide = () => {
    setIsPaused(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      pauseAutoSlide();
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const nextImage = () => {
    if (currentIndex < slides.length - 1) {
      pauseAutoSlide();
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative pt-8 md:pt-20 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src="./images/Top-Background-Pattern.png"
          alt="Background Pattern"
          data-aos="zoom-in-up"
        />
      </div>

      {/* Content */}
      <div className="w-full max-w-3xl text-white flex items-center justify-center flex-col gap-8 text-center z-10 mb-8 md:mb-16">
        <button className="bg-[#2A3187] px-4 py-2 text-sm rounded-md mb-2">
          Website
        </button>
        <h1
          className="text-2xl md:text-5xl font-bold leading-tight"
          data-aos="slide-left"
        >
          {slides[currentIndex].title}
        </h1>
        <p
          className="text-sm md:text-lg text-[#B4BEFF] -mt-4"
          data-aos="fade-up"
        >
          {slides[currentIndex].description}
        </p>
        <CustomButton
          title="View website"
          className="flex items-center justify-center"
        />
      </div>

      {/* Image Slider */}
      <div className="w-full flex items-center justify-center gap-4 z-10">
        {/* Prev Button */}
        <button
          onClick={prevImage}
          disabled={currentIndex === 0}
          className={`w-8 md:w-12 transition-opacity ${
            currentIndex === 0
              ? "opacity-0 cursor-not-allowed"
              : "hover:opacity-80"
          }`}
        >
          <img
            className="w-full"
            src="./images/arrow-circle-right.png"
            alt="Previous"
          />
        </button>

        {/* Image Display */}
        <div className="w-full max-w-4xl relative">
          <div className="relative flex items-center justify-center overflow-hidden">
            {/* Union Background */}
            <div className="overflow-hidden">
              <img
                className="w-full h-auto"
                src="./images/Union.png"
                alt="Union Background"
                data-aos="zoom-in-up"
              />
            </div>

            {/* Foreground Image */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <img
                key={currentIndex}
                className="w-full max-h-[60vh] object-contain rounded-lg"
                src={slides[currentIndex].image}
                alt={`Slide ${currentIndex + 1}`}
                data-aos={currentIndex % 2 === 0 ? "slide-right" : "slide-left"}
              />
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextImage}
          disabled={currentIndex === slides.length - 1}
          className={`w-8 md:w-12 transition-opacity ${
            currentIndex === slides.length - 1
              ? "opacity-0 cursor-not-allowed"
              : "hover:opacity-80"
          }`}
        >
          <img
            className="w-full"
            src="./images/arrow-circle-right.png"
            alt="Next"
          />
        </button>
      </div>

      {/* Bottom Gradient */}
      <div className="w-full h-8 md:h-24 absolute bottom-0 bg-gradient-to-t from-[#3A4CBA] z-50"></div>
    </div>
  );
};

export default Section1Component;
