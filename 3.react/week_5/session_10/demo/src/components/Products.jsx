import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './ProductList'
const Products = () => {
    const PRODUCT_API="https://dummyjson.com/products";
    const [productData,setProductData]=useState([]);
    useEffect(()=>{
      axios.get(PRODUCT_API)
      .then(res=>{
          console.log(res.data.products);
          setProductData(res.data.products)
      })
      .catch(err=> console.log(err))
    },[]);
    return (
        <div>
            <h2> Latest Products</h2>
            <div className="row">
             {productData.map(product=> 
                <div className="col-sm-4 gap-1" key={product.id}>
                    <ProductList product={product}/>
                 </div>
             )}
                
            </div>
        </div>
    )
}

export default Products