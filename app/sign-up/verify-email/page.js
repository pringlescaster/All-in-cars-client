"use client";

import React, { useState } from "react";
import Image from "next/image";
import LogIn from "../../../public/LogIn.svg";
import { useAuthStore } from "@/app/store/authStore";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function Page() {
  const [code, setCode] = useState(new Array(6).fill(""));
  const { error, isLoading, verifyEmail } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    try {
      await verifyEmail(verificationCode);
      router.push("/");
      toast.success("Email verified successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to verify email");
    }
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    setCode([...code.map((d, idx) => (idx === index ? element.value : d))]);

    // Move to the next input when one is filled
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 6);

    setCode([...pasteData.split(""), ...new Array(6 - pasteData.length).fill("")]);

    // Auto-focus the next input field if available
    const inputs = document.querySelectorAll("input");
    inputs[pasteData.length]?.focus();
  };

  return (
    <div className="flex flex-col lg:flex-row md:justify-center bg-[#030508] h-screen lg:h-full">
      <div className="grid px-6 lg:px-32 py-8 justify-center items-center lg:items-start gap-y-[60px] lg:gap-y-[0px] lg:w-1/2">
        <div className="flex flex-col gap-y-[8px]">
          <h1 className="font-russo text-lg text-left">Verify your Account</h1>
          <p className="font-montserrat text-left text-base">
            Please enter the 6-digit code sent to your email address.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid mb-0 lg:mb-60 gap-y-[24px]">
          <div className="flex justify-center items-center gap-2">
            {code.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
                onPaste={handlePaste}
                className="bg-[#2B2B2B]/30 outline-none border-white/60 border-[1px] w-[40px] h-[40px] text-center rounded-[10px] placeholder:font-montserrat placeholder:text-[14px] text-white"
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#FCA311] text-[#151515] py-[10px] rounded-[10px] font-openSans font-semibold w-full md:w-[300px] lg:w-[350px]"
          >
            {isLoading ? "Verifying..." : "Verify Email"}
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

export default Page;
