import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from './Product';

const TopSelling = () => {

    const [products,setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('http://localhost:3000/discounted');   
            const items = [];
            for(let i=0;i<20;i++){
                items.push(response.data[i]);
            }
            setProducts(items);
        };  
    
        getData();
    },[]);

  return (
    <>
        <h1 className='text-green-800 text-4xl font-extrabold max-sm:text-center pb-4'>Heavily Discounted Products</h1>
        <div className='grid grid-cols-12 mt-4 gap-4'>
            {products?.map((product,index) => {
                return <div className='flex flex-col justify-end col-span-6 md:col-span-3 md:p-10 p-4 group border'> 
                        <Product product={product}></Product>
                    </div>
            })}
        </div>
    </>
  )
}

export default TopSelling