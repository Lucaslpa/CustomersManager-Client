import axios from 'axios'

export const Api = axios.create({
  baseURL: `http://localhost:2000`,
  responseType: 'json',
})
