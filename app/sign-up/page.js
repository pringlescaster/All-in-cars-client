"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import googleIcon from "../../public/googleIcon.svg";
import LogIn from "../../public/signUp.svg";
import Stroke from "../../public/stroke.svg";
import emailIcon from "../../public/emailIcon.svg";
import passwordIcon from "../../public/passwordIconn.svg";
import profileIcon from "../../public/profileIcon.svg";
import Link from "next/link";
import { useAuthStore } from "../store/authStore";
import { Loader } from "lucide-react";

function page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { signup, error, isLoading } = useAuthStore();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password, name);
      router.push("/sign-up/verify-email");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row md:justify-center text-white bg-[#030508] h-screen lg:h-full">
      <div className="grid px-4 py-8  items-center lg:justify-center lg:items-start gap-y-[30px] lg:gap-y-[0px] lg:w-1/2">
        <div className="flex flex-col gap-y-[8px]">
          <h1 className="font-russo text-lg text-left">Create Account</h1>
          <p className="font-montserrat text-left text-base">
            Welcome! Select method to sign up
          </p>
        </div>
        {error && <p className="text-red-500 font-medium mb-4 lg:mb-2 text-center">{error}</p>}
        <div className="grid gap-y-[24px] mb-12 lg:mb-8">
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
          <form className="grid gap-y-[16px]"  onSubmit={handleSignUp}>
            <div className="flex gap-x-[8px] bg-[#2B2B2B]/30 border-white/60 border-[1px] px-[14px] py-[10px] rounded-[10px] w-full md:w-[300px] lg:w-[350px]">
              <Image src={profileIcon} alt="Profile Icon" />
              <input
                className="bg-transparent outline-none placeholder:font-montserrat placeholder:text-[14px] text-white w-full"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex gap-x-[8px] bg-[#2B2B2B]/30 border-white/60 border-[1px] px-[14px] py-[10px] rounded-[10px] w-full md:w-[300px] lg:w-[350px]">
              <Image src={emailIcon} alt="Email Icon" />
              <input
                className="bg-transparent outline-none placeholder:font-montserrat placeholder:text-[14px] text-white w-full"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-y-[8px]">
              <div className="flex gap-x-[8px] bg-[#2B2B2B]/30 border-white/60 border-[1px] px-[14px] py-[10px] rounded-[10px] w-full md:w-[300px] lg:w-[350px]">
                <Image src={passwordIcon} alt="Password Icon" />
                <input
                  className="bg-transparent outline-none placeholder:font-montserrat placeholder:text-[14px] text-white w-full"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
           type="submit"
           className="bg-[#FCA311] mt-4 text-[#151515] py-[10px] rounded-[10px] font-openSans font-semibold"
           disabled={isLoading}>
              {isLoading ? <Loader className="animate-spin mx-auto" size={24} />: "Continue" }
            </button>
          </form>
          <div className="text-base flex gap-x-[4px] items-center justify-center text-center">
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
