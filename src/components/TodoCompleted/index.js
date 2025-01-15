import React from 'react'
import { useSelector } from 'react-redux'
import { todosCompletedSelector } from '~/redux/selector'
import Todo from '../Todo'

function TodoCompleted({ todoList }) {
  return (
    <div>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoCompleted
