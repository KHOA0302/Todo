import React from 'react'
import classNames from 'classnames/bind'
import styles from './Todo.module.scss'
import {
  CircleIcon,
  TickIcon,
  ImportantIcon,
  DoneIcon,
  ImportantActiveIcon,
} from '~/Icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeCompleted, changeImportantStatus } from '~/redux/action'

const cx = classNames.bind(styles)

function Todo({ todo }) {
  const navigator = useNavigate()

  const dispatch = useDispatch()

  const handleComplete = () => {
    dispatch(changeCompleted(todo.id))
  }

  const isImportant = todo.types.includes('important')

  const handleImportantChange = () => {
    const payload = {
      id: todo.id,
      importantStatus: isImportant,
    }
    dispatch(changeImportantStatus(payload))
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

      <div className={cx('important-icon')} onClick={handleImportantChange}>
        {isImportant && <ImportantActiveIcon />}
        {!isImportant && <ImportantIcon />}
      </div>
    </div>
  )
}

export default Todo
