import React, { useState } from "react";

function Todo() {
  // Input
  const [input, setInput] = useState("");

  // List Of Todos
  const [todos, setTodos] = useState([]);
  // Add Todo Features
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="text-center">
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="submit" onClick={addTodo} className="btn btn-info">
          Add Todo
        </button>
      </form>
      {todos && todos.length > 0 ? (
        todos.map((todo) => <p>{todo}</p>)
      ) : (
        <p>Please Add some todos</p>
      )}
    </div>
  );
}

export default Todo;
