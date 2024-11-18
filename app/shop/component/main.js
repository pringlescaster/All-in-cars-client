"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Sport from "../../../public/Sport.svg";
import Suvs from "../../../public/SUV.svg";
import Sedans from "../../../public/Sedan.svg";
import Convertibles from "../../../public/Convertible.svg";
import Electric from "../../../public/Electric.svg";
import speedIcon from "../../../public/speedIcon.svg";
import engineIcon from "../../../public/engineIcon.svg";
import favorite from "../../../public/favorite.svg";

function Main() {
  const [cars, setCars] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterData, setFilterData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Sport Cars"); // Default category

  // Fetch cars data
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/v1/cars");
        setCars(response.data);
        setFilterData(
          response.data.filter((car) => car.categories === "Sport Cars") // Default filter
        );
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  // Handle category selection
  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Update active category
    setFilterData(cars.filter((car) => car.categories === category)); // Filter cars based on category
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="">
      {/* Categories Section */}
      <div className="bg-[#050910] flex flex-wrap justify-start lg:justify-around px-8 gap-8 py-8">
        {/* Sport Cars Button */}
        <div
          className={`flex gap-x-1 text-white items-center font-openSans font-medium text-sm cursor-pointer ${
            activeCategory === "Sport Cars"
              ? "border-b-2 border-[#FCA311] pb-1"
              : ""
          }`}
          onClick={() => handleCategoryClick("Sport Cars")}
        >
          <Image className="w-[24px]" src={Sport} alt="Sport Cars" />
          <span>Sport Cars</span>
        </div>

        {/* SUVs Button */}
        <div
          className={`flex gap-x-1 text-white items-center font-openSans font-medium text-sm cursor-pointer ${
            activeCategory === "SUVs" ? "border-b-2 border-[#FCA311] pb-1" : ""
          }`}
          onClick={() => handleCategoryClick("SUVs")}
        >
          <Image className="w-[24px]" src={Suvs} alt="SUVs" />
          <span>SUVs</span>
        </div>

        {/* Sedans */}
        <div
          className={`flex gap-x-1 text-white items-center font-openSans font-medium text-sm cursor-pointer ${
            activeCategory === "Sedans"
              ? "border-b-2 border-[#FCA311] pb-1"
              : ""
          }`}
          onClick={() => handleCategoryClick("Sedans")}
        >
          <Image className="w-[24px]" src={Sedans} alt="Sedans" />
          <span>Sedans</span>
        </div>

        {/* Convertibles */}
        <div
          className={`flex gap-x-1 text-white items-center font-openSans font-medium text-sm cursor-pointer ${
            activeCategory === "Convertibles"
              ? "border-b-2 border-[#FCA311] pb-1"
              : ""
          }`}
          onClick={() => handleCategoryClick("Convertibles")}
        >
          <Image className="w-[24px]" src={Convertibles} alt="Convertibles" />
          <span>Convertibles</span>
        </div>

        {/* Electric Cars */}
        <div
          className={`flex gap-x-1 text-white items-center font-openSans font-medium text-sm cursor-pointer ${
            activeCategory === "Electric"
              ? "border-b-2 border-[#FCA311] pb-1"
              : ""
          }`}
          onClick={() => handleCategoryClick("Electric")}
        >
          <Image className="w-[24px]" src={Electric} alt="Electric" />
          <span>Electric</span>
        </div>
      </div>

      {/* Filtered Cars Display */}
      <div className="grid grid-cols-2 gap-y-[12px] gap-x-[12px] md:grid-cols-3 lg:flex md:justify-start py-[24px] justify-start px-4 md:py-[40px]">
        {filterData.length > 0 ? (
          filterData.map((car) => (
            <div
              key={car._id}
              className="flex bg-white/15 flex-col rounded-xl w-full md:w-[22%]"
            >
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
                <h1 className="text-white text-[14px] md:text-[16px] font-montserrat text-left font-medium">
                  {car.name}
                </h1>
                <div className="flex flex-col md:flex-row justify-center md:justify-start md:items-center md:gap-x-[33px] gap-y-[12px]">
                  <div className="grid gap-y-[4px]">
                    <Image width={16} height={14} src={speedIcon} />
                    <h1 className="font-openSans text-[12px] font-normal">
                      {car.speed}
                    </h1>
                  </div>
                  <div className="md:grid hidden gap-y-[4px]">
                    <Image width={16} height={14} src={engineIcon} />
                    <h1 className="font-openSans text-[12px] font-normal">
                      {car.engineType}
                    </h1>
                  </div>
                </div>
                <h1 className="font-exo font-medium text-[#FCA311] text-[14px]">
                  {car.price}
                </h1>
              </div>
            </div>
          ))
        ) : (
          <div className="text-white">No cars available for this category.</div>
        )}
      </div>
    </div>
  );
}

export default Main;
