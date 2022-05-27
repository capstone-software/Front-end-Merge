import {createRouter, createWebHistory} from 'vue-router'
import Mainpage from '@/views/MainPage'
import Salmonella from '@/views/causativeAgent/Salmonella'
import EColi from '@/views/causativeAgent/EColi'
import Norovirus from '@/views/causativeAgent/Norovirus'
import Jejuni from '@/views/causativeAgent/Jejuni'
import Perfringens from '@/views/causativeAgent/Perfringens'

export default createRouter({
  history: createWebHistory(),
  routes: [ 
    { path:'/', component: Mainpage },
    { path: '/salmonella', component: Salmonella },
    { path: '/ecoli', component: EColi },
    { path: '/norovirus', component: Norovirus },
    { path: '/jejuni', component: Jejuni },
    { path: '/perfringens', component: Perfringens }
  ]
})