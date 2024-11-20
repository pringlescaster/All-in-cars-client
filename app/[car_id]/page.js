"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import axios from "axios";
import engineIcon from "../../public/engineIcon.svg";
import calendarIcon from "../../public/calendarIcon.svg";
import speedIcon from "../../public/speedIcon.svg";

function page() {
  const { car_id } = useParams();
  const [carDetails, setCarDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (car_id) {
      const fetchCarDetails = async () => {
        try {
          const response = await axios.get(
            `http://localhost:2000/api/v1/car/${car_id}`
          );
          setCarDetails(response.data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
      fetchCarDetails();
    }
  }, [car_id]);

  return (
    <div>
  {carDetails && (
    <div
      className="relative 
      px-4 md:px-6 py-8 h-screen"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-30"
        style={{
          backgroundImage: `url(${carDetails.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 text-white">
        <div className="flex items-center justify-between gap-y-[16px] md:gap-y-[32px]">
          <div className="flex flex-col gap-y-[8px] md:gap-y-[16px]">
            <h1 className="text-white font-exo text-base md:text-[32px] font-medium text-left">
              {carDetails.price}
            </h1>
            <div className="flex flex-col gap-y-4 mt-6">
            <h1 className="text-white md:text-[50px] text-2xl font-regular text-left font-merriwSans">
              {carDetails.name}
            </h1>

            <h1 className="text-white font-montserrat font-medium w-[60%]">
              {carDetails.description}
            </h1>
            <button className="bg-[#FCA311] w-[20%] text-black text-sm font-bold font-openSans rounded-[10px] px-[26px] py-[12px]">
                Book a Visit
              </button>
            </div>
           
          </div>

          <div
            className="md:flex w-[70%] hidden flex-col gap-y-[48px] px-8 py-12 rounded-[20px] bg-white/10"
          
          >
            <div className="flex flex-col gap-y-[12px]">
              <Image src={engineIcon} alt="engineIcon" />
              <div className="gap-y-[4px]">
                <h1 className="text-white text-base font-normal font-openSans">
                  Engine Type
                </h1>
                <h1 className="text-white text-lg font-normal">
                  {carDetails.engineType}
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-y-[12px]">
              <Image src={speedIcon} alt="engineIcon" />
              <div className="gap-y-[4px]">
                <h1 className="text-white text-base font-normal font-openSans">
                  Top Speed
                </h1>
                <h1 className="text-white text-lg font-normal">
                  {carDetails.speed}
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-y-[12px]">
              <Image src={calendarIcon} alt="engineIcon" />
              <div className="gap-y-[4px]">
                <h1 className="text-white text-base font-normal font-openSans">
                  Year
                </h1>
                <h1 className="text-white text-lg font-medium">
                  {carDetails.year}
                </h1>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )}
</div>

  );
}

export default page;

