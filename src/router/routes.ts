import { RouteConfig } from 'vue-router'
import { routes as login } from '../views/authentication'
import { routes as home } from '../views/home'
import { routes as profile } from '../views/profile'

export default [
  ...login,
  ...home,
  ...profile
] as Array<RouteConfig>
