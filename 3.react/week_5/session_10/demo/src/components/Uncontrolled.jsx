import React, { useRef } from 'react';
const Uncontrolled = () => {
    const firstName=useRef(null);
    const lastName=useRef(null);
    const email=useRef(null);
    const mobile=useRef(null);
    const handleSubmit=(event)=>{
        event.preventDefault();
        let formData={
            firstName:firstName.current.value,
            lastName:lastName.current.value,
            email:email.current.value,
            mobile:mobile.current.value,
        }
        console.log(formData)
    }
  return (
    <div>
        <h2> Uncontrolled Component using useRef hook</h2>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label> First Name</label>
                <input type='text' className='form-control' ref={firstName}/>
            </div>
            <div className='form-group'>
                <label> Last Name</label>
                <input type='text' className='form-control' ref={lastName} />
            </div>
            <div className='form-group'>
                <label> Email</label>
                <input type='text' className='form-control' ref={email} />
            </div>
            <div className='form-group'>
                <label> Mobile</label>
                <input type='text' className='form-control'  ref={mobile}/>
            </div>
            <input type='submit' value="Submit" className='btn btn-danger'/>
        </form>
    </div>
  )
}

export default Uncontrolled