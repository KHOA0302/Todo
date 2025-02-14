import classNames from 'classnames/bind'
import styles from './App.module.scss'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'

import TodoDetail from './Page/TodoDetail'
import { pages } from './Page'
import usePageDetect from './Hook/usePageDetect'
import { Fragment } from 'react'

const cx = classNames.bind(styles)

function App() {
  const Page = usePageDetect() || Fragment

  return (
    <div className={cx('wrapper', 'wide')}>
      <NavBar />

      <Routes>
        <Route exact path='/' element={<Navigate to='/todos/my-day' />} />
        <Route path='/todos'>
          {pages.map((page, index) => {
            const Component = page.page

            return (
              <Route key={index} path={page.path} element={<Component />} />
            )
          })}
          <Route
            path='id/:id'
            element={
              <>
                <Page />
                <TodoDetail />
              </>
            }
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
