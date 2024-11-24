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
        font-merriwSans font-semibold text-[30px] text-center">
          Discover your dream car with ease!
        </h1>
        <Link href={'/shop'}><button className="font-openSans font-semibold text-base rounded-[8px] px-[24px] py-[10px] text-black bg-[#FCA311]">
          Explore Cars
        </button></Link>
      </div>

      <div
        className="md:ml-8 mx-auto md:mt-24 p-6  md:w-[30%] rounded-xl text-white"
        style={{
          backdropFilter: "blur(10px)", // Adds the blur effect
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Light translucent background
          border: "1px solid rgba(255, 255, 255, 0.3)", // Optional border for a frosted effect
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Subtle shadow
        }}
      >
        <p className="font-montserrat font-medium">
          Explore our top-quality vehicles and find your perfect match. At
          AllInCars, book a date, test drive your choice, and buy with
          confidence.
        </p>
      </div>
    </div>
  );
}

export default Hero;
