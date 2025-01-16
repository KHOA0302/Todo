import classNames from 'classnames/bind'
import styles from './NumberOfTodo.module.scss'

const cx = classNames.bind(styles)
function NumberOfTodo({ number }) {
  return <>{number > 0 && <span className={cx('wrapper')}>{number}</span>}</>
}

export default NumberOfTodo
