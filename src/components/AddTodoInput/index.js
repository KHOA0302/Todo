import classNames from 'classnames/bind'
import styles from './AddTodoInput.module.scss'
import { CircleIcon, ImportantActiveIcon, ImportantIcon } from '~/Icons'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { currentPageSelector } from '~/redux/selector'
import { createTodo } from '~/redux/features/todos/todosActionThunk'

const cx = classNames.bind(styles)
function AddTodoInput() {
  const [todoInput, setTodoInput] = useState('')
  const [isImportant, setIsImportant] = useState(false)

  const isInputEmpty = todoInput.length > 0
  const dispatch = useDispatch()
  const currentPageType = useSelector(currentPageSelector)

  const handleChange = (e) => {
    setTodoInput(e.target.value)
    if (e.target.value) {
      setIsImportant(false)
    }
  }

  const handleSubmit = (e) => {
    const fullType =
      currentPageType === 'task' ? [currentPageType] : ['task', currentPageType]
    const createdAt = new Date().toISOString().slice(0, 10)
    const todo = {
      id: uuidv4(),
      title: todoInput,
      completed: false,
      createdAt,
      types: isImportant ? ['important', ...fullType] : [...fullType],
    }
    if (e.key === 'Enter') {
      dispatch(createTodo(todo))
      setTodoInput('')
      setIsImportant(false)
    }
  }

  return (
    <div className={cx('add-todo')}>
      <CircleIcon />
      <input
        value={todoInput}
        type='text'
        placeholder='Add new task'
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />

      <div onClick={() => setIsImportant(!isImportant)}>
        {isInputEmpty && !isImportant && <ImportantIcon />}
        {isInputEmpty && isImportant && <ImportantActiveIcon />}
      </div>
    </div>
  )
}

export default AddTodoInput
