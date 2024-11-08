"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import passwordIcon from '../../public/passwordIconn.svg';
import LogIn from '../../public/LogIn.svg';
import { useAuthStore } from "@/app/store/authStore";
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function ResetPassword({ token }) { // Accept token as prop
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { resetPassword, error, isLoading, message } = useAuthStore();
const router =useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
    }
   try {
    await resetPassword(token, password);
    toast.success("Password reset successfully, redirecting to login page.");
    setTimeout(() => {
        router.push('/sign-in');
    }, 2000)
   } catch (error) {
    console.error (error);
    toast.error(error.message || "Error resetting password")
   }

  };

  return (
    <div className="flex flex-col lg:flex-row md:justify-center bg-[#030508] h-screen lg:h-full">
      <div className="grid px-6 lg:px-32 py-8 justify-center items-center lg:items-start gap-y-[60px] lg:gap-y-[0px] lg:w-1/2">
        <div className="flex flex-col gap-y-[8px]">
          <h1 className="font-russo text-lg text-left">Change Password</h1>
          <p className="font-montserrat text-left text-base">
            Please enter your new password and confirm it to complete the process.
          </p>
        </div>
{error && <p className='text-red-600 text-sm text-center my-4'>{error}</p>}
{error && <p className='text-green-600 text-sm text-center my-4'>{message}</p>}
        <form onSubmit={handleSubmit} className="grid mb-0 lg:mb-60 gap-y-[16px]">
          <div className="flex gap-x-[8px] bg-[#2B2B2B]/30 border-white/60 border-[1px] px-[14px] py-[10px] rounded-[10px] w-full md:w-[300px] lg:w-[350px]">
            <Image src={passwordIcon} alt="Password Icon" />
            <input
              className="bg-transparent outline-none placeholder:font-montserrat placeholder:text-[14px] text-white w-full"
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex gap-x-[8px] bg-[#2B2B2B]/30 border-white/60 border-[1px] px-[14px] py-[10px] rounded-[10px] w-full md:w-[300px] lg:w-[350px]">
            <Image src={passwordIcon} alt="Password Icon" />
            <input
              className="bg-transparent outline-none placeholder:font-montserrat placeholder:text-[14px] text-white w-full"
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-[#FCA311] text-[#151515] py-[10px] rounded-[10px] font-openSans font-semibold w-full md:w-[300px] lg:w-[350px] mt-2"
          >
            {isLoading ? "Resetting..." : "Set New Password"}
          </button>
        </form>
      </div>

      <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <Image className="w-[120%]" src={LogIn} alt="Log In Illustration" />
      </div>
    </div>
  );
}
