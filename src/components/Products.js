import { useState } from 'react';
import Bar from './Bar';
import ImageGrid from './ImageGrid';
useState
const Products = () => {
    let [category, setCategory] = useState('detectores')
    const categories = ['detectores', 'britagem', 'máquinas']

    function changeCategory(newCategory) {
        setCategory(newCategory);
    }

    return <>
        <div className="grid grid-rows-2 justify-items-center h-80 bg-gray-100 rounded-lg mt-10 mx-20 inline-center">
            <div className='row'>
                <ImageGrid category={category}></ImageGrid>
            </div>
            <div className='row self-end my-3'>
                <Bar categories={categories} changeCategory={changeCategory}></Bar>
            </div>
        </div>

    </>
}

export default Products