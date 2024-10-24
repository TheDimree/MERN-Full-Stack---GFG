import React,{memo} from 'react'
const Todos = ({todos,addTodo}) => {
    console.log("Child Render")
  return (
    <div>
        <h3> My Todos</h3>
        <ul>
            {todos.map((val,ind)=>
              <li key={ind}> {val} </li>
            )}
        </ul>
        <button onClick={addTodo}> Add Todo</button>
    </div>
  )
}

export default memo(Todos)