import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-full mt-72 md:mt-0 border-t-2 border-[#2A2A21] px-6 md:px-24 py-8 flex justify-between items-center'>
        {/* LOGO */}
        <h1 className='head_text uppercase'>hlay</h1>

        {/* socila container */}
        <div className='flex justify-between items-center gap-4'>
          <Image src='/instagram.png' alt='ig' width={26} height={26} className='object-cover'/>
          <Image src='/facebook.png' alt='facebook' width={26} height={26} className='object-cover'/>
          <Image src='/pinterest.png' alt='pinterest' width={28} height={28} className='object-cover'/>
          <Image src='/googlePlus.png' alt='googlePlus' width={30} height={30} className='object-cover'/>
        </div>
    </div>
  )
}

export default Footer