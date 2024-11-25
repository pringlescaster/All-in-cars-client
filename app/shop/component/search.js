"use client"

import React from "react";
import Image from "next/image";
import Search from "../../../public/search.svg";

function search({ searchQuery, setSearchQuery }) {
  return (
    <div className="px-4 pt-4 border-b-white/60 pb-4 border-b-[1px] bg-[#050910]">
      <div className="flex rounded-md gap-x-[8px] border-white/10 border-[1px] bg-[#595959]/50 px-[14px] py-[10px] ">
        <Image src={Search} alt="search" />
        <input
          className="bg-transparent outline-none w-full"
          type="text"
          placeholder="Search for cars"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default search;
