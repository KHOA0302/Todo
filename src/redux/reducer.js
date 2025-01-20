const initState = {
  todo: '',
  todos: [
    {
      id: '1',
      title: 'todo 1',
      completed: false,
      createAt: '2025-01-17',
      types: ['my-day'],
    },
    {
      id: '2',
      title: 'todo 2',
      completed: false,
      createAt: '2025-01-18',
      types: ['important'],
    },
    {
      id: '3',
      title: 'todo 3',
      completed: false,
      createAt: '2025-01-17',
      types: ['planned', 'my-day'],
    },
    {
      id: '4',
      title: 'todo 4',
      completed: false,
      createAt: '2025-01-17',
      types: ['my-day'],
    },
    {
      id: '5',
      title: 'todo 5',
      completed: false,
      createAt: '2025-01-18',
      types: ['my-day', 'important'],
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
    case 'changeCompleted':
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      }
    case 'changeImportantStatus':
      return {
        todos: state.todos.map((todo) => {
          return todo.id === action.payload.id
            ? {
                ...todo,
                types: action.payload.importantStatus
                  ? todo.types.filter((type) => type !== 'important')
                  : [...todo.types, 'important'],
              }
            : todo
        }),
      }
    case 'removeTodo':
    default:
      return state
  }
}

export default rootReducer
