import { createSelector } from '@reduxjs/toolkit'

//first dot is for slice reducer second dot is for todos list
export const todosSelector = (state) => state.todos.todos

export const currentPageSelector = (state) => state.currentPage.page

export const todosCompletedSelector = createSelector(
  todosSelector,
  (state, props) => props.type,
  (state, props) => props.today,
  (todos, type, today) => {
    return todos.filter((todo) => todo.completed && todo.types.includes(type))
  },
)

export const todosNotCompletedSelector = createSelector(
  todosSelector,
  (state, props) => props.type,
  (state, props) => props.today,
  (todos, type, today) => {
    return todos.filter((todo) => !todo.completed && todo.types.includes(type))
  },
)

export const numberOfTodosSelector = createSelector(
  (state, type) => todosNotCompletedSelector(state, { type, today: '' }),
  (todos) => todos.length,
)

export const todoSelector = createSelector(
  todosSelector,
  (state, id) => id,
  (todos, id) => {
    return todos.find((todo) => todo.id === id)
  },
)
