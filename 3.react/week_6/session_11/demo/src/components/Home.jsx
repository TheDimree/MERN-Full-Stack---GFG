import React, { useEffect, useState } from 'react';
import { deleteProduct, getAllProducts } from '../services/ProductService';
import ProductList from './ProductList';
const Home = () => {
    const [prodData,setProdData]=useState([]);
    useEffect(()=>{
      getAllProducts()
      .then(res=>{
         console.log(res.data)
         setProdData(res.data)
      })
      .catch(err=> console.log(err))
    },[]);
    const delPro=(id)=>{
        if(window.confirm("Do u want to delete ?")){
          deleteProduct(id)
          .then(res=>{
             if(res.data){
                alert("Product Deleted");
                let data=prodData.filter(pro=> pro.id!=id);
                setProdData(data);
             }
          })
          .catch(err=> console.log(err))
        }
    }
  return (
    <div>
      <h2> Latest Products</h2>
      <div className='row'>
          {prodData.map(product=>
            <ProductList key={product.id} product={product} delPro={delPro}/>
          )}
      </div>
    </div>
  )
}

export default Home