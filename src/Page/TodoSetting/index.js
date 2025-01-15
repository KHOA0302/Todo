import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './TodoSetting.module.scss'

const cx = classNames.bind(styles)
function TodoSetting() {
  const { id } = useParams()
  return <div className={cx('wrapper')}>todo: {id}</div>
}

export default TodoSetting
