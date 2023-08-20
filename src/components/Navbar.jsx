'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux';

import MobileMenu from './Menu'
import tab from '../../public/cart.png'

const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity)
   

  return (
    <div className='flex flex-row justify-between items-center p-6 border-b-2 border-[#2A2A21] md:px-24'>
        {/* LOGO */}
        <div className='md:flex-1 flex'>
            <Link href='/' className='head_text uppercase'>hlay</Link>
        </div>

        {/* MOBILE TAB */}
        <div className='md:hidden'>
            <MobileMenu/>
        </div>

        {/* RIGHT NAVBAR */}
        <div className='hidden font-head text-brown text-xl gap-8 w-full md:flex-1 md:flex items-center md:justify-end cursor-pointer'>
            <Link href='#featured' className='hover:border-b-2 hover:border-[#2A2A21]'>Our Products</Link>
            <Link href='#about' className='hover:border-b-2 hover:border-[#2A2A21]'>About Us</Link>
            <Link href='/cart' className='md:flex gap-2 relative hover:scale-[1.1]'>
                <Image src={tab} alt='cart' width={32} height={32}/>
                <span className='absolute bottom-5 left-6 text-sm text-bolder font-body bg-[#2A2A21] text-[#FAF7F0] px-2 rounded-full'>{quantity}</span>
            </Link>
            
        </div>
    </div>
  )
}

export default Navbar