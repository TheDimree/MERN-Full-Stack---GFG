import React, { useCallback, useState } from 'react'
import Todos from './Todos'
const Mycallback = () => {
    const [counter,setCounter]=useState(0);
    const [todos,setTodos]=useState([]);
    const addTodo=useCallback(()=>{
        setTodos(t=> [...t,"New ToDo Data"])
    },[todos]);
  return (
    <div>
        <h2> useCallback Example</h2>
        <Todos todos={todos} addTodo={addTodo}/>
        <hr/>
        <div>
            Counter : {counter} <br/>
            <input type='button' value="++" onClick={()=> setCounter(val=> val+1)}/>
        </div>
    </div>
  )
}

export default Mycallback