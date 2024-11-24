"use client";
import localFont from "next/font/local";
import "./globals.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname for active route
import React from "react";
import { useAuthStore } from "./store/authStore";
import Avatar from "./Component/avatar";
import { useAuth } from "./hooks/useAuth";
import StatusModal from "./Component/statusModal";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Layout = ({ children }) => {
  const [nav, setNav] = useState(false);
  const pathname = usePathname(); // To get the current path
  const { user, isAuthenticated } = useAuthStore()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    setNav(!nav);
  };

  const getLinkClassName = (path) => {
    return pathname === path
      ? "text-[#FCA311]" // Active link color
      : "text-white/40"; // Default link color
  };

  // Define routes where navbar should not appear
  const excludeNavbarRoutes = ['reset-password']; // Exclude the reset-password route

  // Only render navbar if current route is not in excludeNavbarRoutes
  const showNavbar = !excludeNavbarRoutes.includes(pathname);

  const toggleModal = ()=>{
    setIsModalOpen(!isModalOpen)
  }

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Conditionally render Navbar */}
        {showNavbar && (
          <div className="flex flex-col justify-between px-4 md:justify-between py-3 bg-[#050910] items-center">
            <div className="flex justify-between items-center w-full">
              <Image src="/allInCar.svg" alt="Logo" width={90} height={40} />
              <ul className="hidden font-lato font-medium text-base md:flex justify-between gap-x-12">
                <li>
                  <Link href="/" className={getLinkClassName("/")}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className={getLinkClassName("/shop")}>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={getLinkClassName("/about")}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className={getLinkClassName("/contact-us")}>
                    Contact Us
                  </Link>
                </li>
              </ul>

              
              <div className="flex justify-start gap-x-[16px] md:gap-x-[24px] items-center">
               


                {isAuthenticated ? (
                  <div className="cursor-pointer" onClick={toggleModal}>
                  <Avatar  name={user.name} size={8} />
                  </div> // Display user avatar when logged in
                ) : (
                  <Link href="/sign-in">
                    <div className="border-white/50 border-[0.5px] cursor-pointer rounded-md text-sm font-openSans px-[24px] py-[6px] text-white/80 hover:text-white hover:border-white/80">
                      Sign in
                    </div>
                  </Link>
                )}

                <div className="block md:hidden" onClick={handleClick}>
                  {nav ? (
                    <Image src="/cancel.svg" alt="Cancel" width={22} height={22} />
                  ) : (
                    <Image width={22} height={20} src="/hamburger.svg" alt="Hamburger" />
                  )}
                </div>
              </div>
            </div>

            {/* Mobile nav menu */}
            <div
              className={`fixed bg-[#050910] top-0 right-0 w-full h-full transition-transform duration-300 ease-in-out ${
                nav ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex justify-between items-center px-4 py-3">
                <Image src="/allInCar.svg" alt="Logo" width={50} height={50} />
                <div onClick={handleClick}>
                  {nav ? (
                    <Image src="/cancel.svg" alt="Cancel" width={22} height={22} />
                  ) : (
                    <Image src="/hamburger.svg" alt="Hamburger" width={22} height={22} />
                  )}
                </div>
              </div>
              <ul className="grid justify-center items-center text-center font-lato gap-y-4 mt-4">
                <li>
                  <Link href="/" className={getLinkClassName("/")}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className={getLinkClassName("/shop")}>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={getLinkClassName("/about")}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className={getLinkClassName("/contact-us")}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}

  
  {isModalOpen && (
          
            <div className="absolute right-2 mt-2 w-[90%] md:w-[50%] lg:w-[30%] bg-[#050910] rounded-lg shadow-md cursor-pointer">
              <StatusModal /> {/* Render your statusModal component */}
              <button
                onClick={toggleModal}
                className="absolute top-2 right-2 text-white/80 hover:text-white"
              >
                &times; {/* Close button */}
              </button>
            </div>
          
        )}


        {/* Main content */}
        <main>{children}</main>
      </body>
    </html>
  );
};

// ResetPasswordLayout component to be used only for reset-password page
export function ResetPasswordLayout({ children, params }) {
  const { token } = params; // Capture the token

  return React.cloneElement(children, { token });
}

export default Layout;
