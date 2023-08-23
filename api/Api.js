import axios from 'axios'

export const backendAPIURL = 'https://phystechjob.ru/api/'

export default () => {

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  const Api = axios.create({
    baseURL: backendAPIURL,
    withCredentials: true,
    headers
  })

  Api.interceptors.request.use((config) => {
    return config;
  });
  return Api;
}
