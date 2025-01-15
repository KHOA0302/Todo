import React from 'react'
import classNames from 'classnames/bind'
import styles from './Todo.module.scss'
import { CircleIcon, TickIcon, ImportantIcon, DoneIcon } from '~/Icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeCompleted } from '~/redux/action'

const cx = classNames.bind(styles)

function Todo({ todo }) {
  const navigator = useNavigate()

  const dispatch = useDispatch()

  const handleComplete = () => {
    dispatch(changeCompleted(todo.id))
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('flex-groupItem')}>
        <div
          className={cx('todo-complete', { ['active']: todo.completed })}
          onClick={handleComplete}
        >
          <CircleIcon />
          <DoneIcon />
          <TickIcon />
        </div>

        <div
          className={cx('todo-title', { ['active']: todo.completed })}
          onClick={() => {
            navigator(`/todos/id/${todo.id}`)
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
