import React, { useEffect, useState } from 'react';
import { getAllProducts, getProductByCategory } from '../services/ProductService';
import ProductList from './ProductList';
import {useSearchParams} from 'react-router-dom'
const Products = () => {
  const [prodData,setProdData]=useState([]);
  const [searchParam]=useSearchParams();
  let cat=searchParam.get('category');
  console.log(cat)
  useEffect(()=>{
   if(cat!=null){
      getProductByCategory(cat)
      .then(res=>{
         console.log(res.data.products)
         setProdData(res.data.products)
      })
      .catch(err=> console.log(err));
   }
   else{
     getAllProducts()
     .then(res=>{
        console.log(res.data.products)
        setProdData(res.data.products)
     })
     .catch(err=> console.log(err));
   }
  },[cat]);
  return (
    <div>
        <h2> Latest Products</h2>
        <div className='row'>
           {prodData?.map(prod=> 
              <ProductList key={prod.id} product={prod}/>
           )}
        </div>
    </div>
  )
}

export default Products