import React from 'react'

function teamSkeleton() {
  return (
    <div className='flex gap-y-2 flex-col rounded-xl justify-start lg:w-[20%]'>
<div className='w-full h-[120px] animate-pulse bg-gray-100 rounded-md'>
    </div>
    <div className='flex flex-col gap-y-2'>
        <div className='w-full animate-pulse h-[10px] bg-gray-50 rounded'></div> 
            <div className='w-full animate-pulse h-[10px] bg-gray-50 rounded'></div>
                 
            </div></div>
  )
}

export default teamSkeleton
