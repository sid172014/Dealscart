import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';


const Category = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try{

            const response = await axios.get('https://dummyjson.com/products/categories');

            // Important concept
            const items = await Promise.all(response.data.map(async (item) => {
                const res = await axios.get(`https://dummyjson.com/products/category/${item}`);
                if (res.data) {
                    if (item === "motorcycle") {
                        return {
                            item: item,
                            photo: res.data.products[1].thumbnail
                        };
                    }else{
                        return {
                            item: item,
                            photo: res.data.products[0].thumbnail
                        };
                    }
                    return {
                        item: item,
                        photo: res.data.products[0].thumbnail
                    };
                }
            }));
            setCategories(items);
            }catch(e){
            console.log(e);
            }
        };
        getData();
    }, []);

    return (
        <>
            <h1 className='text-green-800 text-4xl font-extrabold max-sm:text-center pb-4'>Shop by Category</h1>
            <div className='grid grid-cols-12 mt-4'>
                {categories?.map((item) => {
                    return <Link href={'/product-category/' + item.item} key={item.item} className='col-span-4 md:col-span-3 md:p-10 p-4 group cursor-pointer'>
                        <img src={item.photo} className='w-full h-[80%] rounded-xl group-hover:scale-105 transition-all ease-out' ></img>
                        <div className='text-center md:text-2xl text-xs md:font-extrabold md:mt-5 mt-2'>{item.item.toUpperCase()}</div>
                    </Link>
                })}
            </div>

        </>
    )
}

export default Category;