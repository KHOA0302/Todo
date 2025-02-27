import { useNavigate, useParams } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './TodoSetting.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { currentPageSelector, todoSelector } from '~/redux/selector'
import { basePath } from '../../Page'
import Dates from '~/components/DateTime/Dates'
import { CancelIcon, ExitIcon, MyDayIcon, RemoveIcon } from '~/Icons'
import Todo from '~/components/Todo'
import {
  changeMyDayType,
  deleteTodo,
} from '~/redux/features/todos/todosActionThunk'

const cx = classNames.bind(styles)
function TodoDetail() {
  const { id } = useParams()
  const todo = useSelector((state) => todoSelector(state, id))
  const style = { fontSize: '0.6rem', color: 'rgb(100, 100, 100)' }
  const dispatch = useDispatch()
  const isMyDay = todo?.types.includes('my-day')
  const navigator = useNavigate()
  const currentPage = useSelector(currentPageSelector)

  const handleRemove = () => {
    dispatch(deleteTodo(id))
    navigator(`${basePath}/${currentPage}`)
  }

  const handleAddToday = (e) => {
    const currentDate = new Date().toISOString().slice(0, 10)
    let newTodo

    isMyDay
      ? (newTodo = {
          ...todo,
          types: todo.types.filter((type) => type !== 'my-day'),
        })
      : (newTodo = {
          ...todo,
          types: [...todo.types, 'my-day'],
          mydayAddedat: currentDate,
        })

    console.log(newTodo)
    dispatch(changeMyDayType(newTodo))
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {todo ? (
          <>
            <div className={cx('flex-group')}>
              <div className={cx('todo-info')}>
                <Todo key={todo.id} todo={todo} activatedSetting={true} />
              </div>
              <div className={cx('todo-settings')}>
                <ul className={cx('todo-setting-option')}>
                  <li
                    className={cx('todo-setting-item', { ['active']: isMyDay })}
                    onClick={handleAddToday}
                  >
                    <div className={cx('flex-group')}>
                      <MyDayIcon />
                      <span>Add to My Day</span>
                    </div>
                    {isMyDay && <CancelIcon />}
                  </li>
                  <li className={cx('todo-setting-item')}>Add due day</li>
                  <li className={cx('todo-setting-item')}>Pick category</li>
                </ul>
              </div>
            </div>
            <div className={cx('todo-control')}>
              <div className={cx('todo-remove-btn')} onClick={handleRemove}>
                <RemoveIcon />
              </div>
              <div className={cx('todo-created-date')}>
                Created on{' '}
                <Dates time={new Date(todo.createdAt)} style={style} />
              </div>
              <div
                className={cx('todo-exit-btn')}
                onClick={() => navigator(`${basePath}/${currentPage}`)}
              >
                <ExitIcon />
              </div>
            </div>
          </>
        ) : (
          <>
            <h1>Todo is not founded</h1>
            <div className={cx('todo-control')}>
              <div
                className={cx('todo-exit-btn')}
                onClick={() => navigator(`${basePath}/${currentPage}`)}
              >
                <ExitIcon />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default TodoDetail
