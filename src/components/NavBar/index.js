import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './NavBar.module.scss'
import Search from '../Search'
import { RxHamburgerMenu } from 'react-icons/rx'
import { ImportantIcon, MyDayIcon, PlannedIcon, TaskIcon } from '~/Icons'
import { pages } from '~/Page'

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
          <MyDayIcon />
          <span>My day</span>
        </Link>
        <Link
          to='/todos/important'
          onClick={() => handleClick('/todos/important')}
          className={cx('link', { active: pathname === '/todos/important' })}
        >
          <ImportantIcon />
          <span>Important</span>
        </Link>
        <Link
          to='/todos/planned'
          onClick={() => handleClick('/todos/planned')}
          className={cx('link', { active: pathname === '/todos/planned' })}
        >
          <PlannedIcon />
          <span>Planned</span>
        </Link>
        <Link
          to='/todos/task'
          onClick={() => handleClick('/todos/task')}
          className={cx('link', { active: pathname === '/todos/task' })}
        >
          <TaskIcon />
          <span>Task</span>
        </Link>
      </nav>
    </div>
  )
}

export default NavBar
