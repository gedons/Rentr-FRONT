import axios from "axios";
import store from "./store";
import router from "./router";


const axiosClient = axios.create({
  //baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
  baseURL: `http://localhost:3000/api/v1`
})

axiosClient.interceptors.request.use(config => {
  if (store.state.user.token) {
    config.headers.Authorization = `Bearer ${store.state.user.token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(response => {
    return response;
  }, error => {
    if (error.response.status === 401) {
      sessionStorage.removeItem('TOKEN')
      router.push({name: 'Login'})
    } else if (error.response.status === 404) {
      router.push({name: 'NotFound'})  
    }
    throw error;
  })
  
  export default axiosClient;