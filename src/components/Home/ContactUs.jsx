import React, { forwardRef } from "react";
import CustomButton from "./Custom-button";
import { href, Link } from "react-router-dom";

const ContactUs = forwardRef((props, ref) => {
  const handleClick = () => {
    if(href){
      const url = 'http://www.edoubleone.net'
      window.open(href, "_blank")
    }
  }

  return (
    <div
      className="w-full relative flex items-center justify-center px-4 sm:px-6 md:px-10 py-10 overflow-hidden"
      ref={ref}
    >
      <div className="w-full max-w-[950px] bg-gradient-to-tl from-black to-white rounded-2xl p-[1px] mt-0 lg:m-[15rem]">
        <div className="flex flex-col lg:flex-row items-start justify-between py-10 px-6 sm:px-10 bg-[#283082] rounded-2xl text-white">
          <div className="w-full lg:w-1/2 flex flex-col mb-8 lg:mb-0">
            <h2 className="text-[24px] font-bold leading-[143%] mb-4">
              Get in touch
            </h2>
            <p className="text-[17px] font-normal leading-[143%] mb-8 max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur autem quo unde tenetur enim.
            </p>
            <a href="tel:+1 (202) 971 0392" className="flex items-center gap-4 mb-4 cursor-pointer">
              <img src="./images/Phone.png" alt="Phone Icon" />
              <a>+1 (202) 971 0392</a>
            </a>
            <a  onClick={handleClick}  className="flex items-center gap-4 flex-wrap cursor-pointer">
              <img src="./images/Email.png" alt="Email Icon" />
                <a className="break-all">http://www.edoubleone.net</a>
            </a>
          </div>

          {/* Form Section */}
          <form className="w-full lg:w-1/2 flex flex-col gap-5">
            <h2 className="text-[24px] font-bold leading-[143%] mb-2">
              Send a message
            </h2>
            <input
              className="bg-[#838394] w-full p-3 rounded-2xl border-none outline-none placeholder:text-white placeholder:font-normal"
              type="text"
              placeholder="Name"
            />
            <input
              className="bg-[#838394] w-full p-3 rounded-2xl border-none outline-none placeholder:text-white placeholder:font-normal"
              type="email"
              placeholder="Email"
            />
            <textarea
              className="bg-[#838394] w-full min-h-[150px] p-3 rounded-2xl border-none outline-none placeholder:text-white placeholder:font-normal"
              placeholder="Your Message"
            />
            <CustomButton title="Send Us a message" />
          </form>
        </div>
      </div>
      {/* Background Images */}
      <div className="absolute top-0 left-0 -z-10 w-full overflow-hidden">
        <img
          src="./images/Background-Pattern(3).png"
          alt=""
          className="w-full"
        />
      </div>
      <div className="absolute top-[45px] left-0 -z-10">
        <img src="./images/Background-Pattern(4).png" alt="" />
      </div>
      <div className="absolute top-[45px] right-0 -z-10">
        <img src="./images/vector-bg.png" alt="" />
      </div>
    </div>
  );
});

export default ContactUs;
