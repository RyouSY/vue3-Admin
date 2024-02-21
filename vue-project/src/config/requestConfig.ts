import axios from "axios";

axios.defaults.withCredentials = true
const AUTH_TOKEN = localStorage.getItem('ryou') || ''
axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`

const BASE_URL:string = ''

axios.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
});

const filterContent = async (url: string, params: object) => {
  try {
    const data = await axios.get(`${BASE_URL}${url}`, { params: params })
    return data
  } catch (error) {
    return error
  }
}

export { filterContent }