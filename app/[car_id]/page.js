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
    <div className="">
  {carDetails && (
    <div>
    <div 
      className="relative hidden md:screen 
      px-4 md:px-8 py-16  items-start md:flex justify-end"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
      }}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{
          backgroundImage: `url(${carDetails.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content Layer */}
      <div className="relative grid items-end gap-y-3 z-10 text-white">
        
  <div className="grid gap-y-2 justify-start px-6 py-8 rounded-[20px]" style={{
    backdropFilter: "blur(3px)", // Adds blur for glassmorphism
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Translucent background
    border: "1px solid rgba(255, 255, 255, 0.3)", // Frosted border
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  }}>
    <h1 className="font-montserrat font-semibold text-lg">{carDetails.name}</h1>
    <h1 className="font-openSans text-lg">{carDetails.price}</h1>
    <button className="font-openSans font-semibold text-base rounded-[8px] px-[24px] py-[10px] text-black bg-[#FCA311]">
          Book Appointment
        </button>

    </div>        

<div
  className=" hidden md:grid gap-y-4 justify-start px-6 py-8 rounded-[20px]"
  style={{
    backdropFilter: "blur(3px)", // Adds blur for glassmorphism
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Translucent background
    border: "1px solid rgba(255, 255, 255, 0.3)", // Frosted border
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  }}
>
  <h1 className="text-white font-semibold text-left font-merriwSans text-lg">Overview</h1>
  <div className="flex justify-evenly gap-x-12">
  <div className="flex flex-col gap-y-[12px]">
    <Image src={engineIcon} className="w-[18px]" alt="engineIcon" />
    <div className="gap-y-[4px]">
      <h1 className="text-white text-sm font-light font-openSans">
        Engine Type
      </h1>
      <h1 className="text-white text-base font-light">{carDetails.engineType}</h1>
    </div>
  </div>

  <div className="flex flex-col gap-y-[12px]">
    <Image src={speedIcon} className="w-[18px]" alt="engineIcon" />
    <div className="gap-y-[4px]">
      <h1 className="text-white text-sm font-light font-openSans">
        Top Speed
      </h1>
      <h1 className="text-white text-base font-light">{carDetails.speed}</h1>
    </div>
  </div>

  <div className="flex flex-col gap-y-[12px]">
    <Image src={calendarIcon} className="w-[18px]" alt="engineIcon" />
    <div className="gap-y-[4px]">
      <h1 className="text-white text-sm font-light font-openSans">Year</h1>
      <h1 className="text-white text-base font-light">{carDetails.year}</h1>
    </div>
  </div>
  </div>
 
</div>



        
      </div>
      <div className="flex md:hidden flex-col">
          {/* Responsive Image */}
          <div className="w-full h-auto max-h-[70vh] lg:max-h-[80vh] overflow-hidden">
            <Image
              className="rounded-md" // Optional: Add styling like rounded corners
              src={carDetails.image}
              alt="Car Image"
              layout="intrinsic" // Maintains original aspect ratio
              width={1600} // Original image width
              height={900} // Original image height
              objectFit="contain" // Ensures no cropping occurs
              quality={80} // Adjust quality for optimization
              priority // Loads image faster if it's above the fold
            />
          </div>

          {/* Car Details */}
          <div className="py-8 grid gap-y-[8px] px-3 md:px-8  bg-[#030508]">
            <div className="grid md:flex gap-y-2 justify-between"><h1 className="font-montserrat font-semibold text-white text-[20px] md:text-[22px]">
              {carDetails.name}
            </h1>
            <h1 className="font-openSans font-semibold text-[#FCA311]  text-[20px] md:text-[22px]">
              {carDetails.price}
            </h1></div>
            <h1 className="font-montserrat text-white/80 text-[16px] md:text-[18px]">
              {carDetails.description}
            </h1>
            <button className="font-openSans mt-6 font-semibold text-base rounded-[8px] px-[24px] py-[10px] text-black bg-[#FCA311]">
          Book Appointment
        </button>
          </div>
          
        </div>
    </div>
    <div className="flex md:hidden flex-col">
          {/* Responsive Image */}
          <div className="w-full h-auto max-h-[70vh] lg:max-h-[80vh] overflow-hidden">
            <Image
              className="rounded-md" // Optional: Add styling like rounded corners
              src={carDetails.image}
              alt="Car Image"
              layout="intrinsic" // Maintains original aspect ratio
              width={1600} // Original image width
              height={900} // Original image height
              objectFit="contain" // Ensures no cropping occurs
              quality={80} // Adjust quality for optimization
              priority // Loads image faster if it's above the fold
            />
          </div>

          {/* Car Details */}
          <div className="py-8 grid gap-y-[8px] px-3 md:px-8  bg-[#030508]">
            <div className="grid md:flex gap-y-2 justify-between"><h1 className="font-montserrat font-semibold text-white text-[20px] md:text-[22px]">
              {carDetails.name}
            </h1>
            <h1 className="font-openSans font-semibold text-[#FCA311]  text-[20px] md:text-[22px]">
              {carDetails.price}
            </h1></div>
            <h1 className="font-montserrat text-white/80 text-[16px] md:text-[18px]">
              {carDetails.description}
            </h1>
            <button className="font-openSans mt-6 font-semibold text-base rounded-[8px] px-[24px] py-[10px] text-black bg-[#FCA311]">
          Book Appointment
        </button>
          </div>
          
        </div>
    </div>

  )}
</div>

  );
}

export default page;

