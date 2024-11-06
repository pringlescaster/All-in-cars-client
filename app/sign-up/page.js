import React from "react";
import Image from "next/image";
import googleIcon from "../../public/googleIcon.svg";
import LogIn from "../../public/signUp.svg";
import Stroke from "../../public/stroke.svg";
import emailIcon from "../../public/emailIcon.svg";
import passwordIcon from "../../public/passwordIconn.svg";
import profileIcon from "../../public/profileIcon.svg";
import Link from "next/link";

function page() {



  return (
    <div className="flex flex-col lg:flex-row md:justify-center bg-[#030508] h-screen lg:h-full">
    <div className="grid px-4 py-8 justify-center items-center lg:items-start gap-y-[60px] lg:gap-y-[0px] lg:w-1/2">
      <div className="flex flex-col gap-y-[8px]">
        <h1 className="font-russo text-lg text-left">
          Create Account
        </h1>
        <p className="font-montserrat text-left text-base">
        Welcome! Select method to sign up
        </p>
      </div>
      <div className="grid gap-y-[24px] mt-0 lg:mb-8">
        <div className="flex justify-center text-base gap-x-[16px] border-white/50 border-[1px] px-[14px] py-[10px] rounded-[10px]">
          <Image src={googleIcon} alt="Google Icon" />
          <p className="font-medium font-openSans text-white">
            Continue with Google
          </p>
        </div>
        <div className="flex gap-x-[8px] justify-center items-center">
          <Image src={Stroke} alt="Stroke Divider" />
          <h1 className="text-sm text-white/80 font-medium">
            or continue with email
          </h1>
          <Image src={Stroke} alt="Stroke Divider" />
        </div>
        <form className="grid gap-y-[16px]">
        <div className="flex gap-x-[8px] bg-[#2B2B2B]/30 border-white/60 border-[1px] px-[14px] py-[10px] rounded-[10px] w-full md:w-[300px] lg:w-[350px]">
              <Image src={profileIcon} alt="Profile Icon" />
              <input
                className="bg-transparent outline-none placeholder:font-montserrat placeholder:text-[14px] text-white w-full"
                type="text"
                placeholder="Name"
              />
            </div>  
        <div className="flex gap-x-[8px] bg-[#2B2B2B]/30 border-white/60 border-[1px] px-[14px] py-[10px] rounded-[10px] w-full md:w-[300px] lg:w-[350px]">
              <Image src={emailIcon} alt="Email Icon" />
              <input
                className="bg-transparent outline-none placeholder:font-montserrat placeholder:text-[14px] text-white w-full"
                type="email"
                placeholder="Email"
              />
            </div>
          <div className="grid gap-y-[8px]">
          <div className="flex gap-x-[8px] bg-[#2B2B2B]/30 border-white/60 border-[1px] px-[14px] py-[10px] rounded-[10px] w-full md:w-[300px] lg:w-[350px]">
              <Image src={passwordIcon} alt="Password Icon" />
              <input
                className="bg-transparent outline-none placeholder:font-montserrat placeholder:text-[14px] text-white w-full"
                type="password"
                placeholder="Password"
              />
            </div>
            
          </div>
          <button className="bg-[#FCA311] mt-4 text-[#151515] py-[10px] rounded-[10px] font-openSans font-semibold">
            Continue
          </button>
        </form>
        <div className="text-sm flex gap-x-[4px] items-center justify-center text-center">
          <h1 className="text-white/80">Already have an account?</h1>
          <Link href="/sign-in">
          <button className="text-[#FCA311]">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
    {/* Adjust the styles for the image on large screens */}
    <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
      <Image className="w-[120%]" src={LogIn} alt="Log In Illustration" />
    </div>
  </div>
  );
}

export default page;
