import { createApp } from 'vue'
import router from './router'
import store from './store'
import './index.css'
import App from './App.vue'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

createApp(App)
    .use(router)
    .use(store)
    .use(VueToast)
    .mount('#app')

