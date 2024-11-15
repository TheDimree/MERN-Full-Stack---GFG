import React, { useState } from 'react'
import { useMyContext } from './myContext'

const Second = () => {
    const { count, price, setDiscount } = useMyContext();
    const [myDiscount, setMyDiscount] = useState(0);
    const handleDiscount = () => {
        console.log("btn clicked")
        setDiscount(myDiscount);
    }
    return (
        <div>
            <div className="container my-2">
                <h2 className='text-center'>Second</h2>
                <p>Check the states are global and are also changing in this component.</p>
                <div className="my-2">
                    <span className="mx-2">Count: {count}</span>
                </div>
                <div className='my-2'>
                    <span className='mx-2'>Price: {price}</span>
                </div>
            </div>
            <div className='container my-2'>
                <input type="text" name="" id="" onChange={(event) => setMyDiscount(event.target.value)} placeholder="Enter discount" /> <br />
                <button type="button" className="btn btn-primary my-2" onClick={handleDiscount}>Give Discount</button>
                {/* 
                    // * Use onClick={() => handleDiscount()} if you need an anonymous function or want to pass arguments.
                    // * Use onClick={handleDiscount} for direct, clean function calls without arguments.
                    // * Avoid onClick={() => handleDiscount}, as it only returns a reference to handleDiscount without calling it.
                */}
            </div>
        </div>
    )
}

export default Second
