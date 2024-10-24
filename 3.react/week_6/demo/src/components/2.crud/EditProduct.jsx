import React, { useEffect, useState } from 'react'
import { getProductById, updateProduct } from './services/ProductServices';
import { useNavigate, useParams } from 'react-router-dom';
const EditProduct = () => {
    const [state,setState]=useState({});
    const {id}=useParams();
    useEffect(()=>{
        getProductById(id)
        .then(res=> setState(res.data))
        .catch(err=> console.log(err))
    },[id])
    const navigate=useNavigate();
    const handler=(event)=>{
        const {name,value}=event.target;
        setState({...state,[name]:value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(state.name!=='' && state.price!=='' && state.image!==''){
           updateProduct(id,state)
           .then(res=>{
            if(res.data){
                alert("Product Updated");
                navigate("/crud")
            }
           })
           .catch(err=> console.log(err))
        }
        else{
            alert("All fields are compulsory");
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

export default EditProduct;