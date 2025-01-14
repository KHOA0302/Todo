import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { todosSelector } from '~/redux/selector'
import classNames from 'classnames/bind'
import styles from './MyDay.module.scss'
import { AddTodoIcon, MyDayIcon } from '~/Icons'
import TodoList from '~/components/TodoList'

const cx = classNames.bind(styles)

function MyDay() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const clock = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })
  const day = time.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  })

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className={cx('title')}>
          <MyDayIcon />
          <h1>My day</h1>
        </div>
        <div className={cx('time')}>
          <span className={cx('day')}>{day}</span>
          <span className={cx('clock')}>{clock}</span>
        </div>
      </div>

      <div className={cx('add-todo')}>
        <AddTodoIcon />
        <input type='text' placeholder='Add new task' />
      </div>

      <TodoList todoList={useSelector(todosSelector)} />
    </div>
  )
}

export default MyDay
