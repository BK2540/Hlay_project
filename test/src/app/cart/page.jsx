'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { removeProduct } from '@/redux/cartSlice';
import { setSelectedShipping } from '@/redux/cartSlice';


const Cart = () => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
 
  const [selectedShippingOption, setSelectedShippingOption] = useState(cart.selectedShipping);

  useEffect(() => {
    dispatch(setSelectedShipping(selectedShippingOption));
  }, [selectedShippingOption, dispatch]);

  const shippingCost = selectedShippingOption === 'standard' ? 15 : selectedShippingOption === 'priority' ? 20 : 0;
  

  const amountPrice = cart.products.reduce((acc, product) => acc + product.quantity * product.price, 0);
  const totalAmount = amountPrice + shippingCost;

  const handleRemove = (product) => {
    dispatch(removeProduct(product));
  };

  return (
    <div className='h-max flex flex-col px-6 md:px-24 mt-10 py-0 mb-0'>
      <h1 className='head_text uppercase'>your cart</h1>
        
        {cart.products.length === 0 
        ? (
          <div className='w-full h-full flex items-center justify-center px-6 mb-2 border-b-2 border-[#2a2a2138]'>
          
          <h2 className='head_text text-center uppercase py-12'>Your Cart is Empty</h2>
          
          </div>         
        ) 
        : (
        <div className='body_text flex flex-col justify-center items-center mt-6'> 
        <div className='w-full flex py-2 mt-6 items-center justify-between border-y-2 border-[#2a2a21]'>
          <span className='uppercase text-sm md:text-base'>product</span>
          <span className='hidden md:block uppercase text-sm md:text-base'>product name</span>
          <span className='uppercase text-sm md:text-base'>quantity</span>
          <span className='hidden md:block uppercase text-sm md:text-base'>price/each</span>
          <span className='uppercase text-sm md:text-base'>subtotal</span>
          <span className='uppercase text-sm md:text-base'>remove</span>
        </div>
       {cart.products.map((product) => (
          <div key={product.id} className='w-full py-4 flex items-center justify-between mb-2 border-b-2 border-[#2a2a2138]'>
          <Image src={product.image} alt='product' width={72} height={72} className='object-cover' />
          <h2 className='hidden upppercase text-base md:text-xl md:block'>{product.title}</h2>
          <h2 className='text-base md:text-xl'>{product.quantity}</h2>
          <h2 className='hidden md:block text-base md:text-xl'>$ {product.price}</h2>
          <h2 className='text-base md:text-xl'>$ {product.price * product.quantity}</h2>
          <button 
          className='px-2 cursor-pointer opacity-50 hover:scale-105 hover:opacity-100' 
          onClick={() =>handleRemove(product)}
          >
            X
          </button>
        </div>  
        ))}         
        </div>
        )}
        <div className='h-max'>
              {/* SHIPPING */}
              <div className='flex justify-start items-start gap-6 mt-6 body_text' >
                <h2 className='mr-14 md:text-xl'>Shipping</h2>
                <div className='flex flex-col w-full gap-6'>
                  <div className='flex md:flex-row items-center justify-end px-0 md:px-2 gap-1 md:gap-4'>
                    <input 
                      type="checkbox" 
                      name="shipping" 
                      id="standard"
                      checked={selectedShippingOption === 'standard'}
                      onChange={() => {
                        setSelectedShippingOption('standard');
                      }}
                    />
                    <label htmlFor="standard" className='text-sm md:text-base'>Standard Shipping</label> 
                    <p className='text-sm ml-4 md:ml-12 flex md:text-base'>$ 15</p>                                          
                  </div> 
                  <div className='flex md:flex-row items-center justify-end px-0 md:px-2 gap-1 md:gap-4'>
                    <input 
                      type="checkbox" 
                      name="shipping" 
                      id="priority"
                      checked={selectedShippingOption === 'priority'}
                      onChange={() => {
                        setSelectedShippingOption('priority');
                      }}
                    />
                    <label htmlFor="priority" className='text-sm md:text-base'>Priority Shipping</label> 
                    <p className='text-sm ml-4 md:ml-12 flex md:text-base'>$ 20</p>                                          
                  </div> 
                  </div>                
              </div>
            {/* TOTAL */}
            <div className='flex w-full justify-between items-end py-12'>
              <h2 className='head_text text-base md:text-lg'>Total</h2>
              <span className='body_text text-2xl'>$ {totalAmount}</span>
            </div>
            <div className='bg-[#2A2A21] h-[1px]'/>
            <div className='w-full flex flex-col justify-center items-end mt-12 gap-6 md:mb-12'>
              <Link href='/checkout/shipping' className='btn hover:shadow-md hover:scale-105'>Check Out</Link>
              <Link href='/' className='body_text px-2 cursor-pointer hover:border-b hover:border-[#2A2A21]'>Continue Shopping</Link>
            </div>
            
            
        </div>

        
      </div>
      
  )
}

export default Cart