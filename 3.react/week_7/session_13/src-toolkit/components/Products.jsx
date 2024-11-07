import React, { useEffect, useState } from 'react'
import ProductList from './ProductList';
const dummy_products=[
    {"id":1,"name":"A","price":3456,"quantity":5},
    {"id":2,"name":"B","price":4456,"quantity":6},
    {"id":3,"name":"C","price":5456,"quantity":7},
    {"id":4,"name":"D","price":6456,"quantity":8}
]
const Products = () => {
    const [proData,setProData]=useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            setProData(dummy_products);
        },3000)
    });
    const addCart=(id)=>{
        if(localStorage.getItem('cartdata')!=undefined){
           let arr=JSON.parse(localStorage.getItem('cartdata'));
           if(arr.includes(id)){
            alert("Product already in a cart")
           }
           else{
            arr.push(id);
            localStorage.setItem('cartdata',JSON.stringify(arr));
            window.location.reload();
            alert("Add Cart Successfully")

           }
        }
        else{
            let arr=[];
            arr.push(id);
            localStorage.setItem('cartdata',JSON.stringify(arr));
            window.location.reload();
            alert("Add Cart Successfully")
        }
    }
  return (
    <div>
        <h2> Latest Products</h2>
        <div className='row'>
            {proData.map(pro=> 
                <ProductList key={pro.id} product={pro} addCart={addCart}/>
            )}
        </div>
    </div>
  )
}

export default Products