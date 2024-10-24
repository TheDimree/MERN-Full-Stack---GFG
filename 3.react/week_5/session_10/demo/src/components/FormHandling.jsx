import React, { useState } from 'react';
const FormHandling = () => {
    const [formData,setFormData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        mobile:''
    });
    const handler=(event)=>{
        const {name,value}=event.target;
        setFormData({...formData,[name]:value});
    }
    const handleSubmit=(event)=>{
        event.preventDefault();//hold the form / not submit 
        console.log(formData)
        alert("Submit")
    }
  return (
    <div>
        <h2> Form Handling Implementation</h2>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label> First Name</label>
                <input type='text' className='form-control' name='firstName' onChange={handler}/>
            </div>
            <div className='form-group'>
                <label> Last Name</label>
                <input type='text' className='form-control'  name='lastName' onChange={handler}/>
            </div>
            <div className='form-group'>
                <label> Email</label>
                <input type='text' className='form-control'  name='email' onChange={handler}/>
            </div>
            <div className='form-group'>
                <label> Mobile</label>
                <input type='text' className='form-control'  name='mobile' onChange={handler}/>
            </div>
            <input type='submit' value="Submit" className='btn btn-danger'/>
        </form>
    </div>
  )
}

export default FormHandling