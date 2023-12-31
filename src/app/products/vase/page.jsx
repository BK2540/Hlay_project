// pages/vase.js
'use client';

import React, { useEffect, useState, useContext, useMemo } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import SingleCanvas from '@/components/SingleCanvas';
import { VaseFirst } from '@/components/Vase1';
import { VaseSecond } from '@/components/Vase2';
import { VaseThird } from '@/components/Vase3';
import { vaseData } from '@/data';
import { addProduct } from '@/redux/cartSlice';


const getModelComponent = (model) => {
  switch (model) {
    case '/vase1.glb':
      return <VaseFirst />;
    case '/vase2.glb':
      return <VaseSecond />;
    case '/vase3.glb':
      return <VaseThird />;
    default:
      return null;
  }
};

const basePrice = 750;

const Vase = React.memo(() => {

  const [openModal, setOpenModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState('price_1NghSQItIAJxXRVEqN5QT7GF');
  const [total, setTotal] = useState(basePrice);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleColorButtonClick = (color) => {
    setSelectedColor(color);
  };

  const getVaseData = vaseData;

  const selectedVase = getVaseData.find((vas) => vas.id === selectedColor);

  useEffect(()=> {
    setTotal(quantity * basePrice)
  }, [quantity]);

  useEffect(()=> {
    if (openModal) {
      const timer = setTimeout(() => {
        setOpenModal(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [openModal]);

  const handleClick = () => {
    dispatch(addProduct({...selectedVase, quantity, total}));
    setOpenModal(true);
  };
  

  return (
    <div className='flex flex-col items-center justify-center gap-10 mb-2 md:px-24 md:h-full md:py-10 md:mt-12'>
      <div className='flex flex-col items-center justify-center gap-10 md:flex-row md:h-screen'>
      <div className='w-[350px] h-[420px] md:flex-1 md:flex md:px-12 md:items-center md:justify-center'>        
          {/* <Image src='/vase1.png' alt='vase' width={350} height={420} className='object-cover'/> */}
          <SingleCanvas>
            {getModelComponent(selectedVase.model)}
          </SingleCanvas> 
      </div>
      {/* content container */}
      <motion.div 
      initial={{opacity: 0, x: 100}}
      whileInView={{opacity: 1, x: 0}}
      transition= {{ duration: 2 }}
      className='flex flex-col items-center justify-center gap-6 md:flex-1 md:flex md:py-24'>
      <h1 className='head_text uppercase'>{selectedVase.title}</h1>
      <p className='body_text p-6'>
      From the hands of an artisan flows not just clay, but a symphony of passion andwhispers of nature , shaping a ceramic vase that embodies the essence of creation. In its curves and contours, one can trace the love of artist for the world around us, a vessel born from earth yet molded by the heart.
      </p>

      <div className='flex items-center gap-6'>
      {vaseData.map((vas) => (
          <button
            key={vas.id}
            className={`w-[48px] h-[48px] rounded-full hover:scale-110 cursor-pointer`}
            style={{ background: vas.bg }}
            onClick={() => handleColorButtonClick(vas.id)}
          />
        ))}
      </div>

      <div className='w-full flex justify-center items-center py-8 gap-12'>
        <div>
            <p className='head_text'>$ {total}</p>
        </div>
        
        <div className='flex items-center justify-center gap-6 w-[183px] h-[48px] px-12 rounded-3xl border-2 border-[#2A2A21]'>
            <span className='cursor-pointer hover:scale-150' onClick={()=>setQuantity(prev=>(prev>1 ? prev-1: 1))}> - </span>
            <span className='border-x border-[#2A2A21] px-6 py-0 body_text font-bold'> {quantity} </span>
            <span className='cursor-pointer hover:scale-150' onClick={()=>setQuantity(prev=>(prev<9 ? prev+1: 9))}> + </span>
        </div>
      </div>

      <button
        className='btn hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out'
        onClick={handleClick}
      >
        Add to Cart
      </button>

      </motion.div>  

      {/* ADD SUCCESSFULL */}
      {openModal && (
        <div className='bg-[#FAF7F0] fixed top-8 py-2 px-12 rounded-3xl justify-center shadow-xl'>
        <h3 className='body_text'>Add to cart Successfully!</h3>
        <Link href='/cart' className='body_text text-sm'>Go to your cart</Link>
      </div>
      )}
      </div>
      
      {/* OTHER PRODUCT */}
 <div className='w-full flex flex-col justify-start px-6 mt-4 py-6 border-t border-[#2A2A21]'>
 <h3 className='head_text_m text-xl md:text-2xl'>other product you may like</h3>
 <div className='flex gap-6'>
 <Link href='/products/cup' className='px-6 py-8 border border-[#2A2A21] w-max h-max rounded-2xl mt-6 hover:scale-105 hover:shadow-sm cursor-pointer transition duration-700 ease-in-out'>
      <Image src='/cup1.png' alt='product' width={100} height={100} className='object-contain'/>    
 </Link>

 <Link href='/products/lamp' className='px-6 py-8 border border-[#2A2A21] w-max h-max rounded-2xl mt-6 hover:scale-105 hover:shadow-sm cursor-pointer transition duration-700 ease-in-out'>
    <Image src='/lamp1.png' alt='product' width={100} height={100} className='object-contain'/>   
 </Link>
 </div> 
</div>    
    </div>
  )
});

Vase.displayName = 'Vase';

export default Vase