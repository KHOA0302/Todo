import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './TodoSetting.module.scss'
import { useSelector } from 'react-redux'
import { todoSelector } from '~/redux/selector'

import Dates from '~/components/DateTime/Dates'
import { CancelIcon, ExitIcon, MyDayIcon, RemoveIcon } from '~/Icons'
import Todo from '~/components/Todo'

const cx = classNames.bind(styles)
function TodoDetail() {
  const { id } = useParams()
  const todo = useSelector((state) => todoSelector(state, id))
  const style = { fontSize: '0.6rem', color: 'rgb(100, 100, 100)' }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('flex-group')}>
          <div className={cx('todo-info')}>
            <Todo key={todo.id} todo={todo} activatedSetting={true} />
          </div>
          <div className={cx('todo-settings')}>
            <ul className={cx('todo-setting-option')}>
              <li className={cx('todo-setting-item')}>
                <div className={cx('flex-group')}>
                  <MyDayIcon />
                  <span>Add to My Day</span>
                </div>
                <CancelIcon />
              </li>
              <li className={cx('todo-setting-item')}>Add due day</li>
              <li className={cx('todo-setting-item')}>Pick category</li>
            </ul>
          </div>
        </div>
        <div className={cx('todo-control')}>
          <RemoveIcon />
          <div className={cx('todo-created-date')}>
            Created on <Dates time={new Date(todo.createdAt)} style={style} />
          </div>
          <ExitIcon />
        </div>
      </div>
    </div>
  )
}

export default TodoDetail
