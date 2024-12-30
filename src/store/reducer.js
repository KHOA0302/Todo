import { SET_TODO, ADD_TODO, DELETE_TODO, CHANGE_TODO } from "./constants";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO: {
      return { ...state, todo: action.payload };
    }
    case ADD_TODO: {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos.filter((todo, index) => index !== action.payload),
        ],
      };
    }
    case CHANGE_TODO: {
      const newTodos = state.todos.map((todo, index) => {
        if (index === action.payload.id) {
          return action.payload.value;
        } else {
          return todo;
        }
      });

      return { ...state, todos: newTodos };
    }
    default:
      throw new Error("Invalid state");
  }
};
