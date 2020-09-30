import axios from "axios";

axios.interceptors.request.use(
  config => {
    config = {
      ...config,
      baseURL: process.env.VUE_APP_API_URL
    };

    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => response,
  function(error) {
    return Promise.reject(error);
  }
);

export const Ajax = async config => {
  try {
    return await axios(config);
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    return {};
  }
};
