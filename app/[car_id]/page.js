"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import engineIcon from "../../public/engineIcon.svg";
import calendarIcon from "../../public/calendarIcon.svg";
import speedIcon from "../../public/speedIcon.svg";
import Footer from "../Component/footer";
import BookingModal from "../Component/bookingModal";
import ProtectedRoute from "../hooks/protectedRoute";
import { useAuthStore } from "../store/authStore";
import SuccessModal from "../Component/successModal";

function Page() {
  const { car_id } = useParams();
  const [carDetails, setCarDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // Manage modal visibility
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    const fetchCarDetails = async () => {
      if (car_id) {
        try {
          const response = await axios.get(
            `http://localhost:2000/api/v1/car/${car_id}`
          );
          setCarDetails(response.data);
        } catch (err) {
          setError("Failed to load car details.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchCarDetails();
  }, [car_id]);

  const handleBookAppointment = () => {
    if (!isAuthenticated) {
      router.push("/sign-in");
    } else {
      setShowModal(true);
    }
  };


  const handleSuccessBooking = () => {
    setShowModal(false); // Close the BookingModal
    setShowSuccessModal(true); // Open the SuccessModal
    setTimeout(() => {
      setShowSuccessModal(false); // Close the SuccessModal after 3 seconds
    }, 3000);
  };


  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        carDetails && (
          <div>
            <div className="flex justify-between flex-col">
              <div
                className="grid gap-y-4 px-6 py-8"
              >
                <div className="flex justify-start md:justify-evenly gap-6 flex-wrap items-center gap-x-12">
                  <div className="flex flex-col gap-y-[12px]">
                    <Image
                      src={engineIcon}
                      className="w-[18px]"
                      alt="engineIcon"
                    />
                    <div className="gap-y-[4px]">
                      <h1 className="text-white/80 text-base font-light font-openSans">
                        Engine Type
                      </h1>
                      <h1 className="text-white text-sm md:text-xl font-bold font-openSans">
                        {carDetails.engineType}
                      </h1>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-[12px]">
                    <Image src={speedIcon} className="w-[18px]" alt="speedIcon" />
                    <div className="gap-y-[4px]">
                      <h1 className="text-white/80 text-base font-light font-openSans">
                        Top Speed
                      </h1>
                      <h1 className="text-white text-sm md:text-xl font-bold font-openSans">
                        {carDetails.speed}
                      </h1>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-[12px]">
                    <Image
                      src={calendarIcon}
                      className="w-[18px]"
                      alt="calendarIcon"
                    />
                    <div className="gap-y-[4px]">
                      <h1 className="text-white/80 text-base font-light font-openSans">
                        Year
                      </h1>
                      <h1 className="text-white text-sm md:text-xl font-bold font-openSans">
                        {carDetails.year}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-auto max-h-[70vh] lg:max-h-[100vh] overflow-hidden">
                <Image
                  className="rounded-md"
                  src={carDetails.image}
                  alt="Car Image"
                  layout="intrinsic"
                  width={1600}
                  height={900}
                  objectFit="contain"
                  quality={80}
                  priority
                />
              </div>

              <div className="py-8 grid gap-y-[8px] px-3 md:px-8 bg-[#030508]">
                <div className="grid gap-y-2 justify-between">
                  <h1 className="font-montserrat font-semibold text-white text-[20px] md:text-[22px]">
                    {carDetails.name}
                  </h1>
                  <h1 className="font-openSans font-semibold text-[#FCA311] text-[20px] md:text-[22px]">
                    {carDetails.price}
                  </h1>
                </div>
                <h1 className="font-montserrat text-white/80 text-[16px] md:text-[18px]">
                  {carDetails.description}
                </h1>
                <button
                  className="font-openSans mx-auto mt-6 md:w-[30%] font-semibold text-base rounded-[8px] px-[24px] py-[10px] text-black bg-[#FCA311]"
                  onClick={handleBookAppointment}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        )
      )}

      {showModal && (
        <div className="fixed px-4 inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <ProtectedRoute>
            <div className="rounded-lg shadow-lg max-w-lg w-full">
              <BookingModal
                carId={car_id}
                onClose={() => setShowModal(false)}
                onBookingSuccess={handleSuccessBooking}
              />
            </div>
          </ProtectedRoute>
        
        </div>

        
      )}

       {/* SuccessModal */}
       {showSuccessModal && (
        <div className="fixed px-4 inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <SuccessModal />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Page;
