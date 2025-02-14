import classNames from 'classnames/bind'
import styles from './Dates.module.scss'

const cx = classNames.bind(styles)
function Dates({ time, style }) {
  const date = time.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  })

  const year = time.toLocaleDateString('en-US', {
    year: 'numeric',
  })
  return (
    <div className={cx('wrapper')}>
      <span style={style}>{date} </span>
      <span style={style}>{year}</span>
    </div>
  )
}

export default Dates
