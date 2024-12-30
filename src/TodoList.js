import React from "react";

import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete, onChange }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          style={{ display: "flex", gap: "20px", margin: "0 0 4px 0" }}
        >
          <TodoItem
            key={todo}
            index={index}
            todo={todo}
            onDelete={onDelete}
            onChange={onChange}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
