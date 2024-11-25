"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

function SixthSection() {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2000/api/v1/events/6720ac44dcec7bd43e1a0660"
        );
        setEventData([response.data]); // Wrapping in an array for mapping
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchEventData();

    const handleScroll = () => {
      const section = document.getElementById("sixth-section");
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.8) { // Trigger animation when section is near the bottom of the viewport
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div
      id="sixth-section"
      className={`px-4 py-[60px] bg-[#030508] transition-all duration-1000 ${
        isVisible ? "opacity-100 translateY-0" : "opacity-0 translateY-10"
      }`}
    >
      {eventData &&
        eventData.map((event, index) => (
          <div key={index} className="flex flex-col gap-y-[32px]">
            <div className="px-0 md:px-8 lg:px-16 flex flex-col gap-y-[8px]">
              <h1
                className={`font-normal text-white text-center text-lg font-russo md:text-2xl transition-all duration-1000 ${
                  isVisible ? "opacity-100 translateY-0" : "opacity-0 translateY-10"
                }`}
              >
                {event.title}
              </h1>
              <p
                className={`font-montserrat text-sm md:text-base font-light text-center transition-all duration-1000 ${
                  isVisible ? "opacity-100 translateY-0" : "opacity-0 translateY-10"
                }`}
              >
                {event.description}
              </p>
            </div>

            <div className="flex px-0 justify-center gap-x-[16px]">
              <Image
                className={`transition-all duration-1000 ${
                  isVisible ? "opacity-100 translateY-0" : "opacity-0 translateY-10"
                }`}
                src={event.firstImage}
                alt="eventImages"
                width={320}
                height={180}
              />
              <Image
                className={`transition-all duration-1000 hidden md:block ${
                  isVisible ? "opacity-100 translateY-0" : "opacity-0 translateY-10"
                }`}
                src={event.secondImage}
                alt="eventImages"
                width={320}
                height={180}
              />
              <Image
                className={`transition-all duration-1000 hidden md:hidden lg:block ${
                  isVisible ? "opacity-100 translateY-0" : "opacity-0 translateY-10"
                }`}
                src={event.thirdImage}
                alt="eventImages"
                width={320}
                height={180}
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default SixthSection;
