'use client';

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

const About = () => {

  const transition = {type:"spring", duration:"3"};

  return (
    <div id='about' className='w-full h-screen flex flex-col md:flex-row md:flex-1 md:mb-10'>
      
      <motion.div
        initial={{opacity: 0, x: -200}}
        whileInView={{opacity:1, x:0}}
        transition={transition}
      >
        <Image src='/about.png' alt='about' fill className='object-cover'/>
      </motion.div>
      {/* text container */}
      <motion.div
        initial={{opacity: 0, y: 200}}
        whileInView={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: -200}}
        transition={transition}

      className='px-8 py-10 flex flex-col gap-12 md:flex-1 md:py-0 md:justify-center md:items-center md:px-24'>
        <h3 className='head_text'>About us</h3>
        <span className='body_text text-md md:text-lg md:leading-10'>
          Welcome to our world of handmade ceramics, where a small business born of passion and an unyielding pottery obsession has flourished. Embrace the beauty of imperfection and join us in preserving the tradition of authentic, handcrafted art.
        </span>
      </motion.div>
      
    </div>
  )
}

export default About