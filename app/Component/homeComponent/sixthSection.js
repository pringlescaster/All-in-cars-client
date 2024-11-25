"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

function SixthSection() {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/events/6720ac44dcec7bd43e1a0660`
        );
        setEventData([response.data]); // Wrapping in an array for mapping
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchEventData();
  }, []);

  return (
    <div id="sixth-section" className="px-4 py-[60px] bg-[#030508]">
      {eventData &&
        eventData.map((event, index) => (
          <div key={index} className="flex text-white flex-col gap-y-[32px]">
            <div className="px-0 md:px-8 lg:px-16 flex flex-col gap-y-[8px]">
              <h1
                className="font-normal text-white text-center text-lg font-russo md:text-2xl"
              >
                {event.title}
              </h1>
              <p
                className="font-montserrat text-white text-sm md:text-base font-light text-center"
              >
                {event.description}
              </p>
            </div>

            <div className="flex px-0 justify-center gap-x-[16px]">
              <Image
                src={event.firstImage}
                alt="eventImages"
                width={320}
                height={180}
              />
              <Image
                className="hidden md:block"
                src={event.secondImage}
                alt="eventImages"
                width={320}
                height={180}
              />
              <Image
                className="hidden md:hidden lg:block"
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
