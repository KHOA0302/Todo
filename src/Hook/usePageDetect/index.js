import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { pages } from '~/Page'
import MyDay from '~/Page/MyDay'
import Task from '~/Page/Task'
import { todoSelector } from '~/redux/selector'

const regex = /\/(\d+)$/
function usePageDetect() {
  const [preRoute, setPreRoute] = useState('')
  const pathname = useLocation().pathname

  const todoId = regex.test(pathname) && pathname.slice(-1)

  const todo = useSelector((state) => todoSelector(state, todoId))

  useEffect(() => {
    pages.some((page) => page.path === pathname) && setPreRoute(pathname)
  }, [pathname])

  const pageFounded = useMemo(
    () => pages.find((page) => page.path === preRoute),
    [preRoute],
  )

  const Page = pageFounded
    ? pageFounded.page
    : todo?.types.includes('my-day')
    ? MyDay
    : Task

  return Page
}

export default usePageDetect
