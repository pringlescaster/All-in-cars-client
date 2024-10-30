"use client";

import Image from "next/image";
import logo from "../../../public/allInCar.svg";
import profile from "../../../public/profile.svg";
import search from "../../../public/search.svg";
import favourite from "../../../public/favourite.svg";
import hamburger from "../../../public/hamburger.svg";
import cancel from "../../../public/cancel.svg";
import { useState } from "react";

export default function Home() {
  const [nav, setNav] = useState(false);
  const [searchActive, setSearchActive] = useState(false); // State to control accordion dropdown

  const handleClick = () => {
    setNav(!nav);
  };

  const toggleSearchAccordion = () => {
    setSearchActive(!searchActive); // Toggle the navbar accordion expansion
  };

  return (
    <>
      <div className="flex flex-col justify-between px-4 md:justify-between py-3 bg-[#050910] items-center">
        {/* Top bar with logo and navigation */}
        <div className="flex justify-between items-center w-full">
          <Image src={logo} alt="Logo" />
          <ul className="hidden font-lato font-medium text-white/80 text-base md:flex justify-between gap-x-12">
            <li>Home</li>
            <li>My Garage</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>

          <div className="flex justify-start gap-x-[16px] md:gap-x-[24px] items-center">
            <button className="border-white/50 border-[0.5px] rounded-md text-sm font-openSans px-[24px] py-[6px] text-white/80 hover:text-white hover:border-white/80">Sign in</button>
            <Image src={search} alt="Search" onClick={toggleSearchAccordion} /> {/* Click to toggle accordion */}
            
            <div className="block md:hidden" onClick={handleClick}>
              {nav ? <Image src={cancel} /> : <Image width={22} src={hamburger} alt="cancel" />}
            </div>
          </div>
        </div>

        {/* Accordion section (collapsible navbar part) */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${
            searchActive ? "max-h-[200px]" : "max-h-0"
          }`}
        >
          <div className="bg-[#050910] p-4 flex flex-col">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border border-gray-300 bg-[#595959] rounded-md mb-4 w-full"
            />
            {/* Add more dropdown/accordion content here if needed */}
          </div>
        </div>

        {/* Mobile nav menu for small screens */}
        <div
          className={`fixed bg-[#050910] top-0 right-0 w-full h-full transition-transform duration-300 ease-in-out ${
            nav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-4 py-3">
            <Image src={logo} alt="Logo" />
            <div onClick={handleClick}>
              {nav ? <Image src={cancel} /> : <Image src={hamburger} alt="cancel" />}
            </div>
          </div>
          <ul className="grid justify-center items-center text-center font-lato gap-y-4 mt-4">
            <li>Home</li>
            <li>My Garage</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </>
  );
}

