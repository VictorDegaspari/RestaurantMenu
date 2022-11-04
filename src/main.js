import axios from 'axios'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import api from './api'

import App from './App.vue'
import './assets/main.css'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$http = axios
app.config.globalProperties.api = api;

app.use(createPinia())
app.use(router)

app.mount('#app')
