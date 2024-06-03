import { Rss, Subscript } from 'lucide-react';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { LoginStatusContext } from '../context/LoginStatusContext';
import axios from 'axios';
import { DetailsContext } from '../context/DetailsContext';
import { CartItems } from '../context/CartItems';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import CartItemList from '../Main/CartItemList';


const Header = () => {

    const { loggedIn, setLoggedIn } = useContext(LoginStatusContext);
    const { userProfile, setUserProfile } = useContext(DetailsContext);
    const { updateCart, setUpdateCart } = useContext(CartItems);

    const [total,setTotal] = useState(0);

    useEffect(() => {
        const getData = async () => {
            try{

            
            const response = await axios.get('https://dealscart.onrender.com/users/details',{
                withCredentials : true
            });
            setUserProfile(response.data);
        }catch(e){
            console.log(e);
        }
        };
        if (loggedIn) {
            getData();
        }
    }, [loggedIn, updateCart]);

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
                {loggedIn === true ?
                    <Sheet>
                        <SheetTrigger><div className='flex cursor-pointer items-center rounded-full p-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <h2 className='text-xl text-white bg-green-400 rounded-xl pl-1 pr-1'>
                                {userProfile == undefined ? 0 : userProfile.cart.length}
                            </h2></div> </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className='text-2xl w-full p-2 text-center bg-green-800 text-white font-semibold rounded-xl'>My Cart</SheetTitle>
                                <SheetDescription>
                                    <CartItemList></CartItemList>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                    : <>
                        <button className='text-white border rounded-full pt-2 pb-2 pl-4 pr-4 bg-green-400'><Link href={'/authentication/login'}>Login</Link></button>
                        <button className='text-white border rounded-full pt-2 pb-2 pl-4 pr-4 bg-green-400'><Link href={'/authentication/signup'}>Signup</Link></button>
                    </>
                }

            </div>
        </div>
    );
};

export default Header