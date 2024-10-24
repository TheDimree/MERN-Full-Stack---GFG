import React, { useEffect, useState } from 'react'
import ProductsList from './ProductsList'
import axios from 'axios';

const Products = ({title}) => {
    const api = 'https://dummyjson.com/products';
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        axios.get(api)
            .then(res => {
                console.log(res.data.products);
                setProductData(res.data.products);
            })
            .catch(err => {
                console.log(err);
            })
    });
    return (
        <div className='max-w-7xl mx-auto p-4'>
            <h2 className='text-5xl font-bold mb-8 flex justify-center'>{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {productData.map(product => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
                        <ProductsList product={product} />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Products
