import React from 'react'
import { useMyContext } from './myContext'

const First = () => {
    const { count, setCount, price, setPrice, discount } = useMyContext();

    return (
        <div>
            <div className="container my-2">
                <h2 className='text-center'>First</h2>
                <div className="my-2">
                    <button type="button" class="btn btn-primary" onClick={() => setCount(count - 1)}>--</button>
                    <span className="mx-2">Count: {count}</span>
                    <button type="button" class="btn btn-primary" onClick={() => setCount(count + 1)}>++</button>
                </div>
                <div className='my-2'>
                    <button type="button" class="btn btn-primary" onClick={() => setPrice(price + 100)}>Increasing price by 100</button> <span className='mx-2'>Price: {price}</span>
                    <p className='mx-2'>Discount Given: {discount}</p>
                </div>
            </div>
        </div>
    )
}

export default First