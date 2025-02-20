import { createAsyncThunk } from '@reduxjs/toolkit'
import { useEffect } from 'react'
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

export const changeImportantStatus = createAsyncThunk(
  'todos/changeImportantStatus',
  async (todoEdited, thunkAPI) => {
    try {
      const response = await todoApi.updateTodo(todoEdited.id, todoEdited)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export const changeCompletedStatus = createAsyncThunk(
  'todos/changeCompletedStatus',
  async (todoEdited, thunkAPI) => {
    try {
      const response = await todoApi.updateTodo(todoEdited.id, todoEdited)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)
