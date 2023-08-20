import Link from 'next/link'
import React from 'react'

const Success = () => {
  return (
    <div className='bg-[#2a2a2198] text-[#2a2a21] backdrop-blur-sm w-full h-screen absolute top-0 left-0 z-10'>
        <div className='bg-[#FAF7F0] rounded-2xl w-[80vw] md:w-max h-max p-6 md:p-12 flex flex-col justify-center items-center my-24 mx-auto'>
            <h1 className='head_text text-center uppercase leading-10'>Thank you for your purchase!</h1>
            <p className='body_text mt-4 text-sm md:text-base opacity-90'>Please check your email for your purchase information</p>
            <Link href='/' className='body_text mt-4 opacity-50 hover:opacity-100 hover:border-b hover:border-[#2a2a21]'>back to home</Link>
        </div>
    </div>
  )
}

export default Success