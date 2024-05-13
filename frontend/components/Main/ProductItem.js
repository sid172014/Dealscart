import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import { Toaster } from '../ui/sonner';
import axios from 'axios';

const ProductItem = ({ product }) => {

    const [quantity, setQuantity] = useState(1);

    const addToCart = async () => {
        try{
            const response = await axios.post('http://localhost:3000/users/addToCart'); 
            
        }catch(e){
            toast.error(e.response.data.error);
        }
    
    };

    useEffect(() => {
        console.log(product);
    }, []);
    return (
        <div className='grid md:grid-cols-2 grid-cols-1'>
            <div className='col-span-1 p-2'>
                <div className='p-4 rounded-lg bg-slate-200 h-[400px]'>
                    <img src={product.thumbnail} className='h-full w-full rounded-lg' ></img>
                </div>
            </div>
            <div className='col-span-1'>
                <div className='p-4 flex flex-col gap-4'>
                    <h1 className='text-xl text-black font-extrabold'>{product.title.toUpperCase()}</h1>
                    <h3>{product.description}</h3>
                    <div className='flex max-sm:items-center max-sm:justify-center gap-4 items-baseline text-black'>
                        <div className='flex gap-4 items-center'>
                            <h1 className='text-3xl font-extrabold'>₹{product.price}</h1>
                            <h2 className='text-gray-800 text-2xl font-light line-through'>₹{parseInt(parseInt(product.price) / (1 - (product.discountPercentage / 100)))}</h2>
                        </div>
                        <div className='flex items-center gap-1'><svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                            <h2 className='text-yellow-500'>{product.rating}</h2>
                        </div>
                    </div>
                    <h1 className='text-green-800 text-xl font-semibold'>Discount : {product.discountPercentage}%</h1>
                    <h2 className='text-black text-md font-bold'>In stock</h2>
                    <div className='flex gap-5 max-sm:items-center max-sm:justify-center'>
                        <div className='flex gap-5 font-extrabold border items-baseline'>
                            <button disabled={quantity == 1} className='p-2' onClick={() => setQuantity(quantity - 1)}>-</button>
                            <h1 className='text-black'>{quantity}</h1>
                            <button className='p-2' onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                        <div>
                            <h1 className='text-3xl text-black font-extrabold'>= ₹{product.price * quantity.toFixed(2)}</h1>
                        </div>
                    </div>
                    <div className='max-sm:items-center max-sm:justify-center max-sm:flex'>
                        <button onClick={addToCart} className='flex items-center gap-2 bg-green-500 p-3 rounded-lg'>
                            <div className='flex items-baseline'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </div><h1 className='text-lg font-extrabold text-white'>Add To Cart</h1>
                        </button>
                    </div>
                    <h1 className='font-semibold text-center md:text-left'><span className='text-black font-extrabold'>Category: </span>{product.category}</h1>
                </div>
            </div>
        </div>
    )
}

export default ProductItem