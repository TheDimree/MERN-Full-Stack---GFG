import React, { useState,useMemo } from 'react'

const Mymemo = () => {
    const [number,setNumber]=useState(0);
    const [counter,setCounter]=useState(0);
    const squareNum=useMemo(()=> { 
        return numberSquare(number)
    },[number])
  return (
    <div>
        <h2> useMemo Example</h2>
        Number : <input type='number' value={number} onChange={(event)=> setNumber(event.target.value)}/>
        <p> 
            Number : {number} <br/>
            Square : {squareNum} 
         </p>
        <hr/>
        <button onClick={()=> setCounter(val=> val+1)}> Increment</button>
        <p> The counter is {counter}</p>
    </div>
  )
}
   function numberSquare(num){
      console.log("Squaring will be done");
      return Math.pow(num,2)
   }
export default Mymemo