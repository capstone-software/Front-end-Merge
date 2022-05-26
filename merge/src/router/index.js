import {createRouter, createWebHistory} from 'vue-router'
import Mainpage from '@/components/MainPage'
import Salmonella from '@/views/Salmonella'
import EColi from '@/views/EColi'
import Norovirus from '@/views/Norovirus'
import Jejuni from '@/views/Jejuni'
import Perfringens from '@/views/Perfringens'


export default createRouter({
    history: createWebHistory(),
    routes: [ 
      {
        path:'/',
        component: Mainpage
      },

      {
        path: '/salmonella',
        component: Salmonella
      },
      {
        path: '/ecoli',
        component: EColi
      },
      {
        path: '/norovirus',
        component: Norovirus
      },
      {
        path: '/jejuni',
        component: Jejuni
      },
      {
        path: '/perfringens',
        component: Perfringens
      }
    ]


})