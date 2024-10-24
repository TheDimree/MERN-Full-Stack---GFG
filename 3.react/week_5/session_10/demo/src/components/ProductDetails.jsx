import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
    const [productData,setProductData]=useState(null)
    const {id}=useParams();
    useEffect(()=>{
      axios.get(`https://dummyjson.com/products/${id}`)
      .then(res=>{
         console.log(res.data)
         setProductData(res.data)
      })
      .catch(err=> console.log(err))
    })
  return (
    <div>
        <h2> Product Details</h2>
        {
            productData!=null && <>
              <div className='row'>
                  <div className='col-sm-4'>
                      <img src={productData.thumbnail} />
                  </div>
                  <div className='col-sm-8'>
                     <h4> {productData.title}</h4>
                     <p> {productData.description}</p>
                  </div>
              </div>
            
            </>
        }
    </div>
  )
}

export default ProductDetails