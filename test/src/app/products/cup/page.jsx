// pages/cup.js
'use client';

import React, { useEffect, useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { cupData } from '@/data';
import { CupFirst } from '@/components/Cup1';
import { CupTwo } from '@/components/Cup2';
import { CupThree } from '@/components/Cup3';
import SingleCanvas from '@/components/SingleCanvas';
import { addProduct } from '@/redux/cartSlice';
import { duration } from '@mui/material';


const getModelComponent = (model) => {
  switch (model) {
    case '/cup1.glb':
      return <CupFirst />;
    case '/cup2.glb':
      return <CupTwo />;
    case '/cup3.glb':
      return <CupThree />;
    default:
      return null;
  }
};
const basePrice = 250;


const CupPage = React.memo(() => {  
  
  const [openModal, setOpenModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState('price_1NghO1ItIAJxXRVEM1rL2Ieg');
  const [total, setTotal] = useState(basePrice);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch(); 

  const handleColorButtonClick = (color) => {
    setSelectedColor(color);
  };

  const getCupData = cupData;

  const selectedCup = getCupData.find((cup) => cup.id === selectedColor);

  useEffect(()=> {
    setTotal(quantity * basePrice)
  }, [quantity, basePrice]);

  useEffect(()=> {
    if (openModal) {
      const timer = setTimeout(() => {
        setOpenModal(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [openModal]);

  const handleClick = () => {
    dispatch(addProduct({...selectedCup, quantity, total}))
    setOpenModal(true);
  };

  return (
    <div className='flex flex-col items-center justify-center gap-10 mb-2 md:px-24 md:h-full md:py-10 md:mt-12'>
      <div className='flex flex-col items-center justify-center gap-10 md:flex-row md:h-screen'>
      <div className='w-full h-screen cursor-pointer flex items-center justify-center md:flex-1 md:flex md:px-4 md:items-center md:justify-center'> 
        <SingleCanvas>
          {getModelComponent(selectedCup.model)}
        </SingleCanvas>      
      </div>      
      
      {/* content container */}
      <motion.div 
      initial={{opacity: 0, x: 100}}
      whileInView={{opacity: 1, x: 0}}
      transition= {{ duration: 2 }}

      className='flex flex-col items-center justify-center gap-6 md:flex-1 md:flex md:py-24'>
      <h1 className='head_text uppercase'>{selectedCup.title}</h1>
      <span className='body_text p-6'>
      Crafted with hands that echo the touch of nature's elegance, each hand-shaped ceramic cup encapsulates a labor of passion, transforming raw earth into a vessel that cradles warmth. In the dance between artisan and clay, the cup becomes an ode to the artistry of the natural world.
      </span>

      <div className='flex items-center gap-6'>
      {cupData.map((cup) => (
          <button
            key={cup.id}
            className={`w-[48px] h-[48px] rounded-full hover:scale-110 cursor-pointer`}
            style={{ background: cup.bg }}
            onClick={() => handleColorButtonClick(cup.id)}
          />
        ))}
      </div>
        {/* QUANTITY, PRICE, AND ADD TO CART */}

      <div className='w-full flex justify-center items-center py-8 gap-12'>
        {/* PRICE */}
        <div>
            <p className='head_text'>$ {total}</p>
        </div>
        {/* QUANTITY */}
        <div className='flex items-center justify-center gap-6 w-[183px] h-[48px] px-12 rounded-3xl border-2 border-[#2A2A21]'>
            <span className='cursor-pointer hover:scale-150'  onClick={()=>setQuantity(prev=>(prev>1 ? prev-1: 1))}> - </span>
            <span className='border-x border-[#2A2A21] px-6 py-0 body_text font-bold'> {quantity} </span>
            <span className='cursor-pointer hover:scale-150'  onClick={()=>setQuantity(prev=>(prev<9 ? prev+1: 9))}> + </span>
        </div>
      </div>

      <button
        className='btn hover:shadow-lg hover:scale-105 transition duration-700 ease-in-out'
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
 <Link href='/products/vase' className='px-6 py-8 border border-[#2A2A21] w-max h-max rounded-2xl mt-6 hover:scale-105 hover:shadow-sm cursor-pointer transition duration-700 ease-in-out'>   
     <Image src='/vase1.png' alt='product' width={100} height={100} className='object-contain'/>   
 </Link>

 <Link href='/products/lamp' className='px-6 py-8 border border-[#2A2A21] w-max h-max rounded-2xl mt-6 hover:scale-105 hover:shadow-sm cursor-pointer transition duration-700 ease-in-out'>   
     <Image src='/lamp1.png' alt='product' width={100} height={100} className='object-contain'/>
 </Link>
 </div> 
</div>    

      
    </div>
  );
});

export default CupPage;