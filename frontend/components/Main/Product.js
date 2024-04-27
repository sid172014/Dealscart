import React from 'react'

const Product = ({product}) => {
  return (<>
    <div>
      <img src={product.thumbnail} className='md:w-[400px] md:h-[300px] h-[200px] w-[200px] rounded-xl group-hover:scale-105 transition-all ease-out'></img>
      <div className='flex flex-col justify-center items-center gap-y-2 md:text-xl text-xs md:font-extrabold md:mt-5 mt-2'>
        <h1>{product.title}</h1>
        <h1 >₹{product.price}</h1>
        <h2 className='text-gray-800 font-light line-through'>₹{parseInt(parseInt(product.price) / (1 - (product.discountPercentage/100)))}</h2>
        <h1 className='text-green-800'>Discount : {product.discountPercentage}%</h1>
      </div>
      </div>
      <div className='flex justify-center items-center'>
            <button className='p-4 mt-5 rounded-lg bg-green-800 text-white font-extrabold'>Add to Cart</button>
      </div>
  </>
  )
}

export default Product