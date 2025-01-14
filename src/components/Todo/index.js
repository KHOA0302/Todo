import React from 'react'
import classNames from 'classnames/bind'
import styles from './Todo.module.scss'
import { AddTodoIcon, DoneIcon, ImportantIcon } from '~/Icons'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

function Todo({ todo }) {
  const navigator = useNavigate()
  return (
    <div className={cx('wrapper')}>
      <div className={cx('flex-groupItem')}>
        <div className={cx('todo-complete')}>
          <AddTodoIcon />
          <DoneIcon />
        </div>

        <div
          className={cx('todo-title')}
          onClick={() => {
            navigator(`/todos/todo/id/${todo.id}`)
          }}
        >
          {todo.title}
        </div>
      </div>

      <ImportantIcon />
    </div>
  )
}

export default Todo
