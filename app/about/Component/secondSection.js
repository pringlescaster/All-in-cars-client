import React from "react";
import Image from "next/image";
import AboutImg from "../../../public/aboutImg.svg";

function secondSection() {
  return (
    <div className="bg-[#030508] px-4 py-[60px] flex flex-col lg:flex lg:flex-row lg:justify-between gap-x-16 gap-y-[24px] justify-center items-center">
      <div className="grid gap-y-[8px]">
        <h1 className="font-normal text-white lg:text-left text-center text-lg font-russo md:text-2xl">About Company</h1>
        <p className="font-montserrat text-sm md:text-base lg:text-left font-light text-center ">Welcome to All In Car, your ultimate destination for everything automotive. At All In Car, we are passionate about connecting car enthusiasts with their perfect ride, offering a seamless online shopping experience that combines quality, variety, and exceptional service. Whether you're searching for a sleek sedan, a rugged SUV, or a high-performance sports car, our curated selection ensures there's something for every preference and budget. With a commitment to transparency and customer satisfaction, All In Car stands as your trusted partner in finding the vehicle that suits your lifestyle best. Explore our inventory today and embark on your journey with All In Car, where every drive is an adventure waiting to happen.</p>
      </div>
      <Image src={AboutImg} className=" lg:w-[540px]" alt="aboutImage" />
    </div>
  );
}

export default secondSection;
