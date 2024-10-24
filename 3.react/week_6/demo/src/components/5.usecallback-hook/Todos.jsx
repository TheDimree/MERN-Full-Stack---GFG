import React, { memo } from 'react'

const Todos = ({ todos, addTodo }) => {
    console.log("Child rendered.")

    return (
        <div>
            <h3> My Todos</h3>
            <button onClick={addTodo}> Add Todo</button>
            <ul>
                {todos.length < 1 ? "Enter todos" : todos.map((val, ind) => <li key={ind}> {val} </li>
                )}
            </ul>

        </div>
    )
}

export default memo(Todos)  // * useCallback in parent + memo on child: This is a common pattern to prevent unnecessary re-renders when functions are passed as props.