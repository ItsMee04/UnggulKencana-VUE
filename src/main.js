import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/plugins/fontawesome/css/fontawesome.min.css'
import './assets/plugins/fontawesome/css/all.min.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')