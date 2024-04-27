import React from 'react'
import Category from './Category'
import TopSelling from './TopSelling';

const Main = () => {
  return (
    <div className='p-4 md:pl-10'>
        <Category></Category>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <TopSelling></TopSelling>
    </div>
  )
};

export default Main