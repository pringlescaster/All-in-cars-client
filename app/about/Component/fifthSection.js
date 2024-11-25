"use client"

import React from "react";
import Image from "next/image";
import Img from "../../../public/imgg.svg"

function fifthSection() {
  return (
    <div className="px-4 py-[80px] bg-[#030508] flex flex-col justify-center gap-y-[64px]">
      <div className="px-0 md:px-8 lg:px-16 flex flex-col gap-y-[8px]">
        <h1 className="font-normal text-white text-center text-lg font-russo md:text-2xl">
          Our Story
        </h1>
        <p className="font-montserrat text-sm md:text-lg font-medium text-center">
          Welcome to "All In Cars" – your ultimate destination for automotive
          excellence. Our journey began with a group of car enthusiasts
          dedicated to creating a premier online hub for car lovers. From
          classic models to the latest releases, "All In Cars" offers a curated
          selection of vehicles, parts, and accessories to bring you closer to
          the automotive world. Our story is one of passion, expertise, and a
          relentless pursuit of quality. Whether you're a seasoned gearhead or
          just starting out, "All In Cars" is here to fuel your passion and
          drive your journey. Join us and explore the best the automotive world
          has to offer.
        </p>
      </div>
      <Image className="mx-auto" src={Img} alt="image" />
    </div>
  );
}

export default fifthSection;
