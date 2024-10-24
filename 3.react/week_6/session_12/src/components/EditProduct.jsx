import React, { useEffect, useState } from 'react'
import { addProduct, getProductById, updateProduct } from '../services/ProductService';
import { useNavigate, useParams } from 'react-router-dom';
export const EditProduct = () => {
    const [state,setState]=useState({});
    const {id}=useParams();
    useEffect(()=>{
        getProductById(id)
        .then(res=> setState(res.data))
        .catch(err=> console.log(err))
    },[])
    const navigate=useNavigate();
    const handler=(event)=>{
        const {name,value}=event.target;
        setState({...state,[name]:value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(state.name!='' && state.price!='' && state.image!=''){
           updateProduct(id,state)
           .then(res=>{
            if(res.data){
                alert("Product Updated");
                navigate("/")
            }
           })
           .catch(err=> console.log(err))
        }
        else{
            alert("All fields are compulary");
        }
    }
  return (
    <div>
        <h2> Edit Product</h2>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label> Name </label>
                <input type='text' className='form-control' name='name' onChange={handler} value={state?.name}/>
            </div>
            <div className='form-group'>
                <label> Price </label>
                <input type='text' className='form-control' name='price' onChange={handler} value={state?.price}/>
            </div>
            <div className='form-group'>
                <label> Image Path </label>
                <input type='text' className='form-control' name='image' onChange={handler} value={state?.image}/>
            </div>
            <input type='submit' value="Update" className='btn btn-success'/>
        </form>
    </div>
  )
}
