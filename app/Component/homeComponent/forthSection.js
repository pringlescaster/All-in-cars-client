"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import speedIcon from "../../../public/speedIcon.svg";
import engineIcon from "../../../public/engineIcon.svg";
import favoriteIcon from "../../../public/favorite.svg";
import selectedFavorite from "../../../public/selectedfavorite.svg";
import { useAuthStore } from '@/app/store/authStore';

function Main() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isAuthenticated } = useAuthStore();

  // Only access localStorage on the client side
  let token = null;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token"); // This is safe to access in the browser
  }

  // Set the token in request headers if it exists
  const config = token
    ? {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    : {};

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/favorites`,
          config // Pass the token in headers
        );
        // Assuming the response contains a 'favorites' array
        const carsWithFavoriteStatus = response.data.favorites.map(car => ({
          ...car,
          isFavorite: true, // Set initial favorite status to true
        }));

        setCars(carsWithFavoriteStatus);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchFavorites();
  }, [config]); // Re-fetch if token changes

  const handleFavoriteToggle = async (carId) => {
    try {
      const updatedCars = cars.map((car) => {
        if (car._id === carId) {
          return { ...car, isFavorite: !car.isFavorite };
        }
        return car;
      });

      setCars(updatedCars);

      const toggledCar = updatedCars.find((car) => car._id === carId);
      if (toggledCar.isFavorite) {
        await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/favorites`,
          { carId },
          config // Pass the token in headers
        );
      } else {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/favorites/${carId}`,
          config // Pass the token in headers
        );
      }
      // Filter out the car from the list immediately in the frontend
      const filteredCars = updatedCars.filter((car) => car._id !== carId);
      setCars(filteredCars);
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  return (
    <div className="px-4 text-white flex flex-col py-[60px] bg-[#030508]">
      <div className="grid grid-cols-2 gap-y-[12px] gap-x-[12px] md:grid-cols-3 lg:flex md:justify-center md:gap-x-[16px] py-[24px] justify-start px-4 md:py-[40px]">
        {cars && cars.map((car) => (
          <div key={car._id} className="flex bg-white/15 flex-col rounded-xl w-full lg:w-[22%]">
            <div className="relative">
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
                onClick={() => handleFavoriteToggle(car._id)} // Add onClick to toggle favorite
              />
            </div>
            <div className="px-2 py-2 grid gap-y-[8px]">
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
  );
}

export default Main;
