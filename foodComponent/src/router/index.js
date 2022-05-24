import {createRouter, createWebHistory} from 'vue-router'
import Probability from '@/views/Probability'
import Salmonella from '@/views/CausativeAgent/Salmonella'
import EColi from '@/views/CausativeAgent/EColi'
import Norovirus from '@/views/CausativeAgent/Norovirus'
import Jejuni from '@/views/CausativeAgent/Jejuni'
import Perfringens from '@/views/CausativeAgent/Perfringens'
import MainPage from '@/views/MainPage'


export default createRouter({
    history: createWebHistory(),
    routes: [ 
      {
        path:'/',
        alias:'/main',
        component: MainPage
      },
      {
        path: '/probability',
        component:Probability

      },
      {
        path: '/probability/salmonella',
        component: Salmonella
      },
      {
        path: '/probability/ecoli',
        component: EColi
      },
      {
        path: '/probability/norovirus',
        component: Norovirus
      },
      {
        path: '/probability/jejuni',
        component: Jejuni
      },
      {
        path: '/probability/perfringens',
        component: Perfringens
      }

    ]


})