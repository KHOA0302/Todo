import { createSlice } from '@reduxjs/toolkit'
import {
  createTodo,
  fetchTodos,
  changeImportantStatus,
  changeCompletedStatus,
  deleteTodo,
  changeMyDayType,
} from './todosActionThunk'

const initialState = {
  todo: '',
  todos: [],
  loading: false,
  error: null,
}

const todosSlice = createSlice({
  name: 'todosSlice',
  initialState,
  reducers: {
    changeCompleted: (state, action) => {
      const todoTarget = state.todos.find((todo) => todo.id === action.payload)
      if (todoTarget) {
        todoTarget.completed = !todoTarget.completed
      }
    },
    changeImportantStatus: (state, action) => {
      const todoTarget = state.todos.find(
        (todo) => todo.id === action.payload.id,
      )

      if (todoTarget) {
        if (action.payload.importantStatus) {
          todoTarget.types = todoTarget.types.filter(
            (type) => type !== 'important',
          )
        } else {
          todoTarget.types.push('important')
        }
      }
    },
  },
  extraReducers: (builder) => {
    // todos/fetchTodos
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.loading = false
      state.todos = action.payload
    })
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })

    //todos/createTodo
    builder.addCase(createTodo.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.loading = false
      state.todos.push(action.payload)
    })
    builder.addCase(createTodo.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })

    //todos/changeImportantStatus
    builder.addCase(changeImportantStatus.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(changeImportantStatus.fulfilled, (state, action) => {
      state.loading = false
      const todoIsEdit = action.payload
      state.todos.find((todo) => todo.id === todoIsEdit.id).types =
        todoIsEdit.types
    })
    builder.addCase(changeImportantStatus.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })

    //todos/changeCompletedStatus
    builder.addCase(changeCompletedStatus.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(changeCompletedStatus.fulfilled, (state, action) => {
      state.loading = false
      const todoIsEdit = action.payload
      state.todos.find((todo) => todo.id === todoIsEdit.id).completed =
        todoIsEdit.completed
    })
    builder.addCase(changeCompletedStatus.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })

    //todos/changeMyDayType
    builder.addCase(changeMyDayType.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(changeMyDayType.fulfilled, (state, action) => {
      state.loading = false
      const todoIsEdit = action.payload
      state.todos.find((todo) => todo.id === todoIsEdit.id).types =
        todoIsEdit.types
    })
    builder.addCase(changeMyDayType.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })

    //todos/deleteTodo
    builder.addCase(deleteTodo.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    })
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.error = action.payload
    })
  },
})

export default todosSlice
