import Link from 'next/link';
import React, { useState } from 'react'
import axios from 'axios';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

// In order to use and set cookies for authentication we have to use this
axios.defaults.withCredentials = true;

const Signup = () => {

  const [userInfo,setUserInfo] = useState({
    username : "",
    email : "",
    password : ""
  });

  const handleUserInfoChange = (e) => {
    e.preventDefault();
    setUserInfo((prev) => {
      const newObject  = {...prev,[e.target.name] : e.target.value};
      return newObject;
    });
  };

  const handleSubmitButton = async () => { 
    const response = await axios.post('https://dealscart.onrender.com/users/signup', userInfo);  
    console.log(response.data);
    toast.success("Successfully Registered User!");
  }

  return (

    <div className='flex items-center justify-center h-[100vh]'>
        <div className='bg-slate-100 border border-gray-100 md:w-[40%] w-full m-5 md:m-10 p-10 flex flex-col items-center justify-center gap-2'>
        <div className='flex gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-9 h-9">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                <h1 className='text-3xl'>Deals<span className='text-green-700'>Cart</span></h1>
          </div>
          <h1 className='text-2xl font-semibold'>Create your Account</h1>
          <h2 className='md:text-md text-sm font-extralight'>Enter your email and password to create an account</h2>
          <Toaster theme="light" richColors></Toaster>
          <div className='p-2 w-full flex flex-col gap-5'>
              <input onChange={handleUserInfoChange} name='username' type='text' placeholder="Username" className='w-full p-2 rounded-md'></input>
              <input onChange={handleUserInfoChange} name='email' type='email' placeholder="Email" className='w-full p-2 rounded-md'></input>
              <input onChange={handleUserInfoChange} name='password' type='password' placeholder="Password" className='w-full p-2 rounded-md'></input>
              <button onClick={handleSubmitButton} className='w-full p-2 rounded-md bg-green-800 text-white font-semibold cursor-pointer'>Create My Account</button>
          </div>
          <div>
            <span>Already have an Account ? </span>
            <Link className='text-blue-500 ' href={'/authentication/login'}>
              Click here to Login
            </Link>
          </div>
        </div>
    </div>
  );
}

export default Signup