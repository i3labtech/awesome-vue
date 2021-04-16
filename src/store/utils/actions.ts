import axios from 'axios'

const http = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:8080/api/',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: `Bearer ${localStorage.getItem('USER_TOKEN')}`
  }
})

async function get<T> (path: string) {
  return http.get(path)
}

function post<T> (path: string, data?: any) {
  return http.post(path, data)
}

export default {
  get, post
}
