import todosSlice from './features/todos/todosSlice'
import currentPageSlice from './features/currentPage/currentPageSlice'

const rootReducer = {
  currentPage: currentPageSlice.reducer,
  todos: todosSlice.reducer,
}

export default rootReducer
