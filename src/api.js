import axios from "axios";
import { useAuthStore } from "./stores/auth";
const api = axios.create({
  baseURL: `${ import.meta.env.VITE_APP_API_URL }`
});

api.interceptors.request.use(
  function (config) {
    const authStore = useAuthStore();
    let token = authStore.getToken;
    
    config.headers = Object.assign({}, config.headers, {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${ token }`
    });

    return config;

  }, function (error) {
    return Promise.reject(error)
  }
)

export default api;