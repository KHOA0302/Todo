import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  todosCompletedSelector,
  todosNotCompletedSelector,
} from '~/redux/selector'
import classNames from 'classnames/bind'
import styles from './PageLayout.module.scss'
import { ArrowIcon, MyDayIcon } from '~/Icons'
import TodoList from '~/components/TodoList'
import DateTime from '~/components/DateTime'
import NumberOfTodo from '~/components/NumberOfTodo'
import AddTodoInput from '~/components/AddTodoInput'

const cx = classNames.bind(styles)
function PageLayout({ type, Icon, title }) {
  const [showCompleted, setShowCompleted] = useState(false)

  const todosNotCompleted = useSelector((state) =>
    todosNotCompletedSelector(state, type),
  )

  const todosCompleted = useSelector((state) =>
    todosCompletedSelector(state, type),
  )

  const handleShowCompleted = () => {
    setShowCompleted(!showCompleted)
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className={cx('title')}>
          <Icon />
          <h1>{title}</h1>
        </div>
        <DateTime />
      </div>

      <AddTodoInput />

      <TodoList todoList={todosNotCompleted} />

      <div
        className={cx('todo-completed', {
          ['show']: showCompleted && !!todosCompleted.length,
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

export default PageLayout
