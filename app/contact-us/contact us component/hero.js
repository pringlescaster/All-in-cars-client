import React from 'react'

function hero() {
  return (
    <div className=' h-[150px] bg-cover bg-center text-white  w-full'
    style={{
        backgroundImage: `url("/ContactUs.png")`
    }}
    >
      <h1 className='font-russo text-center pt-16 md:text-lg lg:text-xl text-base text-white '>Contact Us</h1>
    </div>
  )
}

export default hero
