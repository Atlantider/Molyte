import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/index.html',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/project',
      name: 'project',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Project.vue'),
      children:[
        {path: '/',redirect: 'LiPF6-EMC-FEC-M'},
        {
          path: 'LiPF6-EMC-FEC-M',
          name: 'LiPF6-EMC-FEC-M',
          component: () => import('../views/LiPF6-EMC-FEC-M.vue'),
          children:[
            {
              path: 'LiPF6',
              name: 'LiPF6',
              component: () => import('../components/LiPF6.vue')
            }
          ]
        },
      ]
    }
  ]
})

export default router
