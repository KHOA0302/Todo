import { createSelector } from '@reduxjs/toolkit'

export const todosSelector = (state) => state.todos

export const todosCompletedSelector = createSelector(todosSelector, (todos) => {
  return todos.filter((todo) => todo.completed)
})

export const todosNotCompletedSelector = createSelector(
  todosSelector,
  (todos) => {
    return todos.filter((todo) => !todo.completed)
  },
)
