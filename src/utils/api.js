import axios from "axios";

axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    config = {
      ...config,
      baseURL: "https://jsonplaceholder.typicode.com/",
      headers: { "Access-Control-Allow-Origin": "*" }
    };

    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const Ajax = config => {
  return axios(config);
};
