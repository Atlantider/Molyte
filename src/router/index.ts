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
        {path: '/',redirect: 'Li'},
        {
          path: 'Li',
          name: 'Li',
          component: () => import('../views/Li.vue'),
          children:[
            {
              path: '1LiDFOB-0.2LiBF4-3.4FEC-4.13DEC-1.65HFE-0.22PFP',
              name: '1LiDFOB-0.2LiBF4-3.4FEC-4.13DEC-1.65HFE-0.22PFP',
              component: () => import('../components/1LiDFOB-0.2LiBF4-3.4FEC-4.13DEC-1.65HFE-0.22PFP.vue')
            },
            {
              path: '1LiDFOB-0.2LiBF4-3.4FEC-4.13DEC-1.65HFE',
              name: '1LiDFOB-0.2LiBF4-3.4FEC-4.13DEC-1.65HFE',
              component: () => import('../components/1LiDFOB-0.2LiBF4-3.4FEC-4.13DEC-1.65HFE.vue')
            },
            {
              path: '1LiDFOB-0.2LiBF4-4.32FEC-5.23DEC',
              name: '1LiDFOB-0.2LiBF4-4.32FEC-5.23DEC',
              component: () => import('../components/1LiDFOB-0.2LiBF4-4.32FEC-5.23DEC.vue')
            },
            {
              path: '1LiDFOB-1LiBF4-9.14FEC-2.56mFEP',
              name: '1LiDFOB-1LiBF4-9.14FEC-2.56mFEP',
              component: () => import('../components/1LiDFOB-1LiBF4-9.14FEC-2.56mFEP.vue')
            },
            {
              path: '1LiDFOB-1LiBF4-9.14FEC-2.56pFEP',
              name: '1LiDFOB-1LiBF4-9.14FEC-2.56pFEP',
              component: () => import('../components/1LiDFOB-1LiBF4-9.14FEC-2.56pFEP.vue')
            },
            {
              path: '1LiDFOB-1LiBF4-9.14FEC-2.56tFEP',
              name: '1LiDFOB-1LiBF4-9.14FEC-2.56tFEP',
              component: () => import('../components/1LiDFOB-1LiBF4-9.14FEC-2.56tFEP.vue')
            },
            {
              path: '1LiFSI-3.2DME-1.8ENE',
              name: '1LiFSI-3.2DME-1.8ENE',
              component: () => import('../components/1LiFSI-3.2DME-1.8ENE.vue')
            },
            {
              path: '1LiFSI-3.2DME-1.54OTE',
              name: '1LiFSI-3.2DME-1.54OTE',
              component: () => import('../components/1LiFSI-3.2DME-1.54OTE.vue')
            },
            {
              path: '1LiFSI-3.2DME-2.2TTE',
              name: '1LiFSI-3.2DME-2.2TTE',
              component: () => import('../components/1LiFSI-3.2DME-2.2TTE.vue')
            },
            {
              path: '1LiFSI-3.2DME-2.04MNE',
              name: '1LiFSI-3.2DME-2.04MNE',
              component: () => import('../components/1LiFSI-3.2DME-2.04MNE.vue')
            },
            {
              path: '1LiFSI-3.2DME-2.6HME',
              name: '1LiFSI-3.2DME-2.6HME',
              component: () => import('../components/1LiFSI-3.2DME-2.6HME.vue')
            },
            {
              path: '1LiFSI-3.2DME-2.24HEE',
              name: '1LiFSI-3.2DME-2.24HEE',
              component: () => import('../components/1LiFSI-3.2DME-2.24HEE.vue')
            },
            {
              path: '1LiFSI-3.2DME-2.73TEE',
              name: '1LiFSI-3.2DME-2.73TEE',
              component: () => import('../components/1LiFSI-3.2DME-2.73TEE.vue')
            },
            {
              path: '1LiFSI-3.2DME-3.27TME',
              name: '1LiFSI-3.2DME-3.27TME',
              component: () => import('../components/1LiFSI-3.2DME-3.27TME.vue')
            },
            {
              path: '1LiFSI-3.2DME',
              name: '1LiFSI-3.2DME',
              component: () => import('../components/1LiFSI-3.2DME.vue')
            },
            {
              path: '1LiFSI-4.8EGDBE',
              name: '1LiFSI-4.8EGDBE',
              component: () => import('../components/1LiFSI-4.8EGDBE.vue')
            },
            {
              path: '1LiFSI-7.1EGDEE',
              name: '1LiFSI-7.1EGDEE',
              component: () => import('../components/1LiFSI-7.1EGDEE.vue')
            },
            {
              path: '1LiFSI-7.2DPE',
              name: '1LiFSI-7.2DPE',
              component: () => import('../components/1LiFSI-7.2DPE.vue')
            },
            {
              path: '1LiFSI-9.6DME',
              name: '1LiFSI-9.6DME',
              component: () => import('../components/1LiFSI-9.6DME.vue')
            },

          ]
        },
        {
          path: 'Na',
          name: 'Na',
          component: () => import('../views/Na.vue'),
          children:[
            {
              path: '1NaDFOB-0.2NaBF4-3.4FEC-4.13DEC-1.65HFE-0.22PFP',
              name: '1NaDFOB-0.2NaBF4-3.4FEC-4.13DEC-1.65HFE-0.22PFP',
              component: () => import('../components/1NaDFOB-0.2NaBF4-3.4FEC-4.13DEC-1.65HFE-0.22PFP.vue')
            },
            {
              path: '1NaDFOB-0.2NaBF4-3.4FEC-4.13DEC-1.65HFE',
              name: '1NaDFOB-0.2NaBF4-3.4FEC-4.13DEC-1.65HFE',
              component: () => import('../components/1NaDFOB-0.2NaBF4-3.4FEC-4.13DEC-1.65HFE.vue')
            },
            {
              path: '1NaDFOB-0.2NaBF4-4.32FEC-5.23DEC',
              name: '1NaDFOB-0.2NaBF4-4.32FEC-5.23DEC',
              component: () => import('../components/1NaDFOB-0.2NaBF4-4.32FEC-5.23DEC.vue')
            },
            {
              path: '1NaDFOB-1NaBF4-9.14FEC-2.56mFEP',
              name: '1NaDFOB-1NaBF4-9.14FEC-2.56mFEP',
              component: () => import('../components/1NaDFOB-1NaBF4-9.14FEC-2.56mFEP.vue')
            },
            {
              path: '1NaDFOB-1NaBF4-9.14FEC-2.56pFEP',
              name: '1NaDFOB-1NaBF4-9.14FEC-2.56pFEP',
              component: () => import('../components/1NaDFOB-1NaBF4-9.14FEC-2.56pFEP.vue')
            },
            {
              path: '1NaDFOB-1NaBF4-9.14FEC-2.56tFEP',
              name: '1NaDFOB-1NaBF4-9.14FEC-2.56tFEP',
              component: () => import('../components/1NaDFOB-1NaBF4-9.14FEC-2.56tFEP.vue')
            },
            {
              path: '1NaFSI-3.2DME-1.8ENE',
              name: '1NaFSI-3.2DME-1.8ENE',
              component: () => import('../components/1NaFSI-3.2DME-1.8ENE.vue')
            },
            {
              path: '1NaFSI-3.2DME-1.54OTE',
              name: '1NaFSI-3.2DME-1.54OTE',
              component: () => import('../components/1NaFSI-3.2DME-1.54OTE.vue')
            },
            {
              path: '1NaFSI-3.2DME-2.2TTE',
              name: '1NaFSI-3.2DME-2.2TTE',
              component: () => import('../components/1NaFSI-3.2DME-2.2TTE.vue')
            },
            {
              path: '1NaFSI-3.2DME-2.04MNE',
              name: '1NaFSI-3.2DME-2.04MNE',
              component: () => import('../components/1NaFSI-3.2DME-2.04MNE.vue')
            },
            {
              path: '1NaFSI-3.2DME-2.6HME',
              name: '1NaFSI-3.2DME-2.6HME',
              component: () => import('../components/1NaFSI-3.2DME-2.6HME.vue')
            },
            {
              path: '1NaFSI-3.2DME-2.24HEE',
              name: '1NaFSI-3.2DME-2.24HEE',
              component: () => import('../components/1NaFSI-3.2DME-2.24HEE.vue')
            },
            {
              path: '1NaFSI-3.2DME-2.47HFE',
              name: '1NaFSI-3.2DME-2.47HFE',
              component: () => import('../components/1NaFSI-3.2DME-2.47HFE.vue')
            },
            {
              path: '1NaFSI-3.2DME-2.73TEE',
              name: '1NaFSI-3.2DME-2.73TEE',
              component: () => import('../components/1NaFSI-3.2DME-2.73TEE.vue')
            },
            {
              path: '1NaFSI-3.2DME-3.27TME',
              name: '1NaFSI-3.2DME-3.27TME',
              component: () => import('../components/1NaFSI-3.2DME-3.27TME.vue')
            },
            {
              path: '1NaFSI-3.2DME',
              name: '1NaFSI-3.2DME',
              component: () => import('../components/1NaFSI-3.2DME.vue')
            },
            {
              path: '1NaFSI-4.8EGDBE',
              name: '1NaFSI-4.8EGDBE',
              component: () => import('../components/1NaFSI-4.8EGDBE.vue')
            },
            {
              path: '1NaFSI-7.1EGDEE',
              name: '1NaFSI-7.1EGDEE',
              component: () => import('../components/1NaFSI-7.1EGDEE.vue')
            },
            {
              path: '1NaFSI-7.2DPE',
              name: '1NaFSI-7.2DPE',
              component: () => import('../components/1NaFSI-7.2DPE.vue')
            },
            {
              path: '1NaFSI-9.6DME',
              name: '1NaFSI-9.6DME',
              component: () => import('../components/1NaFSI-9.6DME.vue')
            },

          ]
        },
        {
          path: 'K',
          name: 'K',
          component: () => import('../views/K.vue'),
          children:[
            {
              path: '1KDFOB-0.2KBF4-3.4FEC-4.13DEC-1.65HFE-0.22PFP',
              name: '1KDFOB-0.2KBF4-3.4FEC-4.13DEC-1.65HFE-0.22PFP',
              component: () => import('../components/1KDFOB-0.2KBF4-3.4FEC-4.13DEC-1.65HFE-0.22PFP.vue')
            },
            {
              path: '1KDFOB-0.2KBF4-3.4FEC-4.13DEC-1.65HFE',
              name: '1KDFOB-0.2KBF4-3.4FEC-4.13DEC-1.65HFE',
              component: () => import('../components/1KDFOB-0.2KBF4-3.4FEC-4.13DEC-1.65HFE.vue')
            },
            {
              path: '1KDFOB-0.2KBF4-4.32FEC-5.23DEC',
              name: '1KDFOB-0.2KBF4-4.32FEC-5.23DEC',
              component: () => import('../components/1KDFOB-0.2KBF4-4.32FEC-5.23DEC.vue')
            },
            {
              path: '1KDFOB-1KBF4-9.14FEC-2.56mFEP',
              name: '1KDFOB-1KBF4-9.14FEC-2.56mFEP',
              component: () => import('../components/1KDFOB-1KBF4-9.14FEC-2.56mFEP.vue')
            },
            {
              path: '1KDFOB-1KBF4-9.14FEC-2.56pFEP',
              name: '1KDFOB-1KBF4-9.14FEC-2.56pFEP',
              component: () => import('../components/1KDFOB-1KBF4-9.14FEC-2.56pFEP.vue')
            },
            {
              path: '1KDFOB-1KBF4-9.14FEC-2.56tFEP',
              name: '1KDFOB-1KBF4-9.14FEC-2.56tFEP',
              component: () => import('../components/1KDFOB-1KBF4-9.14FEC-2.56tFEP.vue')
            },
            {
              path: '1KFSI-3.2DME-1.8ENE',
              name: '1KFSI-3.2DME-1.8ENE',
              component: () => import('../components/1KFSI-3.2DME-1.8ENE.vue')
            },
            {
              path: '1KFSI-3.2DME-1.54OTE',
              name: '1KFSI-3.2DME-1.54OTE',
              component: () => import('../components/1KFSI-3.2DME-1.54OTE.vue')
            },
            {
              path: '1KFSI-3.2DME-2.2TTE',
              name: '1KFSI-3.2DME-2.2TTE',
              component: () => import('../components/1KFSI-3.2DME-2.2TTE.vue')
            },
            {
              path: '1KFSI-3.2DME-2.04MNE',
              name: '1KFSI-3.2DME-2.04MNE',
              component: () => import('../components/1KFSI-3.2DME-2.04MNE.vue')
            },
            {
              path: '1KFSI-3.2DME-2.6HME',
              name: '1KFSI-3.2DME-2.6HME',
              component: () => import('../components/1KFSI-3.2DME-2.6HME.vue')
            },
            {
              path: '1KFSI-3.2DME-2.24HEE',
              name: '1KFSI-3.2DME-2.24HEE',
              component: () => import('../components/1KFSI-3.2DME-2.24HEE.vue')
            },
            {
              path: '1KFSI-3.2DME-2.47HFE',
              name: '1KFSI-3.2DME-2.47HFE',
              component: () => import('../components/1KFSI-3.2DME-2.47HFE.vue')
            },
            {
              path: '1KFSI-3.2DME-2.73TEE',
              name: '1KFSI-3.2DME-2.73TEE',
              component: () => import('../components/1KFSI-3.2DME-2.73TEE.vue')
            },
            {
              path: '1KFSI-3.2DME-3.27TME',
              name: '1KFSI-3.2DME-3.27TME',
              component: () => import('../components/1KFSI-3.2DME-3.27TME.vue')
            },
            {
              path: '1KFSI-3.2DME',
              name: '1KFSI-3.2DME',
              component: () => import('../components/1KFSI-3.2DME.vue')
            },
            {
              path: '1KFSI-4.8EGDBE',
              name: '1KFSI-4.8EGDBE',
              component: () => import('../components/1KFSI-4.8EGDBE.vue')
            },
            {
              path: '1KFSI-7.1EGDEE',
              name: '1KFSI-7.1EGDEE',
              component: () => import('../components/1KFSI-7.1EGDEE.vue')
            },
            {
              path: '1KFSI-7.2DPE',
              name: '1KFSI-7.2DPE',
              component: () => import('../components/1KFSI-7.2DPE.vue')
            },
            {
              path: '1KFSI-9.6DME',
              name: '1KFSI-9.6DME',
              component: () => import('../components/1KFSI-9.6DME.vue')
            },

          ]
        },
      ]
    }
  ]
})

export default router
