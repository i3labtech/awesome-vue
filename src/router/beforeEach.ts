import { NavigationGuardNext, Route } from 'vue-router'

export default async (to: Route, from: Route, next: NavigationGuardNext): Promise<void> => {
  document.title = `${to.name} - Awesome Vue`

  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('USER_TOKEN')

  if (authRequired && !loggedIn) {
    return next('/login')
  } else if (to.path === '/login' && loggedIn) {
    return next('/home')
  }

  next()
}
