import React from 'react'
import Todo from '../Todo'

function TodoList({ todoList }) {
  return (
    <div>
      {todoList.map((todo) => {
        return <Todo key={todo.id} todo={todo} />
      })}
    </div>
  )
}

export default TodoList
