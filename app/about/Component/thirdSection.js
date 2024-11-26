"use client";

import React, { useEffect, useState } from "react";

// Counter component for the animated counting effect
const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10); // Determines the step size

    const counterInterval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counterInterval);
      }
      setCount(Math.ceil(start)); // Updates count value
    }, 10);

    return () => clearInterval(counterInterval); // Cleanup on unmount
  }, [end, duration]);

  return <span>{count}</span>;
};

// Main component with counters
function ThirdSection() {
  return (
    <div className="bg-[#030508]/8 hidden lg:flex justify-around py-[40px]">
      <div className="grid justify-center items-center text-center">
        <h1 className="font-semibold text-[32px] text-white font-openSans">
          <Counter end={2024} />
        </h1>
        <h1 className="font-medium text-[14px] text-[#F4F4F4] font-openSans">
          Founded
        </h1>
      </div>

      <div className="grid justify-center items-center text-center">
        <h1 className="font-semibold text-[32px] text-white font-openSans">
          <Counter end={150} />+
        </h1>
        <h1 className="font-medium text-[14px] text-[#F4F4F4] font-openSans">
          Employees
        </h1>
      </div>

      <div className="grid justify-center items-center text-center">
        <h1 className="font-semibold text-[32px] text-white font-openSans">
          <Counter end={300} />k
        </h1>
        <h1 className="font-medium text-[14px] text-[#F4F4F4] font-openSans">
          Users
        </h1>
      </div>

      <div className="grid justify-center items-center text-center">
        <h1 className="font-semibold text-[32px] text-white font-openSans">
          <Counter end={80} />+
        </h1>
        <h1 className="font-medium text-[14px] text-[#F4F4F4] font-openSans">
          Cars Sold
        </h1>
      </div>

      <div className="grid justify-center items-center text-center">
        <h1 className="font-semibold text-[32px] text-white font-openSans">
          <Counter end={10} />+
        </h1>
        <h1 className="font-medium text-[14px] text-[#F4F4F4] font-openSans">
          Brands
        </h1>
      </div>
    </div>
  );
}

export default ThirdSection;
