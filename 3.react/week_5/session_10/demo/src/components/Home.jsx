import React, { useState ,lazy, Suspense } from 'react'
const First=lazy(()=> import("./First"))
const Second=lazy(()=> import("./Second"))
const Home = () => {
  const [btn,setBtn]=useState("");
  return (
    <div>
        <h2> Lazy loading example</h2>
        <button onClick={()=> setBtn("first")}> First </button>
        <button onClick={()=> setBtn("second")}> Second </button>
        <hr/>
        <Suspense fallback={<div> Loading...</div>}>
            {btn=== "first" && <First />}
            {btn=== "second" && <Second />}
        </Suspense>
    </div>
  )
}

export default Home