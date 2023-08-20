import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative'>
        <div className='w-full'>
            <Image src='/hero.png' alt='hero-image' width={1440} height={450}/>
        </div>

        <div>
            <h1 className='head_text md:text-6xl cream absolute w-full left-0 top-1/2 flex justify-center items-center sm:mb-4'>WE MADE WHAT WE LOVE</h1>
        </div>
    </div>
  )
}

export default Hero