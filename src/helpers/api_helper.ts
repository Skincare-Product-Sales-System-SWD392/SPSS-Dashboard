import axios from "axios";

// Set base URL for all API calls
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// content type
axios.defaults.headers.post["Content-Type"] = "application/json";

// content type
const authUser: any = localStorage.getItem("authUser");
const token = authUser ? JSON.parse(authUser).token || JSON.parse(authUser).accessToken : null;
if (token) axios.defaults.headers.common["Authorization"] = "Bearer " + token;

// intercepting to capture errors
axios.interceptors.response.use(
  function (response) {
    return response.data ? response.data : response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let message;
    switch (error.status) {
      case 500:
        message = "Internal Server Error";
        break;
      case 401:
        message = "Invalid credentials";
        break;
      case 404:
        message = "Sorry! the data you are looking for could not be found";
        break;
      default:
        message = error.message || error;
    }
    return Promise.reject(message);
  }
);

class APIClient {
  get = (url: string, params?: any) => {
    return axios.get(url, { params });
  };

  create = (url: string, data: any) => {
    return axios.post(url, data);
  };

  update = (url: string, data: any) => {
    return axios.patch(url, data);
  };

  put = (url: string, data: any) => {
    return axios.put(url, data);
  };

  delete = (url: string, config?: any) => {
    return axios.delete(url, config);
  };
}

const setAuthorization = (token: any) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export { APIClient, setAuthorization };
