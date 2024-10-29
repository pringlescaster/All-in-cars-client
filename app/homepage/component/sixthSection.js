"use client";

import React from "react";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
function sixthSection() {
const [eventData, seteventData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchEventData = async () => {
    try {
        const response = await axios.get(
            "http://localhost:2000/api/v1/events/6720ac44dcec7bd43e1a0660"
        );
        seteventData([response.data]), setLoading(false);
    } catch (error) {
        setError(error.message);
        setLoading(false);
    }
  };

 fetchEventData();
}, []);





  return (
  <div className="px-4 py-[60px] bg-[#030508]">
 {
    eventData &&
    eventData.map(( event, index ) => (
        <div className="flex flex-col gap-y-[32px]">
            <div className="px-0 md:px-8 lg:px-16 flex flex-col gap-y-[8px]">
            <h1 className="font-normal text-white text-center text-lg font-russo md:text-2xl">{event.title}</h1>
            <p className="font-montserrat text-sm font-light text-center">{event.description}</p>
            </div>
            
            <div className="flex px-0 justify-center gap-x-[16px]">
                <Image className="" src={event.firstImage} alt="eventImages" width={320} height={180} />
                <Image className="hidden md:block" src={event.secondImage} alt="eventImages" width={320} height={180} />
                <Image className="hidden md:hidden lg:block" src={event.thirdImage} alt="eventImages" width={320} height={180} />
            </div>
        </div>
    ))
 }
  </div>
  );
}

export default sixthSection;
