import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './NavBar.module.scss'
import Search from '../Search'
import { RxHamburgerMenu } from 'react-icons/rx'
import { ImportantIcon, MyDayIcon, PlannedIcon, TaskIcon } from '~/Icons'
import { useSelector } from 'react-redux'
import { numberOfTodosSelector } from '~/redux/selector'
import NumberOfTodo from '../NumberOfTodo'

const cx = classNames.bind(styles)

function NavBar() {
  const [pathname, setPathname] = useState('/todos/my-day')

  const handleClick = (pathname) => {
    setPathname(pathname)
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h1>Menu</h1>
        <RxHamburgerMenu />
      </div>
      <Search />
      <nav className={cx('nav-bar')}>
        <Link
          to='/todos/my-day'
          onClick={() => handleClick('/todos/my-day')}
          className={cx('link', { active: pathname === '/todos/my-day' })}
        >
          <div>
            <MyDayIcon />
            <span>My day</span>
          </div>
          <NumberOfTodo
            number={useSelector((state) =>
              numberOfTodosSelector(state, 'my-day'),
            )}
          />
        </Link>
        <Link
          to='/todos/important'
          onClick={() => handleClick('/todos/important')}
          className={cx('link', { active: pathname === '/todos/important' })}
        >
          <div>
            <ImportantIcon />
            <span>Important</span>
          </div>
          <NumberOfTodo
            number={useSelector((state) =>
              numberOfTodosSelector(state, 'important'),
            )}
          />
        </Link>
        <Link
          to='/todos/planned'
          onClick={() => handleClick('/todos/planned')}
          className={cx('link', { active: pathname === '/todos/planned' })}
        >
          <div>
            <PlannedIcon />
            <span>Planned</span>
          </div>
        </Link>
        <Link
          to='/todos/task'
          onClick={() => handleClick('/todos/task')}
          className={cx('link', { active: pathname === '/todos/task' })}
        >
          <div>
            <TaskIcon />
            <span>Task</span>
          </div>
          <NumberOfTodo
            number={useSelector((state) => numberOfTodosSelector(state, ''))}
          />
        </Link>
      </nav>
    </div>
  )
}

export default memo(NavBar)
