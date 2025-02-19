import classNames from 'classnames/bind'
import styles from './App.module.scss'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import TodoDetail from './Page/TodoDetail'
import { pages } from './Page'
import usePageDetect from './Hook/usePageDetect'
import React, { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from './redux/features/currentPage/currentPageSlice'

const cx = classNames.bind(styles)

function App() {
  const dispatch = useDispatch()
  const Page = usePageDetect() || Fragment

  const pageType = Page !== React.Fragment && Page().props.type // pageType can be false

  useEffect(() => {
    dispatch(setCurrentPage(pageType))
  }, [pageType])

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     try {
  //       const response = await todoApi.getAllTodos()
  //       console.log(response.data)
  //     } catch (error) {
  //     } finally {
  //     }
  //   }

  //   fetchTodos()
  // }, [])

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
