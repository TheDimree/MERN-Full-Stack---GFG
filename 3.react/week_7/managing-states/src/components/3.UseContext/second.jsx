import React from 'react'
import { useMyContext } from './myContext'

const Second = () => {
    const { count, price, setDiscount } = useMyContext();

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
                <input type="text" name="" id="" onChange={(event) => setDiscount(event.target.value)} placeholder="Enter discount" /> <br />
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
