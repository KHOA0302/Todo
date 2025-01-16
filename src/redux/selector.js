import { createSelector } from '@reduxjs/toolkit'

export const todosSelector = (state) => state.todos

export const todosCompletedSelector = createSelector(
  todosSelector,
  (state, type) => type,
  (todos, type) => {
    return todos.filter((todo) => todo.completed)
  },
)

export const todosNotCompletedSelector = createSelector(
  todosSelector,
  (state, type) => type,
  (todos, type) => {
    return todos.filter((todo) => !todo.completed && todo.types.includes(type))
  },
)

export const numberOfTodosSelector = createSelector(
  (state, type) => todosNotCompletedSelector(state, type),
  (todos) => todos.length,
)
