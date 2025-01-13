import React from 'react'
import { useSelector } from 'react-redux'
import { todosSelector } from './redux/selector'
import classNames from 'classnames/bind'
import styles from './App.module.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import NavBar from './components/NavBar'

const cx = classNames.bind(styles)

function App() {
  const todoList = useSelector(todosSelector)

  return (
    <Router>
      <div className={cx('wrapper', 'wide')}>
        <div className={cx('nav-bar')}>
          <NavBar />
        </div>

        <div className={cx('todo-list')}>
          <Routes>
            <Route exact path='/' element={<Navigate to='/my-day' />} />
            <Route exact path='/my-day' element={<button>My Day</button>} />
            <Route
              exact
              path='/important'
              element={<button>Important</button>}
            />
            <Route exact path='/task' element={<button>Task</button>} />
          </Routes>
        </div>

        <div className={cx('todo-setting')}>
          <h1>Todo Setting</h1>
        </div>
      </div>
    </Router>
  )
}

export default App
