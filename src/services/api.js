import axios from 'axios'
import {
  BACKEND_URL
} from '../const';

export const createApi = (onFailedLoad) => {
  const api = axios.create({
    baseURL: BACKEND_URL
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    onFailedLoad();
    throw err;
  }

  api.interceptors.response.use(onSuccess, onFail);

  return api;
}