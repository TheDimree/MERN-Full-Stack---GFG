import React, { useState } from 'react'

function numberSquare(num) {
    console.log("Square calculated.");
    return Math.pow(num, 2)
}

const Problem = () => {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h2 className='my-2'>Problem</h2>
            <p>The problem is that whenever you click the increment button, it calculates the square, which should be calculated only when the no. is changed.</p>
            Enter Number : <input type='number' value={number} onChange={(event) => setNumber(event.target.value)} />
            <p>
                You entered : {number} <br />
                Square Calculated : {numberSquare(number)}
            </p>
            <button onClick={() => { setCounter(val => val + 1); console.log('Incremented') }}> Increment</button>
            <p> The counter is {counter}</p>
            <hr />

        </div>
    )
}

export default Problem