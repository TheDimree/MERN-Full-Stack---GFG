import { useState } from "react"

export const UseState = () => {
    const [count, setCount] = useState(0)
    const [price, setPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    return (
        <>
            <div className="container my-2">
                <h1 className='text-center'>useState Hook Example</h1>
                <div className="my-2">
                    <button type="button" class="btn btn-primary" onClick={() => setCount(count - 1)}>--</button>
                    <span className="mx-2">Count: {count}</span>
                    <button type="button" class="btn btn-primary" onClick={() => setCount(count + 1)}>++</button>

                </div>
                <div className='my-2'>
                    <button type="button" class="btn btn-primary" onClick={() => setPrice(price + 100)}>Increasing price by 100</button> <span className='mx-2'>Price: {price}</span>
                </div>
            </div>
            <div className=" container my-2">
                <p>Problem: Every state requires a separate function for its management.</p>
                <p>Solution: useReducer Hook</p>
            </div>
        </>

    )
}