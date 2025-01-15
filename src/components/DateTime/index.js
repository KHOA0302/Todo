import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import style from './DateTime.module.scss'

const cx = classNames.bind(style)
function DateTime() {
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
    <div className={cx('time')}>
      <span className={cx('day')}>{day}</span>
      <span className={cx('clock')}>{clock}</span>
    </div>
  )
}

export default DateTime
