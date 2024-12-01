import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/ProductService';

const ProductDetails = () => {
  const [prodData,setProdData]=useState(null);
  const {id}=useParams();
  useEffect(()=>{
     getProductById(id)
     .then(res=>{
       console.log(res.data)
       setProdData(res.data)
     })
     .catch(err=> console.log(err))
  },[]);
  return (
    <div>
        {prodData!=null && <> 
          <h2> {prodData.title} Product Details</h2>
          <div className='row'>
              <div className='col-md-4'>
                 {prodData.images.map((img,id)=> 
                    <p> <img src={img} key={id} width={200} height={200}/> </p>
                )}
              </div>
              <div className='col-md-8'>
                  <h2> {prodData.category} </h2>
                  <h5> {prodData.brand} </h5>
                  <article>
                       {prodData.description}
                  </article>
                  <p>
                     Price : {prodData.price} <br/>
                     Discount : {prodData.discountPercentage}% <br/>
                     Stock : {prodData.stock} <br/>
                     Warranty : {prodData.warrantyInformation}
                  </p>
                  <button className='btn btn-primary'> Add Cart</button>
              </div>
          </div>
        </>}
        
    </div>
  )
}

export default ProductDetails