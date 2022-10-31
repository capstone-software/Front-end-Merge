import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import axios from 'axios'
import mitt from 'mitt'
//import VueGeolocationApi from 'vue-geolocation-api'

const emitter = mitt();
const app = createApp(App);
app.use(router);
app.mount('#app');

app.config.globalProperties.$axios = axios;
app.config.globalProperties.emitter = emitter;
