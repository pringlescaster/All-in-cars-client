import React, { useState } from "react";
import { useAuthStore } from "../store/authStore";
import close from "../../public/closee.svg";
import Image from "next/image";
import axios from "axios";

function BookingModal({carId, onClose, onBookingSuccess }) {
  const {isAuthenticated} = useAuthStore();
  const [date, setDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  
  const handleDateChange = (e) => {
    setDate(e.target.value);
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
  
    try {
      if (!date) {
        setErrorMessage("Please select a date");
        setIsLoading(false);
        return;
      }
  
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/booking` ,{ carId, date }
      ,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
  
      if (response.data.success) {
        setSuccessMessage("Booking Created Successfully!");
        setDate("");
        onBookingSuccess();
        onClose();
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage(
      error.response?.data?.message || "An error occurred while creating the booking."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const { user } = useAuthStore();

  return (
    <div className="bg-[#e1e1e1] text-white rounded-[10px] gap-y-[8px] pt-4 pb-6 flex flex-col px-8">
      <Image
        className="ml-auto cursor-pointer"
        onClick={onClose}
        src={close}
        alt="close"
      />
      <div className="flex flex-col gap-y-[4px]">
        <h1 className="font-merriwSans font-semibold text-base md:text-lg text-[#111111]">
          Booking
        </h1>
        <p className="font-medium text-sm md:text-base text-black/90">
          Select a date to book your appointment. Come visit, inspect the car,
          and take it for a test drive to make sure it's the perfect fit!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-y-6">
        {errorMessage && (
          <div className="text-red-500 text-sm md:text-base font-medium">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="text-green-500 text-sm md:text-base font-medium">
            {successMessage}
          </div>
        )}
        <input
          type="date"
          placeholder="Enter date"
          className="py-[6px] w-full text-[#444444] rounded-[8px] outline-none bg-transparent border-[1.4px] border-[#666666] px-[4px]"
          value={date}
          onChange={handleDateChange}
          required
        />
        <div className="grid gap-y-[12px]">
        <button
  type="submit"
  disabled={isLoading}
  className={`font-openSans font-semibold rounded-[8px] px-[24px] py-[8px] text-black text-sm bg-[#FCA311] ${
    isLoading ? "opacity-50 cursor-not-allowed" : ""
  }`}
>
  {isLoading ? "Booking..." : "Confirm Booking"}
</button>

        </div>
      </form>
    </div>
  );
}

export default BookingModal;
