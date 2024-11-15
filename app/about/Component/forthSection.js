"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

function ForthSection() {
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/v1/teams");
        setTeam(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  return (
    <div className="px-4 py-[60px] bg-[#030508]">
      <div className="px-0 md:px-8 lg:px-16 flex flex-col gap-y-[8px]">
        <h1 className="font-normal text-white text-center text-lg font-russo md:text-2xl">
          Meet Our Team
        </h1>
        <p className="font-montserrat text-sm md:text-base font-light text-center">
          At "All In Cars," our team of industry experts, car enthusiasts, and
          tech professionals drives our passion for excellence. We are dedicated
          to providing top-notch content, products, and services. Meet the
          people who fuel your automotive journey.
        </p>
      </div>
      <div className="flex py-8 md:pt-12 lg:pt-20 gap-y-[32px] md:gap-y-[40px] flex-wrap gap-x-[40px] justify-center items-center">
        {team &&
          team.map((teamMember, index) => (
            <div className="grid gap-y-[12px]" key={index}>
              
                <Image
                  src={teamMember.Image}
                  alt="team member"
                  width={250}
                  height={250}
                />
                <div className="grid gap-y-[2px]">
                    <h1 className="font-montserrat text-white text-base font-medium">{teamMember.name}</h1>
                    <h3 className="font-montserrat text-[#FCA311] text-sm font-normal">{teamMember.role}</h3>
                </div>
              
            </div>
          ))}
      </div>
    </div>
  );
}

export default ForthSection;
