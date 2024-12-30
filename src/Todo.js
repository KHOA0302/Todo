import React from "react";
import TodoList from "./TodoList";
import { useStore } from "./store";
import { setTodo, addTodo, deleteTodo, changeTodo } from "~/store";

function Todo() {
  const [state, dispatch] = useStore();

  const handleAdd = () => {
    dispatch(addTodo(state.todo));
    dispatch(setTodo(""));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleChange = (id, value) => {
    const payload = {
      id,
      value,
    };
    dispatch(changeTodo(payload));
  };

  return (
    <>
      <div>
        <label htmlFor="todo">Enter: </label>
        <input
          value={state.todo}
          onChange={(e) => dispatch(setTodo(e.target.value))}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAdd();
          }}
          style={{ weight: "80px" }}
          name="todo"
          id="todo"
        />
        <button onClick={handleAdd}>Add</button>
        <TodoList
          todos={state.todos}
          onDelete={handleDelete}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default Todo;
