import React from "react";
import Favourite from "../../public/favourite.svg";
import Avatar from "./avatar";
import Image from "next/image";


function statusModal() {
  return (
    <div className="bg-white/60">
      <div className="flex border-b[1.2px] border-white/20 pb-2">
        <Avatar /> <h1 className="text-white">Anonymous</h1>
      </div>
      <div className="flex gap-x-2"><Image src={Favourite} alt="favourite"/>
      Favourite</div>
      <div className="flex gap-x-2"><Image src={Favourite} alt="favourite"/>
      Favourite</div>
    </div>
  );
}

export default statusModal;
