/* eslint-disable @typescript-eslint/camelcase */
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { Message } from "element-ui";

axios.defaults.baseURL = "http://tt.linweiqin.com/api/tt";

// 请求拦截
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    //是否在发起请求
    const oauth_token = document.cookie.split("=")[1];
    if (oauth_token) {
      config.data && (config.data["oauth_token"] = oauth_token);
      config.params && (config.params["oauth_token"] = oauth_token);
    }
    return config;
  },
  (err: Error) => {
    Promise.reject(err);
  }
);

// 响应拦截
axios.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.data.status === 100 && res.data.msg) {
      Message.error(res.data.msg);
    }
    if (res.data.status === 0 && res.data.msg) {
      Message.success(res.data.msg);
    }
    return res;
  },
  (err: Error) => {
    console.log(err);
    return Promise.reject(err);
  }
);
