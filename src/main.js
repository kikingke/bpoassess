import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
//importamos boostrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
//importamos nuestros estilso personalizados generales
import './assets/css/main.css'

//importamso libreria de alertas
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const pinia = createPinia();

createApp(App).use(pinia).use(VueSweetalert2).mount('#app')
