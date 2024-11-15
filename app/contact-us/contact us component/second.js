import React from "react";
import Image from "next/image";
import Call from "../../../public/call.svg"
import Whatsapp from "../../../public/whatsappIc.svg"
import Email from "../../../public/Emaill.svg"
import Location from "../../../public/Location.svg"

function second() {
  return (
    <div className="bg-[#030508] px-[14px] py-[64px] grid md:grid-cols-2 md:gap-x-[24px] lg:gap-x-[100px] lg:px-[140px] ">
      <form className="bg-white/10 grid gap-y-[22px] pt-8 pb-10 px-4 rounded-[10px]">
        <h1 className="text-[#F7F7F7] text-lg font-montserrat font-semibold lg:text-2xl">
          Get In Touch
        </h1>

        <div className="grid gap-y-[20px]">
          <div className="grid gap-y-[8px]">
            <h1 className="font-openSans text-[#b8b8b8] text-sm">Name</h1>
            <input
              className="outline-none text-sm placeholder:text-white/80 rounded-[10px] px-[8px] py-[10px] bg-[#595959]"
              type="text"
              placeholder="Enter Your Name"
            />
          </div>

          <div className="grid gap-y-[8px]">
            <h1 className="font-openSans text-[#b8b8b8] text-sm">Email</h1>
            <input
              className="outline-none text-sm placeholder:text-white/80 rounded-[10px] px-[8px] py-[10px] bg-[#595959]"
              type="email"
              placeholder="Enter Your Email"
            />
          </div>

          <div className="grid gap-y-[8px]">
            <h1 className="font-openSans text-[#b8b8b8] text-sm">Subject</h1>
            <input
              className="outline-none text-sm placeholder:text-white/80 rounded-[10px] px-[8px] py-[10px] bg-[#595959]"
              type="text"
              placeholder="Title"
            />
          </div>

          <div className="grid gap-y-[8px]">
            <h1 className="font-openSans text-[#b8b8b8] text-sm">Message</h1>
            <textarea
              className="outline-none text-sm placeholder:text-white/80 rounded-[10px] px-[8px] py-[10px] bg-[#595959]"
              type="text"
              placeholder="Title"
              rows={4}
              cols={50}
            />
          </div>
        </div>
        <button className="bg-[#FCA311] text-[#151515] py-[10px] rounded-[10px] font-openSans font-semibold mt-4">
          Send Now
        </button>
      </form>
      <div className="flex gap-y-[24px] lg:gap-y-[48px] flex-col justify-center items-start">
        <p className="font-montserrat text-base  text-center md:text-left text-white/80">Have questions or need assistance? Our dedicated team is here to help with any inquiries or support you may need. Reach out to us via phone, email, or our online contact form, and we'll get back to you promptly to ensure your experience with "All In Cars" is exceptional.</p>
        <div className="flex mt-4 flex-wrap gap-y-[24px] gap-x-[24px] lg:gap-x-[60px] lg:gap-y-[40px] justify-start">
            <div className="grid gap-y-2 justify-center items-center">
                <Image className="mx-auto w-[24px]" src={Call} alt="call" />
                <div className="grid gap-y-[2px]">
                    <h1 className=" font-montserrat font-medium text-xs  md:text-sm text-center">Phone Number</h1>
                    <p className=" font-montserrat font-medium text-sm md:text-base text-center">+234 814 493 6800</p>
                </div>
            </div>

            {/* <div className="grid gap-y-2 justify-center items-center">
                <Image className="mx-auto w-[24px] lg:w-[30px]" src={Whatsapp} alt="call" />
                <div className="grid gap-y-[2px]">
                    <h1 className=" font-montserrat font-medium text-xs  md:text-sm text-center">Whatsapp Number</h1>
                    <p className=" font-montserrat font-medium text-sm md:text-base text-center">+234 814 493 6800</p>
                </div>
            </div> */}

            <div className="grid gap-y-2 justify-center items-center">
                <Image className="mx-auto w-[24px]" src={Email} alt="call" />
                <div className="grid gap-y-[2px]">
                    <h1 className=" font-montserrat font-medium text-xs  md:text-sm text-center">Email</h1>
                    <p className=" font-montserrat font-medium text-sm md:text-base text-center">allincars@gmail.com</p>
                </div>
            </div>

            <div className="grid gap-y-2 justify-center items-center">
                <Image className="mx-auto w-[24px]" src={Location} alt="call" />
                <div className="grid gap-y-[2px]">
                    <h1 className=" font-montserrat font-medium text-xs  md:text-sm text-center">Location</h1>
                    <p className=" font-montserrat font-medium text-sm md:text-base text-center">Jeddah, Saudi Arabia</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default second;
