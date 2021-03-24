import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// dodanie frameworka CSS Bootstrap do strony
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"


createApp(App)
    .use(router)
    .mount('#app')
