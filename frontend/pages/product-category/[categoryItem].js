import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '@/components/Header/Header';
import axios from 'axios';
import Product from '@/components/Main/Product';

const categoryItem = () => {
    const router = useRouter();
    console.log(router.query.categoryItem);

    const [products,setProducts] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`https://dummyjson.com/products/category/${router.query.categoryItem}`);
            if(response.data.products.length > 0){
                setProducts(response.data.products)  
            };
        };

        getData();
    },[router.query.categoryItem]); // The array is given the value of the query parameter so every time the query parameter changes the useEffect function will run

    return (
    <>
        <Header></Header>
        <div className='bg-green-800 w-full p-6'>
            <h1 className='font-extrabold text-2xl text-white text-center'>{router.query.categoryItem?router.query.categoryItem.toUpperCase():null}</h1>
        </div>
        <div className='grid grid-cols-12 mt-4 gap-4 p-4'>
            {products?.map((product,index) => {
                return <div key={index} className='flex flex-col justify-end col-span-6 md:col-span-3 md:p-10 p-4 group border'> 
                        <Product product={product}></Product>
                    </div>
            })}
        </div>
    </>
  )
}

export default categoryItem;