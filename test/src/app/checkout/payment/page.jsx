'use client';

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { reset } from '@/redux/cartSlice';
import { useRouter } from 'next/navigation';
import Success from '@/components/Success';


const PaymentPage = () => {

  const cart = useSelector((state) => state.cart);
  const selectedShipping = useSelector((state) => state.cart.selectedShipping);
  const dispatch = useDispatch();
  const router = useRouter();
  const [openSuccess, setOpenSuccess] = useState(false);
  
  const handleComfirm = () => {
    dispatch(reset());
    setOpenSuccess(true);
  }

  const shippingCost = selectedShipping === 'standard' ? 15 : selectedShipping === 'priority' ? 20 : 0;

  // Calculate the total price of the items in the cart
  const cartTotal = cart.products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className='flex h-full body_text py-0 '>
      {/* LEFT SIDE */}
      <div className='flex flex-col flex-auto w-2/3 px-24 pt-12 h-full'>
        <div className='flex justify-between items-center'>
          <span className='text-sm px-2'>Shipping</span>
          <span className='text-sm px-2'>Payment</span>
        </div>
        
        <div className='flex justify-between items-center px-8'>
          <div className='rounded-full bg-transparent w-4 h-4 border border-[#2A2A21]'/>
          <hr className='h-0.5 w-full bg-[#2A2A21] opacity-80'/>
          <div className='rounded-full w-4 h-4 bg-[#2A2A21]'/>
        </div>

        {/* FORM */}
      <form className='py-8 flex flex-col justify-center items-start gap-8'>
        <h1 className='head_text_m text-xl my-6'>Payment Information</h1>
        <div className='flex flex-col gap-6 w-full'>
          <h3 className='head_text_m'>Name on Card</h3>
        <input 
          required
          type="text" 
          placeholder='Name - Lastname' 
          className='bg-transparent border-b border-[#2A2A21] w-full'
        />
        </div>

        <div className='flex flex-col gap-6 w-full'>
          <h3 className='head_text_m'>Card Number</h3>
        <input 
          required
          type="text" 
          placeholder='1111 - 2222 - 3333 - 4444' 
          className='bg-transparent border-b border-[#2A2A21] w-full'
        />
        </div>

        <div className='flex flex-col md:flex-row justify-between w-full gap-6 md:gap-1'>        
        <div className='flex flex-col gap-6 w-full'>
          <h3 className='head_text_m'>Expiration Date</h3>
          <div className='flex gap-4'>
            <input
              required 
              type="text" 
              placeholder='mm' 
              className='bg-transparent border-b border-[#2A2A21] w-[60px]'
            />
            <span>/</span>
            <input 
              required
              type="text" 
              placeholder='yy' 
              className='bg-transparent border-b border-[#2A2A21] w-[60px]'
            />
          </div>        
        </div>
        <div className='flex flex-col gap-6 w-full'>
          <h3 className='head_text_m'>CVV</h3>
          <div className='flex gap-4'>
            <input 
              required
              type="password" 
              placeholder='cvv' 
              className='bg-transparent border-b border-[#2A2A21] w-[60px]'
            />
        </div>
        </div>
        </div>

        
        
      </form>
        <button onClick={handleComfirm} className='mt-2 md:hidden bg-[#2A2A21] rounded-3xl px-12 uppercase head_text_m text-[#FAF7F0] py-4 hover:shadow-lg cursor-pointer hover:scale-105'>Confirm</button>      
      </div>    

      {/* RIGHT SIDE */}
      <div className='bg-[#E0CEB5] hidden md:flex flex-col justify-start flex-auto w-1/3 px-24 h-screen'>
        <h2 className='head_text text-center py-8'>Summary</h2>
        {/* PRODUCT INFO */}
        <div className='h-[30vh] overflow-y-auto'>
        {cart.products.map((product) => (
            <div
              key={product.id}
              className='flex justify-between py-6 border-b border-[#2A2A21] w-full gap-8'
            >
              <Image src={product.image} alt='product' width={48} height={48} className='object-cover' />
              <div className='flex flex-col gap-4'>
                <h6 className='text-lg'>{product.title}</h6>
                <div className='flex gap-4 text-sm'>
                  <p>Qty: {product.quantity}</p>
                  <p>${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div> 

        {/* PRICE CONCLUSION */}
        <div className='flex flex-col'>
          <div className='flex justify-between items-center'>
            <p>Subtotal</p>
            <p className='text-sm'>${cartTotal.toFixed(2)}</p>
          </div>
          <div className='flex justify-between items-center'>
            <p>Shipping</p>
            <p className='text-sm'>${shippingCost}</p>
          </div>
          <div className='flex justify-between items-center border-y-2 border-[#2A2A21] py-2'>
            <p className='text-xl text-bold'>Total</p>
            <p className='text-2xl text-bolder'>${(cartTotal + shippingCost).toFixed(2)}</p>
          </div>
        </div>

        <div className='flex flex-col w-full justify-center items-center py-6 gap-6'>
          
            <button onClick={handleComfirm} className='bg-[#2A2A21] rounded-3xl px-12 uppercase head_text_m text-[#FAF7F0] py-4 hover:shadow-lg cursor-pointer hover:scale-105'>Confirm</button>
                
          <Link href='/cart'>
          <button className='hover:scale-105 hover:border-b hover:border-[#2A2A21]'>Edit Cart</button>
          </Link>
          
        </div>
      </div>

          {openSuccess && (
            <div>
              <Success/>
            </div>
          )}    
    </div>
  )
}

export default PaymentPage