"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

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
        <div className="flex">
        <div className="bg-black w-[30%]"></div>
        <div className="h-screen w-screen" 
        style={{
            backgroundImage: `url(${carDetails.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}></div>
        <h1 className="text-white absolute left-24">gdhdhs</h1>
        </div>
      )}
    </div>
  );
}

export default page;
