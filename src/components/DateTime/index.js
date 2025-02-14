import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import style from './DateTime.module.scss'
import Dates from './Dates'
import Time from './Time'

const cx = classNames.bind(style)
function DateTime() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const style = { fontSize: '0.8rem', color: 'rgb(100, 100, 100)' }

  return (
    <div className={cx('time')}>
      <Dates time={time} style={style} />
      <Time time={time} style={style} />
    </div>
  )
}

export default DateTime
