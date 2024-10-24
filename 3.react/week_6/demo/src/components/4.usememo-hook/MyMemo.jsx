  import React, { useState, useMemo } from 'react'

  function numberSquare(num) {  // you can define this function outside main function or inside.
    console.log("Square calculated.");
    return Math.pow(num, 2)
  }

  const MyMemo = () => {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    const squareNum = useMemo(() => {
      return numberSquare(number)
    }, [number])  // executed only when number is changed.

    return (
      <div>
        <h2 className='my-2'>Solution</h2>
        Number : <input type='number' value={number} onChange={(event) => setNumber(event.target.value)} />
        <p>
          Enter Number : {number} <br />
          Square calculated : {squareNum}
        </p>
        <hr />
        <button onClick={() => { setCounter(val => val + 1); console.log('Incremented') }}> Increment</button>
        <p> The counter is {counter}</p>
      </div>
    )
  }

  export default MyMemo