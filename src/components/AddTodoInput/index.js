import classNames from 'classnames/bind'
import styles from './AddTodoInput.module.scss'
import { CircleIcon } from '~/Icons'

const cx = classNames.bind(styles)
function AddTodoInput() {
  return (
    <div className={cx('add-todo')}>
      <CircleIcon />
      <input type='text' placeholder='Add new task' />
    </div>
  )
}

export default AddTodoInput
