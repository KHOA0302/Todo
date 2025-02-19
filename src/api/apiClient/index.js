import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://677b46bf20824100c0791b7e.mockapi.io/todoapp',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiClient
