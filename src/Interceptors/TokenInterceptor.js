import axios from "axios";

// Import AuthService (optional)

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Or use AuthService.getAuthToken()
    if (token && !config.url.includes("/login")) {
      // Exclude login endpoint
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle error appropriately
    return Promise.reject(error);
  }
);
