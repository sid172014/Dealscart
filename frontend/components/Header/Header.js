import Link from 'next/link';
import React from 'react'

const Header = () => {
    return (
        <div className='flex items-center justify-between p-6 shadow-lg'>
            <div className='flex gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                <h1 className='text-2xl'>Deals<span className='text-green-700'>Cart</span></h1>
            </div>
            <div>
                <div className='md:flex hidden items-center justify-center p-2 bg-white rounded-full gap-1 border'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type='text' className='text-black bg-white outline-none' placeholder='Search for Item'></input>
                </div>
            </div>
            <div className='flex gap-4 '>
                <button className='text-white border rounded-full pt-2 pb-2 pl-4 pr-4 bg-green-400'>Login</button>
                <button className='text-white border rounded-full pt-2 pb-2 pl-4 pr-4 bg-green-400'><Link href={'/authentication/signup'}>Signup</Link></button>
            </div>
        </div>
    );
};

export default Header