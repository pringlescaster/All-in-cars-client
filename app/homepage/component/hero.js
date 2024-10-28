"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import calendarIcon from "../../../public/calendarIcon.svg";
import speedIcon from "../../../public/speedIcon.svg";
import engineIcon from "../../../public/engineIcon.svg";

function hero() {
  const [carData, setcarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2000/api/v1/car/6719e8d1daed744a4a82f4d3"
        );
        setcarData([response.data]), setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchCarData();
  }, []);

  return (
    <div>
      {carData &&
        carData.map((car, index) => (
          <div
            key={index}
            className="h-[383px] md:h-screen px-4 md:px-6 py-4 items-center flex justify-between  text-white"
            style={{
              backgroundImage: `url(${car.image})`,
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col gap-y-[16px] md:gap-y-[32px]">
              <div className="flex flex-col gap-y-[8px] md:gap-y-[16px]">
                <h1 className="text-white font-exo text-base md:text-[32px] font-medium text-left">
                  {car.price}
                </h1>
                <h1 className="text-white md:text-[50px] text-2xl font-regular text-left font-merriwSans">
                  {car.name}
                </h1>
              </div>
              <button className="bg-[#FCA311] text-black text-sm font-bold font-openSans rounded-[10px] px-[26px] py-[12px]">
                Explore Car
              </button>
            </div>

            <div
              className="md:flex hidden flex-col gap-y-[48px] px-8 py-12 rounded-[20px]"
              style={{
               backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.2))`,
              }}
            >
              <div className="flex flex-col gap-y-[12px]">
                <Image src={engineIcon} alt="engineIcon" />
                <div className="gap-y-[4px]">
                  <h1
                    className="text-white text-base font-normal font-openSans"
                  >
                    Engine Type
                  </h1>
                  <h1 className="text-white text-lg font-semibold">3.8-liter twin-turbocharged V8 engine</h1>
                </div>
              </div>

              <div className="flex flex-col gap-y-[12px]">
                <Image src={speedIcon} alt="engineIcon" />
                <div className="gap-y-[4px]">
                  <h1
                    className="text-white text-base font-normal font-openSans"
                  >
                Top Speed
                  </h1>
                  <h1 className="text-white text-lg font-semibold">Approximately 328 km/h (204 mph)</h1>
                </div>
              </div>

              <div className="flex flex-col gap-y-[12px]">
                <Image src={calendarIcon} alt="engineIcon" />
                <div className="gap-y-[4px]">
                  <h1
                    className="text-white text-base font-normal font-openSans"
                  >
Year                  </h1>
                  <h1 className="text-white text-lg font-semibold">2015</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default hero;
