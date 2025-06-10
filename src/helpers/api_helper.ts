import axios from "axios";

// Set base URL for all API calls
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// Configure CORS settings
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, PATCH, OPTIONS';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization';

// content type
axios.defaults.headers.post["Content-Type"] = "application/json";

// Load authorization token from localStorage on app start
const loadAuthToken = () => {
  console.log("loadAuthToken called");
  const authUser = localStorage.getItem("authUser");
  console.log("authUser from localStorage:", authUser);
  if (authUser) {
    try {
      const parsedUser = JSON.parse(authUser);
      const token = parsedUser.accessToken || parsedUser.token;
      console.log("Parsed token:", token);
      if (token) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        console.log("Authorization header loaded:", axios.defaults.headers.common["Authorization"]);
      }
    } catch (error) {
      console.error("Error parsing auth user from localStorage:", error);
      localStorage.removeItem("authUser");
    }
  } else {
    console.log("No authUser found in localStorage");
  }
};

// Initialize auth token
loadAuthToken();

// Add withCredentials to support cookies, authorization headers with HTTPS
axios.defaults.withCredentials = true;

// Add request interceptor to log headers
axios.interceptors.request.use(
  function (config) {
    console.log("Request config:", {
      url: config.url,
      method: config.method,
      headers: config.headers,
      baseURL: config.baseURL
    });
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// intercepting to capture errors
axios.interceptors.response.use(
  function (response) {
    // For login endpoint, don't unwrap the response to avoid confusion
    if (response.config?.url?.includes('/authentications/login')) {
      console.log("Login response (not unwrapped):", response);
      return response;
    }
    console.log("Axios interceptor - original response:", response);
    const result = response.data ? response.data : response;
    console.log("Axios interceptor - returning:", result);
    return result;
  },
  function (error) {
    // Handle CORS errors specifically
    if (error.code === 'ERR_NETWORK' || !error.response) {
      console.error('CORS or Network Error:', error);
      return Promise.reject('Network Error: API is not accessible. This may be due to CORS restrictions.');
    }
    
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let message;
    switch (error.response?.status) {
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
  console.log("setAuthorization called with token:", token);
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    console.log("Authorization header set:", axios.defaults.headers.common["Authorization"]);
  } else {
    delete axios.defaults.headers.common["Authorization"];
    console.log("Authorization header removed");
  }
};

export { APIClient, setAuthorization, loadAuthToken };
