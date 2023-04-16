import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
//importamos boostrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
//importamos nuestros estilso personalizados generales
import './assets/css/main.css'
const pinia = createPinia();

createApp(App).use(pinia).mount('#app')
