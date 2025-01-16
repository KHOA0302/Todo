import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  todosCompletedSelector,
  todosNotCompletedSelector,
} from '~/redux/selector'
import classNames from 'classnames/bind'
import styles from './MyDay.module.scss'
import { ArrowIcon, CircleIcon, MyDayIcon } from '~/Icons'
import TodoList from '~/components/TodoList'
import DateTime from '~/components/DateTime'
import NumberOfTodo from '~/components/NumberOfTodo'

const cx = classNames.bind(styles)
const type = 'my-day'

function MyDay() {
  const todosNotCompleted = useSelector((state) =>
    todosNotCompletedSelector(state, type),
  )

  const todosCompleted = useSelector((state) =>
    todosCompletedSelector(state, type),
  )

  const [showCompleted, setShowCompleted] = useState(false)

  const handleShowCompleted = () => {
    setShowCompleted(!showCompleted)
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className={cx('title')}>
          <MyDayIcon />
          <h1>My day</h1>
        </div>
        <DateTime />
      </div>

      <div className={cx('add-todo')}>
        <CircleIcon />
        <input type='text' placeholder='Add new task' />
      </div>

      <TodoList todoList={todosNotCompleted} />
      <div
        className={cx('todo-completed', {
          ['show']: !showCompleted,
        })}
      >
        {!!todosCompleted.length && (
          <div
            className={cx('todo-completed_heading', {
              ['rotate']: showCompleted,
            })}
            onClick={handleShowCompleted}
          >
            <ArrowIcon />
            <h1>
              <span>Completed</span>
              &nbsp;&nbsp;
              <NumberOfTodo number={todosCompleted.length} />
            </h1>
          </div>
        )}
        {showCompleted && <TodoList todoList={todosCompleted} />}
      </div>
    </div>
  )
}

export default MyDay
