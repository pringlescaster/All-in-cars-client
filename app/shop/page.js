"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Sport from "../../public/Sport.svg";
import Suvs from "../../public/SUV.svg";
import Sedans from "../../public/Sedan.svg";
import Convertibles from "../../public/Convertible.svg";
import Electric from "../../public/Electric.svg";


function Page() {
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
            activeCategory === "SUVs"
              ? "border-b-2 border-[#FCA311] pb-1"
              : ""
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
      <div className="mt-6">
        {filterData.length > 0 ? (
          filterData.map((car) => (
            <div key={car._id} className="border p-4 mb-4 text-white bg-[#1a1a1a]">
              <h3 className="font-bold">{car.name}</h3>
              <p>Engine: {car.engineType}</p>
              <p>Speed: {car.speed}</p>
              <p>Year: {car.year}</p>
              <p>Price: {car.price}</p>
            </div>
          ))
        ) : (
          <div className="text-white">No cars available for this category.</div>
        )}
      </div>
    </div>
  );
}

export default Page;
