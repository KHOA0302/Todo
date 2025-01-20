import classNames from 'classnames/bind'
import styles from './App.module.scss'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import Layout from './Layout'
import TodoSetting from './Page/TodoSetting'
import { pages } from './Page'
import usePageDetect from './Hook/usePageDetect'

const cx = classNames.bind(styles)

function App() {
  const Page = usePageDetect()

  return (
    <div className={cx('wrapper', 'wide')}>
      <NavBar />

      <Routes>
        <Route exact path='/' element={<Navigate to='/todos/my-day' />} />
        <Route path='/todos'>
          {pages.map((page, index) => {
            const Component = page.page

            return (
              <Route
                key={index}
                path={page.path}
                element={
                  <Layout>
                    <Component />
                  </Layout>
                }
              />
            )
          })}
          <Route
            path='id/:id'
            element={
              <Layout>
                <Page />
                <TodoSetting />
              </Layout>
            }
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
