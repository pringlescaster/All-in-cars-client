import React from "react";
import Favourite from "../../public/fav.svg";
import logout from "../../public/logout.svg";
import Avatar from "./avatar";
import Image from "next/image";
import { useAuthStore } from "../store/authStore";


function statusModal() {

const { user} = useAuthStore()

  return (
    <div className="bg-white/10  px-6 py-4 border-white/10 rounded-lg border-[0.4px]">
      <div className="flex border-b[1.2px] gap-x-[8px] border-white/20 pb-2">
        <Avatar size={10} name={user.name}  /> 
        <div> <h1 className="text-white text-sm font-semibold font-openSans">{user.name}</h1>
        <h1 className="text-white/70 font-normal text-sm font-openSans">{user.email}</h1></div>
       
      
      </div>

      <div className="flex flex-col gap-y-2 mt-6">
      <div className="flex items-center gap-x-2 cursor-pointer"><Image width={16} src={Favourite} alt="favourite"/>
      <h1 className="text-base text-white font-openSans ">Favourite</h1></div>

      <div className="flex items-center gap-x-2 cursor-pointer"><Image width={14} src={logout} alt="favourite"/>
      <h1 className="text-base text-white font-openSans ">Log Out</h1></div>
      </div>
    
      
    </div>
  );
}

export default statusModal;
