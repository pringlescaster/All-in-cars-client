"use client";

import Link from "next/link";

function Hero() {
  return (
    <div
      className="px-4 flex flex-col gap-y-12 py-12 h-full relative"
      style={{
        backgroundImage: `url("/heroImage.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hero Title Section */}
      <div className="pt-36 cursor-default flex flex-col gap-y-[8px] justify-center items-center">
        <h1 className="font-merriwSans font-semibold text-[30px] text-center text-white">
          Discover your dream car with ease!
        </h1>
        <Link href={"/shop"}>
          <button className="font-openSans font-semibold text-base rounded-[8px] px-[24px] py-[10px] text-black bg-[#FCA311]">
            Explore Cars
          </button>
        </Link>
      </div>

      {/* Highlight Section */}
      <div
        className="relative md:ml-auto mx-auto md:mt-24 p-6 md:w-[30%] rounded-xl text-white"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
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
