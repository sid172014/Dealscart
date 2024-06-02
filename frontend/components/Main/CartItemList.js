import axios from 'axios';
import { TrashIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'



const CartItemList = () => {

  const [items, setItems] = useState([]);
  const [changed,setChanged] = useState(false);
  let total = 0;

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('http://localhost:3000/users/cartItems');
      setItems(response.data);
    }
    getProducts();
  }, [changed]);

  const deleteFromCart = async (itemId) => {
    try{
      const response = await axios.delete(`http://localhost:3000/users/${itemId}`);
      console.log(response.data);
      setChanged(!changed);
    }catch(e){
      console.log(e.message);
    }
  }

  return (
    <>
    <div className='h-[550px] overflow-auto flex flex-col gap-2'>{items.length > 0 ? items.map((item) => {
      total = total + (item.price * item.quantity);
      return (
        <div className='p-3 flex items-center justify-between gap-2 w-full bg-slate-200 rounded-xl'>
          <div>
            <img src={item.thumbnail} className='border-2 border-white md:h-[150px] md:w-[100px] h-[100px] w-[100px] rounded-md'></img>
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='md:text-md text-sm text-black font-extrabold'>{item.title.toUpperCase()}</h1>
            <h1>- {item.brand}</h1>
            <h2 className='text-green-800 font-semibold '>Quantity : {item.quantity}</h2>
            <h2 className='text-green-800 font-semibold '>Price : ₹{item.quantity * item.price}</h2>
          </div>
          <TrashIcon className='cursor-pointer hover:fill-black' onClick={() => deleteFromCart(item.id)} color='black' fill='white'></TrashIcon>
        </div>
      );
    }) : null}</div>

    {/* Total Cart */}
    <div className='absolute bottom-2 w-[90%] pb-2'>
      <div className='flex justify-between w-full mb-2'>
        <h2 className='text-xl text-green-800 font-extrabold'>Subtotal</h2>
        <h2 className='text-xl text-green-800 font-extrabold'>₹{total}</h2>
      </div>
      <div className='w-full text-center'>
        <button className=' w-full rounded-md p-4 text-white font-semibold bg-green-800'>Proceed to Checkout</button>
      </div>
    </div>
    </>
  )
}

export default CartItemList