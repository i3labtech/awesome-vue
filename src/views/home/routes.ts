import { RouteConfig } from 'vue-router'

export default [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ './Home.vue')
  }
] as Array<RouteConfig>
