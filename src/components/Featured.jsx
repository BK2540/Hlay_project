'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import FeaturedCanvas from './CupCanvas';
import { CupFirst } from './Cup1';
import { VaseFirst } from './Vase1';
import { LampFirst } from './Lamp1';
import { showcase } from '@/data';


const getModelComponent = (model) => {
  switch (model) {
    case '/cup1.glb':
      return <CupFirst />;
    case '/vase1.glb':
      return <VaseFirst />;
    case '/lamp1.glb':
      return <LampFirst />;
    default:
      return null;
  }
};


const Featured = React.memo(() => {

  return (
    <div id='featured' className='my-24 flex flex-col px-6 md:px-24 md:border-b-2 md:border-[#2A2A21] md:my-24'>
      <h2 className='head_text uppercase'>Our products</h2>
      {/* PRODUCT CONTAINER */}
      <div className='md:flex md:flex-row md:justify-between md:items-center md:mb-10 z-1'>
      {showcase.map((cat) => (
          <motion.div
          initial={{ opacity: 0, translateY: 100}}
          whileInView={{opacity:1, translateY: 0}}
          
          className='flex flex-col justify-center items-center py-16 relative overflow-hidden hover:scale-105 transition delay-700 duration-300 ease-in-out' key={cat.id}>
            <div className='z-0 pb-6 border-2 border-[#2A2A21] rounded-3xl w-[250px] h-[350px] flex items-end justify-center'>
            <FeaturedCanvas>
                {getModelComponent(cat.model)}
              </FeaturedCanvas>
            </div>
            <p className='head_text bg-[#FAF7F0] px-2 uppercase absolute top-8 md:top-10'>{cat.title}</p>
            <Link 
              href={`/products/${cat.slug}`} 
              className='btn absolute bottom-6 md:bottom-10 hover:bg-[#1b1b15]'
            > 
              shop now
            </Link>
          </motion.div>
        ))}
      </div>

      
    </div>
  );
});

Featured.displayName = 'Featured';

export default Featured;
