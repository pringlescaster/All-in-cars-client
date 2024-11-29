import React from 'react'

function skeletonCard() {
  return (
    <div className="flex bg-gray-50 animate-pulse flex-col rounded-xl justify-start lg:w-[22%]">
    <div className="w-full h-[170px] bg-gray-100 rounded-t-xl"></div>
    <div className="px-2 py-2 grid gap-y-[8px]">
      <div className="w-3/4 h-4 bg-gray-100 rounded"></div>
      <div className="flex flex-col md:flex-row justify-center md:justify-start md:items-center md:gap-x-[33px] gap-y-[12px]">
        <div className="w-[16px] h-[16px] bg-gray-100 rounded"></div>
        <div className="w-1/2 h-4 bg-gray-100 rounded hidden md:block"></div>
      </div>
      <div className="w-1/3 h-4 bg-gray-100 rounded"></div>
    </div>
  </div>
  )
}

export default skeletonCard
