import { memo, useEffect, useMemo, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Todo.module.scss'
import {
  CircleIcon,
  TickIcon,
  ImportantIcon,
  DoneIcon,
  ImportantActiveIcon,
  MyDayIcon,
  TaskIcon,
  PlannedIcon,
} from '~/Icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import TextareaAutosize from 'react-textarea-autosize'
import { currentPageSelector } from '~/redux/selector'
import {
  changeCompletedStatus,
  changeImportantStatus,
} from '~/redux/features/todos/todosActionThunk'

const cx = classNames.bind(styles)

const iconsType = [
  { name: 'my-day', icon: MyDayIcon },
  { name: 'task', icon: TaskIcon },
  { name: 'planned', icon: PlannedIcon },
]

function Todo({ todo, activatedSetting = false }) {
  const [todoInput, setTodoInput] = useState(todo.title)

  const navigator = useNavigate()
  const dispatch = useDispatch()

  const handleComplete = () => {
    const payload = { ...todo, completed: !todo.completed }
    dispatch(changeCompletedStatus(payload))
  }

  const isImportant = todo.types.includes('important')

  const handleImportantChange = () => {
    const todoTypes = isImportant
      ? todo.types.filter((type) => type !== 'important')
      : [...todo.types, 'important']

    const todoEdited = {
      ...todo,
      types: todoTypes,
    }

    dispatch(changeImportantStatus(todoEdited))
  }

  const handleChangeTodoInput = (e) => {
    setTodoInput(e.target.value)
  }

  const handleRoute = (e) => {
    if (!activatedSetting) navigator(`/todos/id/${todo.id}`)
  }

  useEffect(() => {}, [todoInput])

  const activePath = useSelector(currentPageSelector)

  const todoTypes = useMemo(() => {
    return todo.types
      .filter((type) => type !== 'important')
      .filter((type) => type !== activePath)
      .map((type) => {
        const Icon = iconsType.filter((iconType) => iconType.name === type)[0]
          .icon

        return (
          <li>
            <Icon />
            <span>{type}</span>
          </li>
        )
      })
  }, [activePath])

  return (
    <div
      className={cx('wrapper', {
        ['active-animation']: !activatedSetting,
      })}
    >
      <div className={cx('flex-groupItem')}>
        <div
          className={cx('todo-complete', { ['active']: todo.completed })}
          onClick={handleComplete}
        >
          <CircleIcon />
          <DoneIcon />
          <TickIcon />
        </div>

        <div
          className={cx('todo-title', {
            ['active']: todo.completed,
          })}
          onClick={handleRoute}
        >
          {activatedSetting ? (
            <TextareaAutosize
              className={cx('todo-input')}
              value={todoInput}
              onChange={(e) => handleChangeTodoInput(e)}
            />
          ) : (
            <div>
              <p className={cx('title-content')}>{todoInput}</p>
              <ul className={cx('todo-types')}>{todoTypes}</ul>
            </div>
          )}
        </div>
      </div>

      <div className={cx('important-icon')} onClick={handleImportantChange}>
        {isImportant && <ImportantActiveIcon />}
        {!isImportant && <ImportantIcon />}
      </div>
    </div>
  )
}

export default memo(Todo)
