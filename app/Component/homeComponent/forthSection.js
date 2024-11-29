"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import speedIcon from "../../../public/speedIcon.svg";
import engineIcon from "../../../public/engineIcon.svg";
import favorite from "../../../public/favorite.svg";
import selectFavorite from "../../../public/selectedfavorite.svg";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/store/authStore";
import SkeletonCard from "../skeletonCard";

function ForthSection() {
  const [newCars, setNewCars] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);  // Store the token in state

  const { isAuthenticated } = useAuthStore();
  const router = useRouter();
  axios.defaults.withCredentials = true;

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

  const handleCarClick = (carId) => {
    router.push(`/${carId}`);
  };

  useEffect(() => {
    const fetchNewArrival = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/cars`, 
          config  // Use config if token is available
        );
        const newArrivals = response.data.filter(car => car.categories === "New Arrivals");
        setNewCars(newArrivals);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchNewArrival();
  }, [token]);  // Re-fetch cars if token changes

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
      const updatedCars = newCars.map((car) => {
        if (car._id === carId) {
          return { ...car, isFavorite: !car.isFavorite };
        }
        return car;
      });
      setNewCars(updatedCars);

      const toggledCar = updatedCars.find((car) => car._id === carId);
      if (toggledCar.isFavorite) {
        await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/favorites`,
          { carId },
          { withCredentials: true, headers: config.headers }
        );
      } else {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/favorites/${carId}`,
          { withCredentials: true, headers: config.headers }
        );
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  return (
    <div className="px-4 flex flex-col py-[60px] bg-[#030508]">
      <div className="flex flex-col gap-y-[48px]">
        <div className="flex flex-col gap-y-[8px] md:gap-y-[12px]">
          <h1 className="font-normal text-white text-center text-lg font-russo md:text-xl">
            NEW ARRIVALS
          </h1>
          <h1 className="text-lg text-white text-center font-normal font-russo md:text-[32px]">
            Rev Up with Our Latest Models.
          </h1>
        </div>

        <div className="flex px-8 flex-col gap-y-[22px] gap-x-[12px] justify-center md:grid md:grid-cols-3 md:justify-center lg:flex lg:flex-row md:gap-x-[16px] py-[24px]  md:py-[40px]">
          {loading ? (Array.from({ length:4}).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        )
        
          :(newCars &&
            newCars.map((car) => (
              <div key={car._id} className="flex bg-white/15 flex-col rounded-xl justify-start lg:w-[22%]">
                <div className="relative cursor-pointer" onClick={() => handleCarClick(car._id)} >
                  <Image
                    src={car.image}
                    alt="car images"
                    width="256"
                    height="170"
                    className="rounded-t-xl w-full object-cover"
                  />
                  <Image
                    src={car.isFavorite ? selectFavorite : favorite}
                    alt="favorite icon"
                    className="absolute top-2 right-2 w-8 h-8 z-10 cursor-pointer"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleFavoriteToggle(car._id);
                    }}
                  />
                </div>
                <div className="px-2 py-2 grid gap-y-[8px]">
                  <h1 className="text-white text-[14px] md:text-[16px] font-montserrat text-left font-medium">{car.name}</h1>
                  <div className="flex flex-col md:flex-row justify-center md:justify-start md:items-center md:gap-x-[33px] gap-y-[12px]">
                    <div className="grid gap-y-[4px]">
                      <Image width={16} height={14} src={speedIcon} alt="image"/>
                      <h1 className="font-openSans text-[12px] text-white font-normal">{car.speed}</h1>
                    </div>
                    <div className="md:grid hidden gap-y-[4px]">
                      <Image width={16} height={14} src={engineIcon} alt="iamge" />
                      <h1 className="font-openSans text-white text-[12px] font-normal">{car.engineType}</h1>
                    </div>
                  </div>
                  <h1 className="font-openSans font-medium text-[#FCA311] text-[16px]">{car.price}</h1>
                </div>
              </div>
            )))}
        </div>
      </div>
    </div>
  );
}

export default ForthSection;
