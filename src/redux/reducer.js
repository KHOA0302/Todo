const initState = {
  todo: '',
  todos: [
    {
      id: 1,
      title: 'todo 1',
      completed: false,
      createAt: '',
      type: [],
    },
    {
      id: 2,
      title: 'todo 2',
      completed: false,
      createAt: '',
      type: [],
    },
    {
      id: 3,
      title: 'todo 3',
      completed: false,
      createAt: '',
      type: [],
    },
  ],
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'addTodo':
      return {
        todo: '',
        todos: [...state.todos, action.payload],
      }
    default:
      return state
  }
}

export default rootReducer
