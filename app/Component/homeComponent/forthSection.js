"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import speedIcon from "../../../public/speedIcon.svg";
import engineIcon from "../../../public/engineIcon.svg";
import favorite from "../../../public/favorite.svg"


function forthSection() {
  const [newCars, setnewCars] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect (() => {
    const fetchNewArrival = async () => {
        try {
            const response = await axios.get(
                "http://localhost:2000/api/v1/newarrival/allnewarrivals"
            );
            setnewCars(response.data), setLoading(false);

        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };
    fetchNewArrival();
  }, [])

  return (
    <div className="px-4 flex flex-col py-[60px] bg-[#030508] ">
      <div className="flex flex-col gap-y-[48px] ">
        <div className="flex flex-col gap-y-[8px] md:gap-y-[12px]">
        <h1 className="font-normal text-white text-center text-lg font-russo md:text-xl">
          NEW ARRIVALS
        </h1>
        <h1 className="text-lg text-white text-center font-normal font-russo md:text-[32px]">
          Rev Up with Our Latest Models.
        </h1>
        </div>
        
        <div className="grid grid-cols-2 gap-y-[12px] gap-x-[12px] md:grid-cols-3 lg:flex md:justify-center md:gap-x-[16px] py-[24px] justify-start px-4 md:py-[40px]">
            {newCars && 
            newCars.map((car) => (
                <div key={car.id} className="flex bg-white/15 flex-col rounded-xl w-full lg:w-[22%]">
                  <div className="relative">
                <Image
                  src={car.image}
                  alt="car images"
                  width="256"
                  height="170"
                  className="rounded-t-xl w-full object-cover"
                />
                <Image
                  src={favorite}
                  alt="favorite icon"
                  className="absolute top-2 right-2 w-8 h-8 z-10" // z-index added
                />
              </div>
                  <div className=" px-2 py-2 grid gap-y-[8px] ">
                  <h1 className="text-white text-[14px] md:text-[16px] font-montserrat text-left font-medium">{car.name}</h1>
                  <div className="flex flex-col md:flex-row justify-center md:justify-start md:items-center md:gap-x-[33px] gap-y-[12px]">
                  <div className="grid gap-y-[4px]">
                    <Image width={16} height={14} src={speedIcon} />
                    <h1 className="font-openSans text-[12px] font-normal">{car.speed}</h1>
                  </div>
                  <div className="md:grid hidden gap-y-[4px]">
                    <Image width={16} height={14} src={engineIcon} />
                    <h1 className="font-openSans text-[12px] font-normal">{car.engineType}</h1>
                  </div>
                  </div>
                  <h1 className="font-exo font-medium text-[#FCA311] text-[14px]">{car.price}</h1>
                  </div>
                  
                    
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default forthSection;
