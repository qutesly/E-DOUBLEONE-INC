import React from "react";

const FooterComponent = () => {
  return (
    <div className="w-full  relative text-white pb-32">
      <div className="w-full flex items-start gap-[19px] justify-between px-10 md:px-40 py-10">
        <div className="flex flex-col items-start gap-[19px] justify-between">
          <img src="./images/Edoubleone-logo-1.png" alt="" />
          <p className="w-[311px]">
            Edoublone - the leading digital agency based in the Us, working with
            top-tier clients, from start-ups to enterprises.
          </p>
        </div>
        <div className="flex flex-col items-start gap-8">
          <div className="flex gap-[20px]">
            <img src="./images/message.png" alt="" />
            <p>support@edoubleone.net</p>
          </div>
          <div className="flex gap-[20px]">
            <img src="./images/message.png" alt="" />
            <p>support@edoubleone.net</p>
          </div>
          <div className="flex gap-[20px]">
            <img src="./images/message.png" alt="" />
            <p>support@edoubleone.net</p>
          </div>
          <div className="flex gap-[20px]">
            <img src="./images/facebook.png" alt="" />
            <img src="./images/instagram.png" alt="" />
            <img src="./images/LinkedIn.png" alt="" />
            <img src="./images/socials.png" alt="" />
          </div>
        </div>
      </div>

      <div className=" w-full absolute bottom-[0] left-[0] -z-10 -mt-10">
        <img src="./images/Footer-Background-Pattern.png" alt="" />
        {/* <img src="./images/stars.png" alt="" /> */}
      </div>
    </div>
  );
};

export default FooterComponent;
