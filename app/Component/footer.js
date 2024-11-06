import React from "react";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "../../public/facebook.svg";
import instagramIcon from "../../public/Instagram.svg";
import twitterIcon from "../../public/Twitter.svg";
import linkedinIcon from "../../public/linkedin.svg";

function footer() {
  return (
    <div className="flex flex-col  gap-y-[48px] px-4 py-[36px] md:py-[60px] bg-[#050910]">
      <div className="flex md:grid md:gap-y-[24px] justify-between ">
      <div className="flex flex-col gap-x-[16px] md:flex-row gap-y-[16px] font-semibold font-openSans text-sm">
        <Link href="/company">Company</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/contact-us">Contact Us</Link>
        <Link href="/privacy-legal">Privacy & Legal</Link>
        <Link href="/cookie-settings">Cookie Settings</Link>
        <Link href="/newsletter">Newsletter</Link>
      </div>
      <div className="flex gap-x-[16px] justify-center md:justify-start items-end">
        <Link href="/facebook">
          <Image
            className="w-[12px] h-[25px]"
            src={facebookIcon}
            alt="facebook"
          />
        </Link>
        <Link href="/instagram">
          <Image
            className="w-[20px] h-[20px]"
            src={instagramIcon}
            alt="Instagram"
          />
        </Link>
        <Link href="/twitter">
          <Image
            className="w-[16px] h-[18px]"
            src={twitterIcon}
            alt="twitter"
          />
        </Link>
        <Link href="/linkedin">
          <Image
            className="w-[21px] h-[20px]"
            src={linkedinIcon}
            alt="linkedin"
          />
        </Link>
      </div>
   
    </div>
    <p className="text-sm md:text-base font-montserrat font-light">
        Copyright © 2024 All in Cars. All rights reserved. WARNING ABOUT ILLEGAL
        OFFERS OF ALLEGED VEHICLES FROM ALL IN CARS All in Cars has been made
        aware that several third parties across different countries are
        allegedly offering vehicles claiming to be from All in Cars. These
        offers are unlawful and do not originate from All in Cars or any of its
        affiliated entities. Please ensure all transactions are conducted
        through our official website or authorized dealers.
      </p>
    </div>
    
  );
}

export default footer;
