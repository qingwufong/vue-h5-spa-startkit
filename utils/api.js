import Axios from 'axios';
import Promise from 'promise-polyfill';
import router from '../router';
import deviceApi from './device.js';
import { Toast } from 'mint-ui';

const API_CODE = {
  SUCCESS: '0',
  EXPIRE: '001',
  PERMISSION_DENIED: '002'
}

const METHOD = {
  GET: 'GET',
  POST: 'POST'
}

const HOST = {
  development: 'http://117.174.130.209:8888',
  production: ''
}

if(!window.Promise) {
  window.Promise = Promise;
}

Axios.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('unifiedToken');
    if(token && token !== '') {
      config.headers['token'] = token;
    }
    config.cache = 'no-cache';
    return config;
  },
  error => Promise.reject(error)
);

Axios.interceptors.response.use(
  res => {
    return new Promise((resolve, reject) => {
      const { rspcode } = res.data;
      if(rspcode === API_CODE.EXPIRE) {
        router.push({
          path: '/demo/login'
        });
      } else if(rspcode === API_CODE.PERMISSION_DENIED) {
        router.replace('/demo/deny');
      } else {
        resolve(res.data);
      }
    })
  },
  error => {
    Toast({
      message: '网络异常',
      position: 'bottom'
    });
    return Promise.reject(error);
  }
);

const http = (url, params = {}, headers = {}, method = METHOD.GET) => {
  let options = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      ...headers
    },
    method: method
  }

  if(method === METHOD.POST) {
    options.data = prarms;
  } else if(method === METHOD.GET) {
    options.params = params;
  }

  return Axios({
    url,
    ...options
  });
}

const getApi = (url) => url.indexOf('.json') === -1 ? (HOST[process.env.NODE_ENV] || '') + url : '/mock/' + url;

const apiUrl = {
  getList: getApi('/demo/getList.rest')
}

export const getList = params => http(apiUrl.getList, params, {}, METHOD.GET);