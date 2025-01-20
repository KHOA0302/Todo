import { useNavigate, useParams } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './TodoSetting.module.scss'
import { useSelector } from 'react-redux'
import { todoSelector } from '~/redux/selector'
import { useEffect } from 'react'

const cx = classNames.bind(styles)
function TodoSetting() {
  const { id } = useParams()
  const todo = useSelector((state) => todoSelector(state, id))

  return <div className={cx('wrapper')}>todo: {id}</div>
}

export default TodoSetting
