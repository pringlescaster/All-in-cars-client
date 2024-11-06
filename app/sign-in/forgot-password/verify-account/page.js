"use client"

import React, {useState}from "react";
import Image from "next/image";
import LogIn from "../../../../public/LogIn.svg"


function page() {
  const [ code, setCode ] = useState(new Array(6).fill("")); //so this provides  an array of 6 slots expecting a value. .fill means each field is expecting a number or value


 const handleChange = (element, index) => { //check if what i am inputing is a number (NaN means Not a Number, if i am inputting a number it is a valid code, if i am not it stops)
if (isNaN(element.value)) return;

setCode([
  ...code.map((d, idx) => (idx === index ? element.value : d)),
]);

//Move to the next one when the first input is filled
if (element.nextSibling) {
  element.nextSibling.focus();
}
 }


  return (
    <div className="flex flex-col lg:flex-row md:justify-center bg-[#030508] h-screen lg:h-full">
      <div className="grid px-6 lg:px-32 py-8 justify-center items-center lg:items-start gap-y-[60px] lg:gap-y-[0px] lg:w-1/2">
        <div className="flex flex-col gap-y-[8px]">
          <h1 className="font-russo text-lg text-left">Verify your Account</h1>
          <p className="font-montserrat text-left text-base">
            Please enter the 6-digit code sent to your email address.
          </p>
        </div>

        <form className="grid mb-0 lg:mb-60 gap-y-[24px]">
          <div className="flex justify-center items-center gap-2">
            {code.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
                className="bg-[#2B2B2B]/30 outline-none border-white/60 border-[1px] w-[40px] h-[40px] text-center rounded-[10px] placeholder:font-montserrat placeholder:text-[14px]  text-white"
              />
            ))}
          </div>

          <button className="bg-[#FCA311] text-[#151515] py-[10px] rounded-[10px] font-openSans font-semibold w-full md:w-[300px] lg:w-[350px]">
            Continue
          </button>
        </form>
      </div>

      {/* Adjust the styles for the image on large screens */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <Image className="w-[120%]" src={LogIn} alt="Log In Illustration" />
      </div>
    </div>
  );
}

export default page;
