import React from 'react';
import successImage from "../../public/success.svg";
import Image from 'next/image';

function SuccessModal() {
  return (
    <div className="bg-[#e1e1e1] rounded-[10px] gap-y-[12px] pt-6 pb-8 flex flex-col items-center px-6 max-w-[400px] mx-auto">
      <Image
        className="w-16 h-16"
        src={successImage}
        alt="Success"
      />
      <h1 className="font-medium text-[#111111] text-center text-sm md:text-base lg:text-lg">
        Booking Created Successfully
      </h1>
    </div>
  );
}

export default SuccessModal;
