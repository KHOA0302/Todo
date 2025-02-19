import apiClient from '../apiClient'

const todoApi = {
  getAllTodos: () => apiClient.get('/todos'),
  createTodo: (todo) => apiClient.post('/todos', todo),
  updateTodo: (id, todo) => apiClient.put(`/todos/${id}`, todo),
  deleteTodo: (id) => apiClient.delete(`/todos/${id}`),
}

export default todoApi
