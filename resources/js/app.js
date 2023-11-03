import './bootstrap';


import VueSweetalert2 from 'vue-sweetalert2';
import { createApp } from 'vue';
import App from './layouts/App.vue';
import router from './routes/index';

createApp(App)
.use(router)
.use(VueSweetalert2)
.mount('#app')
