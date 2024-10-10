import { useState } from "react";
const Counter=()=>{
    const [count,setCount]=useState(0);
    return(
        <div>
            <h3> State Counter Example</h3>
            <p> The counter is {count} </p>
            <button onClick={()=> setCount(val=> val+3)}> ++ </button>
            <button onClick={()=> setCount(val=> val-1)}> -- </button>
            <button onClick={()=> setCount(0)}> Reset </button>
        </div>
    )
}
export default Counter;