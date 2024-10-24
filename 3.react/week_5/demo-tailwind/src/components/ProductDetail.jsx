import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const ProductDetail = ({title}) => {
    const [productData, setProductData] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const api = `https://dummyjson.com/products/${id}`
        axios.get(api)
            .then(res => {
                // console.log(res.data)
                setProductData(res.data);
                console.log(productData);
            })
            .catch(err => {
                console.log(err);
            })
    });
    return (
        <div>
            <h2 className='text-5xl font-bold mb-8 flex justify-center'>{title}</h2>
            {productData != null && (
                <>
                    <div className="flex flex-wrap">
                        {/* Product Image */}
                        <div className="w-full sm:w-1/3 p-2">
                            <img
                                src={productData.thumbnail}
                                alt={productData.title}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                        {/* Product Details */}
                        <div className="w-full sm:w-2/3 p-2">
                            <h4 className="text-xl font-semibold mb-2">{productData.title}</h4>
                            <p className="text-gray-700">{productData.description}</p>
                        </div>
                    </div>
                </>
            )}
        </div>

    )
}

export default ProductDetail
