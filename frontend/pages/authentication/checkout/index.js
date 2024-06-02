import Header from '@/components/Header/Header';
import { LoginStatusContext } from '@/components/context/LoginStatusContext';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'

const Checkout = () => {

    const [subtotal,setSubtotal] = useState(0); 
    const [total,setTotal] = useState(0);
    const router = useRouter();
    const {loggedIn,setLoggedIn} = useContext(LoginStatusContext);
    useEffect(() => {
        if(!loggedIn){
            router.push('/');
            return;
        };
        const getSubTotal = async () => {
            const response = await axios.get('http://localhost:3000/users/details');
            if(response.data.cart.length > 0){
                console.log(response.data.cart);
                let localTotal = 0;
                response.data.cart.forEach((item) => {
                 localTotal = localTotal + (item.quantity * item.price);
                });
                setSubtotal(localTotal);
                setTotal(localTotal+(localTotal*0.9)+15);
            }
        };
        getSubTotal();
    }, []);
  return (
    <>
        <Header></Header>
        <h1 className='p-3 bg-green-800 text-white text-center text-3xl font-extrabold'>Checkout</h1>
        <div className='grid grid-cols-12'>
            <div className='col-span-12 md:col-span-8'>
                <div className="p-4 md:m-5 grid grid-cols-12">
                    <h2 className='col-span-12 text-black font-extrabold text-2xl p-4 text-center md:text-left'>Billing Details</h2>
                    <div className='col-span-12 flex p-4'>
                        <input placeholder='Name' type='text' className='rounded-lg p-2 mr-2 w-full border border-slate-500'></input>
                        <input placeholder='Email' type='email' className='rounded-lg p-2  w-full border border-slate-500'></input>
                    </div>
                    <div className='col-span-12 flex p-4'>
                        <input placeholder='Phone' type='text' className='rounded-lg p-2 mr-2 w-full border border-slate-500'></input>
                        <input placeholder='Zip' type='text' className='rounded-lg p-2  w-full border border-slate-500'></input>
                    </div>
                    <div className='col-span-12 flex p-4'>
                        <input placeholder='Address' type='text' className='rounded-lg p-2 w-full border border-slate-500'></input>
                    </div>
                </div>
            </div>
            <div className='col-span-12 md:col-span-4'>
                <div className='p-4 md:m-5 border border-slate-200'>
                    <h1 className='bg-gray-200 font-extrabold p-4 text-center text-2xl'>Total Cart ₹{total.toFixed(2)}</h1>
                    <div className='flex flex-col gap-4 p-2'>
                        <div className='flex justify-between font-extrabold'>Subtotal : <span>₹{subtotal.toFixed(2)}</span></div>
                        <hr></hr>
                        <div className='flex justify-between font-semibold'>Tax(9%) : <span>₹{(subtotal*0.9).toFixed(2)}</span></div>
                        <div className='flex justify-between font-semibold'>Delivery : <span>₹15.00</span></div>
                        <hr></hr>
                        <div className='flex justify-between font-extrabold'>Total : <span>₹{total.toFixed(2)}</span></div>
                        <hr></hr>
                        <button className='bg-green-800 rounded-lg text-white font-bold p-2'>Pay</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Checkout;