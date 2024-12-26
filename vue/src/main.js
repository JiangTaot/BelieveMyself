import './assets/main.css'

import {createApp} from 'vue'
import router from "@/router/router.js";
import App from './App.vue'

var app = createApp(App);
app.use(router)
app.mount('#app')

