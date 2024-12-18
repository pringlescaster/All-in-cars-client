"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Search from "../component/search.js";
import Sport from "../../../public/Sport.svg";
import Suvs from "../../../public/SUV.svg";
import Sedans from "../../../public/Sedan.svg";
import Convertibles from "../../../public/Convertible.svg";
import Electric from "../../../public/Electric.svg";
import speedIcon from "../../../public/speedIcon.svg";
import engineIcon from "../../../public/engineIcon.svg";
import favoriteIcon from "../../../public/favorite.svg";
import selectedFavorite from "../../../public/selectedfavorite.svg";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/store/authStore";
import SkeletonCard from "@/app/Component/Skeleton/skeletonCard.js";

function Main() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterData, setFilterData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [token, setToken] = useState(null);  // Store the token in state
  const [activeCategory, setActiveCategory] = useState("Sport Cars");

  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  const handleCarClick = (carId) => {
    router.push(`/${carId}`);
  };

  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken);  // Set the token from localStorage
    }
  }, []);  // Empty dependency array ensures this runs only once when the component mounts

  const config = token ? {
    headers: {
      Authorization: `Bearer ${token}`,  // Include token in header if it exists
    },
  } : {};

  // Fetch cars data
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/cars`,
          config
        );
        setCars(response.data);
        setFilterData(
          response.data.filter((car) => car.categories === "Sport Cars") // Default filter
        );
        setLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, [token]);

  // Toggle favorite status
  const handleFavoriteToggle = async (carId) => {
    if (!isAuthenticated) {
      router.push("/sign-in");
      return;
    }

    const userToken = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).token : null;
    if (userToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }


    try {
      const updatedCars = cars.map((car) => {
        if (car._id === carId) {
          return { ...car, isFavorite: !car.isFavorite }; // Toggle favorite locally
        }
        return car;
      });
      setCars(updatedCars);
      setFilterData(
        updatedCars.filter((car) => car.categories === activeCategory)
      );

      // Check if the car is being added or removed from favorites
      const toggledCar = updatedCars.find((car) => car._id === carId);
      if (toggledCar.isFavorite) {
        // Add to favorites
        await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/favorites`,
          { carId },
          { withCredentials: true, headers: config.headers }
        );
      } else {
        // Remove from favorites
        await axios.delete(
          `${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/favorites/${carId}`,
          { withCredentials: true, headers: config.headers }
        );
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Update the active category
    setFilterData(cars.filter((car) => car.categories === category)); // Filter cars by selected category
  };

  // Filter cars based on search query
  useEffect(() => {
    setFilterData(
      cars.filter(
        (car) =>
          car.categories === activeCategory &&
          car.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, activeCategory]);


  return (
    <div className="">
      {/* Search Component */}
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Categories Section */}
      <div className="bg-[#050910] flex flex-wrap justify-start text-white lg:justify-around px-8 gap-8 py-8">
        {["Sport Cars", "SUVs", "Sedans", "Convertibles", "Electric Cars"].map(
          (category) => (
            <div
              key={category}
              className={`flex gap-x-1 text-white items-center font-openSans font-medium text-sm cursor-pointer ${
                activeCategory === category
                  ? "border-b-2 border-[#FCA311] pb-1"
                  : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <Image
                className="w-[24px]"
                src={
                  category === "Sport Cars"
                    ? Sport
                    : category === "SUVs"
                    ? Suvs
                    : category === "Sedans"
                    ? Sedans
                    : category === "Convertibles"
                    ? Convertibles
                    : category === "Electric Cars" ? Electric : null

            
              }
                alt={category}
              />
              <span>{category}</span>
            </div>
          )
        )}
      </div>

      {/* Filtered Cars Display */}
      <div className="flex px-8 flex-col gap-y-[22px] gap-x-[12px] justify-center md:grid md:grid-cols-3 md:justify-center lg:flex lg:flex-row md:gap-x-[16px] py-[24px] md:py-[40px]">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : filterData.length > 0 ? (
              filterData.map((car) => (
                <div
                  key={car._id}
                  className="flex bg-white/15 flex-col rounded-xl w-full lg:w-[22%]"
                >
                  <div
                    className=" text-white relative cursor-pointer"
                    onClick={() => handleCarClick(car._id)} // Now clicking on car will trigger the function
                  >
                    <Image
                      src={car.image}
                      alt="car images"
                      width="256"
                      height="170"
                      className="rounded-t-xl w-full object-cover"
                    />
                    <Image
                      src={car.isFavorite ? selectedFavorite : favoriteIcon}
                      alt="favorite icon"
                      className="absolute top-2 right-2 w-8 h-8 z-10 cursor-pointer"
                      onClick={(event) => {
                        event.stopPropagation();
                        handleFavoriteToggle(car._id); // Prevent propagation when toggling favorite
                      }}
                    />
                  </div>

                  <div className="px-2 py-2 grid gap-y-[8px]">
                    <h1 className="text-white text-[14px] md:text-[16px] font-montserrat text-left font-medium">
                      {car.name}
                    </h1>
                    <div className="flex flex-col md:flex-row justify-center md:justify-start md:items-center md:gap-x-[33px] gap-y-[12px]">
                      <div className="grid gap-y-[4px]">
                        <Image
                          width={16}
                          height={14}
                          src={speedIcon}
                          alt="speedIcon"
                        />
                        <h1 className="font-openSans text-white text-[12px] font-normal">
                          {car.speed}
                        </h1>
                      </div>
                      <div className="md:grid hidden gap-y-[4px]">
                        <Image
                          width={16}
                          height={14}
                          src={engineIcon}
                          alt="engineIcon"
                        />
                        <h1 className="font-openSans text-white text-[12px] font-normal">
                          {car.engineType}
                        </h1>
                      </div>
                    </div>
                    <h1 className="font-openSans font-medium text-[#FCA311] text-[16px]">
                      {car.price}
                    </h1>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-white text-center py-6 ">No cars available for this category.</div>
            )}
      </div>
    </div>
  );
}

export default Main;
