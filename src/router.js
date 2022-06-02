import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        layout: 'home'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')

    },
    {
      path: '/rechange',
      name: 'rechange',
      component: () => import(/* webpackChunkName: "about" */ './views/Rechange.vue')

    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue'),
      meta: {
        layout: 'page'
      }
    },
    {
      path: '/singleproduct/:id',
      name: 'singleproduct',
      component: () => import(/* webpackChunkName: "contact" */ './views/SingleProduct/_id.vue')

    },
    {
      path: '/checkout/:id',
      name: 'checkout',
      component: () => import(/* webpackChunkName: "contact" */ './views/Checkout/_id.vue')

    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import(/* webpackChunkName: "contact" */ './views/Cart.vue')

    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "contact" */ './views/Login.vue'),
      meta: {
        layout: 'login'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "contact" */ './views/Register.vue'),
      meta: {
        layout: 'login'
      }
    },
    // {
    //   path: '/checkout',
    //   name: 'checkout',
    //   component: () => import(/* webpackChunkName: "contact" */ './views/Checkout.vue')

    // },
    {
      path: '*',
      name: 'Error',
      meta: {
        layout: 'error'
      }
    }
  ]
})
