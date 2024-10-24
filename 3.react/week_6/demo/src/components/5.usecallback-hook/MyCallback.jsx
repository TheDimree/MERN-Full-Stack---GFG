import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const MyCallback = () => {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New ToDo Data"]);
  }, [todos]);

  return (
    <div>
      <h2>Solution</h2>
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

export default MyCallback;