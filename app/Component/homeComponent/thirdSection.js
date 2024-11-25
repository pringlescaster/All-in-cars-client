"use client"


import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import Mercedes from '../../../public/Mercedes-Benz.svg';
import Bugatti from '../../../public/Bugatti.svg';
import Honda from '../../../public/Honda.svg';
import Ford from '../../../public/Ford.svg';
import Lexus from '../../../public/Lexus.svg';
import Ferrari from '../../../public/Ferrari.svg';
import Audi from '../../../public/Audi.svg';

function ThirdSection() {
  const logosRef = useRef([]);

  useEffect(() => {
    // Continuous animation for all logos
    gsap.to(logosRef.current, {
      opacity: 0, // Disappear
      scale: 0.5, // Shrink
      duration: 1,
      yoyo: true, // Alternate between disappear and appear
      repeat: -1, // Infinite repeat
      ease: 'power1.inOut',
      stagger: 0.5, // Stagger the animation
    });
  }, []);

  const logoData = [
    { src: Mercedes, alt: 'Mercedes Benz', name: 'Mercedes' },
    { src: Bugatti, alt: 'Bugatti', name: 'Bugatti' },
    { src: Honda, alt: 'Honda', name: 'Honda' },
    { src: Ford, alt: 'Ford', name: 'Ford' },
    { src: Lexus, alt: 'Lexus', name: 'Lexus' },
    { src: Ferrari, alt: 'Ferrari', name: 'Ferrari' },
    { src: Audi, alt: 'Audi', name: 'Audi' },
  ];

  return (
    <span className="bg-[#030508] hidden md:flex justify-around py-[40px] px-[40px]">
      {logoData.map((logo, index) => (
        <div
          key={logo.name}
          className="flex flex-col items-center px-[10px] pt-[4px] pb-[6px] justify-center gap-y-[4px] bg-white/10 rounded-[10px]"
          ref={(el) => (logosRef.current[index] = el)}
        >
          <Image src={logo.src} alt={logo.alt} />
          <h1 className="font-montserrat text-center text-white text-[10px] font-medium">
            {logo.name}
          </h1>
        </div>
      ))}
    </span>
  );
}

export default ThirdSection;
