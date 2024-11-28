import React from 'react'

function hero() {
  return (
    <div className=' h-[150px] text-white bg-cover bg-center  w-full'
    style={{
        backgroundImage: `url("/favorite.png")`
    }}
    >
      <h1 className='font-russo text-center pt-16 md:text-lg lg:text-xl text-base '>Favorite</h1>
    </div>
  )
}

export default hero
