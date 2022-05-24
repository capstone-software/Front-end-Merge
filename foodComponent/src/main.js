//main.js: 가장 최초로 실행되는 스크립트 파일 , App.vue를 호출하여 app을 생성
//이 파일에서 App.vue를 호출하여 createApp을 한 결과를 index.html에 있는 app id의 attribute에 할당

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


createApp(App).use(router).mount('#app')
