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
import Layout from './Layout'
import TodoSetting from './Page/TodoSetting'
import { pages } from './Page'
import { Fragment } from 'react'

const cx = classNames.bind(styles)

function App() {
  return (
    <div className={cx('wrapper', 'wide')}>
      <Router>
        <div className={cx('nav-bar')}>
          <NavBar />
        </div>
        <Routes>
          <Route exact path='/' element={<Navigate to='/todos' />} />
          <Route
            exact
            path='/todos'
            element={<Navigate to='/todos/my-day' />}
          />
          <Route path='/todos'>
            {pages.map((page, index) => {
              const Component = page.page
              return (
                <Fragment key={index}>
                  <Route
                    path={page.path}
                    element={
                      <Layout>
                        <Component />
                      </Layout>
                    }
                  />
                  <Route
                    path='id/:id'
                    element={
                      <Layout>
                        <Component  />
                        <TodoSetting />
                      </Layout>
                    }
                  />
                </Fragment>
              )
            })}
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
