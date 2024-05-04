import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ProductItem from './ProductItem'


const Product = ({ product }) => {
  return (<>
    <div>
      <img src={product.thumbnail} className='md:w-[400px] md:h-[300px] h-[200px] w-[200px] rounded-xl group-hover:scale-105 transition-all ease-out'></img>
      <div className='flex flex-col justify-center items-center gap-y-2 md:text-xl text-xs md:font-extrabold md:mt-5 mt-2'>
        <h1>{product.title}</h1>
        <h1 >₹{product.price}</h1>
        <h2 className='text-gray-800 font-light line-through'>₹{parseInt(parseInt(product.price) / (1 - (product.discountPercentage / 100)))}</h2>
        <h1 className='text-green-800'>Discount : {product.discountPercentage}%</h1>
      </div>
    </div>
    <div className='flex justify-center items-center'>
      <Dialog>
        {/* We're using the Dialog Box component of shadCN right here */}
        {/* Give the property of asChild to avoid getting an error in the console */}
        <DialogTrigger asChild>  
          {/* This is the triggering event of the DialoxBox trigger */}
          <button className='p-4 mt-5 rounded-lg bg-green-800 text-white font-extrabold'>Add to Cart</button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription>
              <ProductItem product={product}></ProductItem>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  </>
  )
}

export default Product