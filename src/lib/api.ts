import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.18.231.240:3333',
})
