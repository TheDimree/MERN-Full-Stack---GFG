import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const ProductDetail = () => {
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
            <h2>Product Detail</h2>
            { productData!=null && <>
                <div className="row">
                    <div className='col-sm-4'>
                        <img src={productData.thumbnail} alt="" />
                    </div>
                    <div className='col-sm-8'>
                        <h4>{productData.title}</h4>
                        <p>{productData.description}</p>
                    </div>
                </div>
            </> }
        </div>
    )
}

export default ProductDetail
