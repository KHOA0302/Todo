import Important from './Important'
import MyDay from './MyDay'
import Planned from './Planned'
import Task from './Task'

export const basePath = '/todos'

export const pages = [
  { path: `${basePath}/my-day`, Page: <MyDay /> },
  { path: `${basePath}/important`, Page: <Important /> },
  { path: `${basePath}/planned`, Page: <Planned /> },
  { path: `${basePath}/task`, Page: <Task /> },
]
