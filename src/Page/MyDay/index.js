import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  todosCompletedSelector,
  todosNotCompletedSelector,
  todosSelector,
} from '~/redux/selector'
import classNames from 'classnames/bind'
import styles from './MyDay.module.scss'
import { CircleIcon, MyDayIcon } from '~/Icons'
import TodoList from '~/components/TodoList'
import DateTime from '~/components/DateTime'
import TodoCompleted from '~/components/TodoCompleted'

const cx = classNames.bind(styles)

function MyDay() {
  const todosNotCompleted = useSelector(todosNotCompletedSelector)
  const todosCompleted = useSelector(todosCompletedSelector)

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
      <div className={cx('todo-completed')}>
        {!!todosCompleted.length && (
          <h1>
            <span>Completed</span>
            &nbsp;&nbsp;
            <span>{todosCompleted.length}</span>
          </h1>
        )}
        <TodoCompleted todoList={todosCompleted} />
      </div>
    </div>
  )
}

export default MyDay
