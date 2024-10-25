import React from 'react';
import Image from 'next/image';
import  Mercedes from '../../../public/Mercedes-Benz.svg'
import  Bugatti from '../../../public/Bugatti.svg'
import  Honda from '../../../public/Honda.svg'
import  Ford from '../../../public/Ford.svg'
import  Lexus from '../../../public/Lexus.svg'
import  Ferrari from '../../../public/Ferrari.svg'
import  Audi from '../../../public/Audi.svg'

function thirdSection() {
  return (
    <div>
      <span className='bg-[#030508] flex justify-around py-[40px] px-[40px]'>
        <div className='flex flex-col w-[76px] h-[72px] items-center px-[10px] pt-[4px] pb-[6px] justify-center gap-y-[4px] bg-white/10 rounded-[10px]'>
            <Image src={Mercedes} alt='Mercedes Benz' />
            <h1 className='font-montserrat text-center text-white text-[10px] font-medium'>Mercedes</h1>
        </div>

        <div className='flex flex-col  w-[76px] h-[72px] items-center px-[10px] pt-[4px] pb-[6px] justify-center gap-y-[4px] bg-white/10 rounded-[10px]'>
            <Image src={Bugatti} alt='Bugatti' />
            <h1 className='font-montserrat text-center text-white text-[10px] font-medium'>Bugatti</h1>
        </div>

        <div className='flex flex-col  w-[76px] h-[72px] items-center px-[10px] pt-[4px] pb-[6px] justify-center gap-y-[4px] bg-white/10 rounded-[10px]'>
            <Image src={Honda} alt='Honda' />
            <h1 className='font-montserrat text-center text-white text-[10px] font-medium'>Honda</h1>
        </div>

        <div className='flex flex-col  w-[76px] h-[72px] items-center px-[10px] pt-[4px] pb-[6px] justify-center gap-y-[4px] bg-white/10 rounded-[10px]'>
            <Image src={Ford} alt='Ford' />
            <h1 className='font-montserrat text-center text-white text-[10px] font-medium'>Ford</h1>
        </div>

        <div className='flex flex-col  w-[76px] h-[72px] items-center px-[10px] pt-[4px] pb-[6px] justify-center gap-y-[4px] bg-white/10 rounded-[10px]'>
            <Image src={Lexus} alt='Lexus' />
            <h1 className='font-montserrat text-center text-white text-[10px] font-medium'>Lexus</h1>
        </div>

        <div className='flex flex-col  w-[76px] h-[72px] items-center px-[10px] pt-[4px] pb-[6px] justify-center gap-y-[4px] bg-white/10 rounded-[10px]'>
            <Image src={Ferrari} alt='Ferarri' />
            <h1 className='font-montserrat text-center text-white text-[10px] font-medium'>Ferrari</h1>
        </div>

        <div className='flex flex-col  w-[76px] h-[72px] items-center px-[10px] pt-[4px] pb-[6px] justify-center gap-y-[4px] bg-white/10 rounded-[10px]'>
            <Image src={Audi} alt='Audi' />
            <h1 className='font-montserrat text-center text-white text-[10px] font-medium'>Audi</h1>
        </div>
      </span>
    </div>
  )
}

export default thirdSection
