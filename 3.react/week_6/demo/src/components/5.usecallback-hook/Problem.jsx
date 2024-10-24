import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const Problem = () => {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    // setTodos((t) => [...t, "New ToDo Data"]);
    setTodos([...todos, "New ToDo Data"]);
  };

  return (
    <div>
      <h2>Problem</h2>
      <p>Counter renders the Child Component</p>
      <div>
        <input
          type="button"
          className="mx-2"
          value="--"
          onClick={() => {
            setCounter((val) => val - 1);
            console.log("Decremented");
          }}
        />
        Counter : {counter}
        <input
          type="button"
          className="mx-2"
          value="++"
          onClick={() => {
            setCounter((val) => val + 1);
            console.log("Incremented");
          }}
        />
      </div>
      <Todos todos={todos} addTodo={addTodo} />
    </div>
  );
};

export default Problem;