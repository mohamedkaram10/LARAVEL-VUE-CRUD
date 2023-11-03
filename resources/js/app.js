import './bootstrap';


import VueSweetalert2 from 'vue-sweetalert2';
import { createApp } from 'vue';
import router from './routes/index';

createApp({}) 
.use(router)
.use(VueSweetalert2)
.mount('#app')
