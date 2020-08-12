import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Base from '../views/Base.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

// 处理router重复点击报错
const originalPush = VueRouter.prototype.push
// eslint-disable-next-line
VueRouter.prototype.push = function push(location: any) {
// eslint-disable-next-line
  return (originalPush as any).call(this, location).catch((err: any) => err)
}
const routes: Array<RouteConfig> = [
  {
    path: '/base',
    name: 'Base',
    component: Base
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    children: [
      {
        path: 'signIn',
        name: 'SignIn',
        component: () => import('../components/SignIn.vue'),
      },
      {
        path: 'signUp',
        name: 'SignUp',
        component: () => import('../components/SignUp.vue'),
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
