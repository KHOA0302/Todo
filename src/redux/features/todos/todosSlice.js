import { createSlice } from '@reduxjs/toolkit'
import { createTodo, fetchTodos } from './todosActionThunk'

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
  },
})

export const { changeCompleted, changeImportantStatus } = todosSlice.actions

export default todosSlice
