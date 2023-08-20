'use client';

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

//data in the mobile menu
const  links = [
    { id:1, title: "Home", href: "/"},
    { id:2, title: "Our Products", href: "#featured"},
    { id:3, title: "About Us", href: "#about"},
    { id:4, title: "Cart", href: "/cart"},
];

const MobileMenu = () => {

    const [opened, setOpened] = useState(false);

  return (
    <>
    <div className='transition duration-600 ease-in-out'>
        <div className='cursor-pointer h-[48px] flex items-center relative transition duration-600 ease-in-out'>
        {!opened ? (
            <Image src="/tab.png" alt='menu-tab' width={24} height={24} onClick={()=>setOpened(true)}/>
        ) : (
            <Image src="/close.png" alt='menu-tab' width={24} height={24} onClick={()=>setOpened(false)}/>
        )}
        </div>      
    </div>
    {/* MENU CONTAINER */}
    {opened && (    
    <div className='bg-[#FAF7F0] z-10 head_text text-[#2A2A21] absolute w-full h-screen left-0 top-24 flex flex-col p-8 justify-center items-center text-3xl gap-12 tracking-wider uppercase transition duration-600 ease-in-out overscroll-none'>        
        {links.map(item=>(
            <Link href={item.href} key={item.id} onClick={()=> setOpened(false)}>{item.title}</Link>
        ))}
    </div>  
    )}
    </>  
  )
}

export default MobileMenu