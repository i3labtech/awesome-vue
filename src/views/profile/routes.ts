import { RouteConfig } from 'vue-router'

export default [
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ './Profile.vue')
  }
] as Array<RouteConfig>
