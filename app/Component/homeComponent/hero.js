"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import calendarIcon from "../../../public/calendarIcon.svg";
import speedIcon from "../../../public/speedIcon.svg";
import engineIcon from "../../../public/engineIcon.svg";
import Link from "next/link";

function Hero() {
  return (
    <div
      className="px-4 flex flex-col gap-y-12 py-12 h-full"
      style={{
        backgroundImage: `url("/heroImage.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pt-36 cursor-default flex flex-col gap-y-[8px] justify-center items-center">
        <h1 className="
        font-merriwSans font-semibold text-[30px] text-white text-center">
          Discover your dream car with ease!
        </h1>
        <Link href={'/shop'}><button className="font-openSans font-semibold text-base rounded-[8px] px-[24px] py-[10px] text-black bg-[#FCA311]">
          Explore Cars
        </button></Link>
      </div>

      <div
  className="mx-auto md:mt-24 p-6 rounded-xl md:w-[40%] text-white"
  style={{
    background: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
    backdropFilter: "blur(10px)", // Blur effect for glassmorphism
    WebkitBackdropFilter: "blur(10px)", // For Safari support
    border: "1px solid rgba(255, 255, 255, 0.3)", // Optional border for the glass effect
  }}
>
  <p className="font-montserrat text-md font-medium">
    Explore our top-quality vehicles and find your perfect match. At
    AllInCars, book a date, test drive your choice, and buy with
    confidence.
  </p>
</div>

    </div>
  );
}

export default Hero;
