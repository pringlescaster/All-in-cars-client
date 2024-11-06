import React from "react";
import Image from "next/image";
import passwordIcon from "../../../../../public/passwordIconn.svg";
import LogIn from "../../../../../public/LogIn.svg";


function page() {
  return (
    <div className="flex flex-col lg:flex-row md:justify-center bg-[#030508] h-screen lg:h-full">
      <div className="grid px-6 lg:px-32 py-8 justify-center items-center lg:items-start gap-y-[60px] lg:gap-y-[0px] lg:w-1/2">
        <div className="flex flex-col gap-y-[8px] ">
          <h1 className="font-russo text-lg text-left">Change Password</h1>
          <p className="font-montserrat text-left text-base">
            Please enter your new password and confirm it to complete the
            process.{" "}
          </p>
        </div>

        <form className="grid mb-0 lg:mb-60  gap-y-[16px]">
          <div className="flex gap-x-[8px] bg-[#2B2B2B]/30 border-white/60 border-[1px] px-[14px] py-[10px] rounded-[10px] w-full md:w-[300px] lg:w-[350px]">
            <Image src={passwordIcon} alt="Email Icon" />
            <input
              className="bg-transparent outline-none placeholder:font-montserrat placeholder:text-[14px] text-white w-full"
              type="password"
              placeholder="Enter new password"
            />
          </div>

          <div className="flex gap-x-[8px] bg-[#2B2B2B]/30 border-white/60 border-[1px] px-[14px] py-[10px] rounded-[10px] w-full md:w-[300px] lg:w-[350px]">
            <Image src={passwordIcon} alt="Email Icon" />
            <input
              className="bg-transparent outline-none placeholder:font-montserrat placeholder:text-[14px] text-white w-full"
              type="password"
              placeholder="Confirm password"
            />
          </div>

          <button className="bg-[#FCA311] text-[#151515] py-[10px] rounded-[10px] font-openSans font-semibold w-full md:w-[300px] lg:w-[350px] mt-2 ">
            Continue{" "}
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
