"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import trophy from "../../../public/trophy.svg";
import star from "../../../public/star.svg";
import handshake from "../../../public/handshakee.svg";
import pricing from "../../../public/pricing.svg";

function FifthSection() {
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      Image: trophy,
      title: "Expertise and Experience",
      paragraph:
        "Our team of seasoned professionals and car enthusiasts brings extensive knowledge and experience, ensuring you get the best advice and products.",
    },

    {
      Image: star,
      title: "Quality and Variety",
      paragraph:
        "We offer high-quality vehicles, parts, and accessories to meet all your automotive needs, from the latest models to rare, hard-to-find parts.",
    },

    {
      Image: handshake,
      title: "Service",
      paragraph:
        "Your satisfaction is our priority. Our team offers personalized support for a seamless experience.",
    },
  ];

  const handleScroll = () => {
    const section = document.getElementById("fifth-section");
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.8) { // Show when the section is near the bottom of the viewport
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="fifth-section"
      className={`px-4 py-[60px] justify-center hidden lg:flex flex-col gap-y-[40px] bg-[#030508] transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="font-normal text-white text-center text-lg font-russo md:text-2xl">
        Why Choose Us
      </h1>
      <div className="flex items-start gap-x-[52px] md:px-4 lg:px-32 justify-center">
        {services.map(function (service, index) {
          return (
            <div
              className="flex flex-col"
              key={index}
              style={{
                transition: "transform 0.5s ease, opacity 0.5s ease",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <div className="flex gap-y-[8px] flex-col">
                <Image width={24} height={24} src={service.Image} alt="image" />
                <div className="flex flex-col gap-y-[8px]">
                  <h1 className="font-montserrat text-base font-semibold">
                    {service.title}
                  </h1>
                  <p className="font-montserrat text-sm font-light">
                    {service.paragraph}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FifthSection;
