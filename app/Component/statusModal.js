import React from "react";
import Favourite from "../../public/fav.svg";
import Logout from "../../public/logout.svg";
import Avatar from "./avatar";
import Image from "next/image";
import { useAuthStore } from "../store/authStore";
import Link from "next/link";
import ProtectedRoute from "../hooks/protectedRoute";

function statusModal() {
  const { user, logout } = useAuthStore();

  const handleLogout = async () => {
    try {
      await logout();
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    
    <div className="bg-white/10  px-6 py-4 border-white/10 rounded-lg border-[0.4px] cursor-default">
      <div className="flex border-b[1.2px] gap-x-[8px] border-white/20 pb-2">
        <Avatar size={10} name={user?.name || "Guest"} />
        <div>
          {" "}
          <h1 className="text-white text-sm font-semibold font-openSans">
            {user?.name || "Guest"}
          </h1>
          <h1 className="text-white/70 font-normal text-sm font-openSans">
            {user?.email || "guest@example.com"}
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 mt-6">
        <Link href="/favorite">
          <div className="flex items-center gap-x-2 cursor-pointer"
          >
            <Image width={16} src={Favourite} alt="favourite" />
            <h1 className="text-base text-white font-openSans ">Favorite</h1>
          </div>
        </Link>
        <div className="flex items-center gap-x-2 cursor-pointer" onClick={handleLogout}>
          <Image width={14} src={Logout} alt="logout" />
          <h1 className="text-base text-white font-openSans ">Log Out</h1>
        </div>
      </div>
    </div>
    
  );
}

export default statusModal;
