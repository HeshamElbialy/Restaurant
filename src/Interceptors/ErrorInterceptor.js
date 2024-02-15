import axios from "axios";

const ErrorInterceptor = axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 401 || status === 403) {
      // Handle unauthorized access
      console.log("Unauthorized access");

      // Remove any stored JWT token (security best practice)
      localStorage.removeItem("token"); // Replace with your storage mechanism

      // Redirect to login page (adjust path as needed)
      window.location.href = "/Login";
    } else if (status === 404) {
      // Handle not found errors
      console.log("Not found");
      // Redirect to login page (adjust path as needed)
      window.location.href = "/Login";
    } else {
      // Handle other errors
      console.error("An error occurred:", error);
    }

    return Promise.reject(error);
  }
);

export default ErrorInterceptor;
