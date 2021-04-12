import { RouteConfig } from 'vue-router'

export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ './Login.vue')
  }
] as Array<RouteConfig>
