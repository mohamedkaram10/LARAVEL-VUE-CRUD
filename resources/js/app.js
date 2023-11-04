import './bootstrap';


import VueSweetalert2 from 'vue-sweetalert2';
import { createApp, onMounted } from 'vue'
import router from './routes/index';
import useAuth from './composables/auth';

createApp({
    setup() {
        const { getUser } = useAuth()
        onMounted(getUser)
    } 
})
.use(router)
.use(VueSweetalert2)
.mount('#app')
