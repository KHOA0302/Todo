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
import MyDay from './Page/MyDay'
import TodoSetting from './Page/TodoSetting/inde'

const cx = classNames.bind(styles)

function App() {
  return (
    <div className={cx('wrapper', 'wide')}>
      <div className={cx('nav-bar')}>
        <NavBar />
      </div>

      <div className={cx('todo-list')}>
        <Router>
          <Routes>
            <Route exact path='/' element={<Navigate to='/todos' />} />
            <Route
              exact
              path='/todos'
              element={<Navigate to='/todos/my-day' />}
            />

            <Route path='/todos/my-day' element={<MyDay />} />
            <Route
              exact
              path='/todos/important'
              element={<button>Important</button>}
            />
            <Route
              exact
              path='/todos/planned'
              element={<button>Planned</button>}
            />
            <Route exact path='/todos/task' element={<button>Task</button>} />
          </Routes>
        </Router>
      </div>

      <div className={cx('todo-setting')}>
        <Router>
          <Routes>
            <Route path='/todos/id/:id' element={<TodoSetting />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
