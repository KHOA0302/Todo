import React from 'react'
import Todo from '../Todo'
import classNames from 'classnames/bind'
import styles from './TodoList.module.scss'

const cx = classNames.bind(styles)
function TodoList({ todoList }) {
  return (
    <div className={cx('wrapper')}>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
