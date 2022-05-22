import App from './App.vue'
import { createApp } from 'vue'
import axios from 'axios'
//import VueGeolocationApi from 'vue-geolocation-api'


const app = createApp(App)
app.mount('#app')

app.config.globalProperties.$axios = axios;