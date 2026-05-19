import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'

// import bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App)
.use(router)
.mount('#app')