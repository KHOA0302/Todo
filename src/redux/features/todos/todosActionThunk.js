import { createAsyncThunk } from '@reduxjs/toolkit'
import todoApi from '~/api/todoApi'

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, thunkAPI) => {
    try {
      const response = await todoApi.getAllTodos()
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async (todo, thunkAPI) => {
    try {
      const response = await todoApi.createTodo(todo)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)
