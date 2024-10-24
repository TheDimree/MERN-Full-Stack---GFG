import React, { useEffect, useState } from 'react'
import ProductsList from './ProductsList'
import axios from 'axios';

const Products = () => {
    const api = 'https://dummyjson.com/products';
    const [productData, setProductData] = useState([]);

    useEffect(()=> {
        axios.get(api)
        .then(res=> {
            console.log(res.data.products);
            setProductData(res.data.products);
        })
        .catch(err => {
            console.log(err);
        })
    });
    return (
        <div className='container'>
            <h2>Latest Products</h2>
                <div className="row">
                    {productData.map(product =>
                        <div className="col-sm-4 gap-1" key={product.id}>
                            <ProductsList product={product}/> 
                        </div>
                    )}
                    
                </div>
        </div>
    )
}

export default Products
