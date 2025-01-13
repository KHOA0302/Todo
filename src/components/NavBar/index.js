import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './NavBar.module.scss'
import Search from '../Search'
import { RiSunLine } from 'react-icons/ri'
import { RxStar } from 'react-icons/rx'
import { GoHome } from 'react-icons/go'
import { HiOutlineCalendarDays } from 'react-icons/hi2'

const cx = classNames.bind(styles)

function NavBar() {
  const [active, setActive] = useState(false)

  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('title')}>Menu</h1>
      <Search />
      <nav className={cx('nav-bar')}>
        <NavLink
          to='/my-day'
          className={({ isActive }) => cx('link', { active: isActive })}
        >
          <RiSunLine />
          <span>My day</span>
        </NavLink>
        <NavLink
          to='/important'
          className={({ isActive }) => cx('link', { active: isActive })}
        >
          <RxStar />
          <span>Important</span>
        </NavLink>
        <NavLink className={({ isActive }) => cx('link', { active: false })}>
          <HiOutlineCalendarDays />
          <span>Planned</span>
        </NavLink>
        <NavLink
          to='/task'
          className={({ isActive }) => cx('link', { active: isActive })}
        >
          <GoHome />
          <span>Task</span>
        </NavLink>
      </nav>
    </div>
  )
}

export default NavBar
