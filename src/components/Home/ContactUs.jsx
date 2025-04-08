import React from "react";
import CustomButton from "./Custom-button";

const ContactUs = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center mb-[333px]">
      <div className="w-[900px] h-full p-[1px] bg-gradient-to-tl from-black to-white rounded-2xl mt-[10rem]">
        <div className="w-full flex items-start justify-between py-10 px-12 bg-[#283082] rounded-2xl text-white">
          <div className="flex flex-col items-start">
            <h2 className="text-[24px] font-[700] leading-[143%] mb-4">
              Get in touch
            </h2>
            <p className="text-[17px] font-[400] leading-[143%] w-[252px] mb-12">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur autem quo unde tenetur enim, eius sit quas optio
              dolorem ipsum molestias, mollitia deleniti ipsa?
            </p>
            <div className="flex items-center gap-[16px] mb-4">
              <img src="./images/Phone.png" alt="" />
              <p>+1 (443) 332 1473</p>
            </div>
            <div className="flex items-center gap-[16px]">
              <img src="./images/Email.png" alt="" />
              <p>support@edoubleone.net</p>
            </div>
          </div>
          <form className="flex flex-col items-start gap-[20px] text-white">
            <h2 className="text-[24px] font-[700] leading-[143%] mb-4">
              Send a message
            </h2>
            <input
              className="bg-[#838394] w-[350px] p-3 rounded-2xl border-none outline-none placeholder:text-white placeholder:text-[400]"
              type="text"
              placeholder="Name"
            />
            <input
              className="bg-[#838394] w-[350px] p-3 rounded-2xl border-none outline-none placeholder:text-white placeholder:text-[400]"
              type="Email"
              placeholder="Name"
            />
            <textarea
              className="bg-[#838394] w-[350px] min-h-[200px] p-3 rounded-2xl border-none outline-none placeholder:text-white placeholder:text-[400]"
              placeholder="Your Message"
              name=""
              cols="30"
            ></textarea>
            <CustomButton title="Send Us a message" />
          </form>
        </div>
      </div>

      <div className="absolute top-[16px] left-[0] -z-10">
        <img src="./images/Background-Pattern(3).png" alt="" />
      </div>
      <div className="absolute top-[45px] left-[0] -z-10">
        <img src="./images/Background-Pattern(4).png" alt="" />
      </div>
      <div className="absolute top-[45px] right-[0] -z-10">
        <img src="./images/vector-bg.png" alt="" />
      </div>
    </div>
  );
};

export default ContactUs;
