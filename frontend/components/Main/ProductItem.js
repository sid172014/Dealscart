import React, { useEffect, useState } from 'react'

const ProductItem = ({ product }) => {

    const [quantity,setQuantity] = useState(1);

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
                    <div className='flex gap-4 items-baseline text-black'>
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
                    <div className='flex gap-5'>
                        <div className='flex gap-5 font-extrabold border items-baseline'>
                        <button disabled={quantity == 1} className='p-2' onClick={() => setQuantity(quantity-1)}>-</button>
                        <h1 className='text-black'>{quantity}</h1>
                        <button className='p-2' onClick={() => setQuantity(quantity+1)}>+</button>
                        </div>
                        <div>
                            <h1 className='text-3xl text-black font-extrabold'>= ₹{product.price*quantity.toFixed(2)}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem