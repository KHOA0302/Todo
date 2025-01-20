import Important from './Important'
import MyDay from './MyDay'
import Planned from './Planned'
import Task from './Task'

export const basePath = '/todos'

export const pages = [
  { path: `${basePath}/my-day`, page: MyDay },
  { path: `${basePath}/important`, page: Important },
  { path: `${basePath}/planned`, page: Planned },
  { path: `${basePath}/task`, page: Task },
]
