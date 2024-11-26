import React from 'react'
import aboutImage from "../../../public/aboutUsbg.png"


function firstSection() {
  return (
    <div className=' h-[150px] bg-cover bg-center  w-full'
    style={{
        backgroundImage: `url("/aboutUsbg.png")`
    }}
    >
      <h1 className='font-russo text-center pt-16 md:text-lg lg:text-xl text-base text-white '>About Us</h1>
    </div>
  )
}

export default firstSection
