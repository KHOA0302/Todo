import { SET_TODO, ADD_TODO, DELETE_TODO, CHANGE_TODO } from "./constants";

const setTodo = (payload) => {
  return {
    type: SET_TODO,
    payload,
  };
};

const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

const changeTodo = (payload) => {
  return {
    type: CHANGE_TODO,
    payload,
  };
};
export { setTodo, addTodo, deleteTodo, changeTodo };
