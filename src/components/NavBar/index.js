import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './NavBar.module.scss'
import Search from '../Search'
import { GoHome } from 'react-icons/go'
import { RxHamburgerMenu } from 'react-icons/rx'
import { ImportantIcon, MyDayIcon, PlannedIcon, TaskIcon } from '~/Icons'

const cx = classNames.bind(styles)

function NavBar() {
  const [active, setActive] = useState(false)

  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h1>Menu</h1>
        <RxHamburgerMenu />
      </div>
      <Search />
      <nav className={cx('nav-bar')}>
        <NavLink
          to='/todos/my-day'
          className={({ isActive }) => cx('link', { active: isActive })}
        >
          <MyDayIcon />
          <span>My day</span>
        </NavLink>
        <NavLink
          to='/todos/important'
          className={({ isActive }) => cx('link', { active: isActive })}
        >
          <ImportantIcon />
          <span>Important</span>
        </NavLink>
        <NavLink
          to='/todos/planned'
          className={({ isActive }) => cx('link', { active: isActive })}
        >
          <PlannedIcon />
          <span>Planned</span>
        </NavLink>
        <NavLink
          to='/todos/task'
          className={({ isActive }) => cx('link', { active: isActive })}
        >
          <TaskIcon />
          <span>Task</span>
        </NavLink>
      </nav>
    </div>
  )
}

export default NavBar
