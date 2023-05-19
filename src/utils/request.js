import axios from 'axios';
import { getToken } from './token';
import router from '@/router';
import { BASE_URL } from '@/settings/origin';

const request = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

request.interceptors.request.use(
  config => {
    const token = getToken();
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error)
);

request.interceptors.response.use(
  async response => {
    const { data } = response;
    if (data.code === 0) {
      return data.result;
    } else if (data.code === 1) {
      console.log('token过期');
      router.replace('/login');
      return Promise.reject(data);
    } else {
      return Promise.reject(data);
    }
  },
  error => Promise.reject(error)
);

export { request };
export default request;
