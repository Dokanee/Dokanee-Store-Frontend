import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Store from '../views/Store.vue'
import Products from '../views/Products.vue'
import Shop from '../views/Shop.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/:store',
    name: 'Store',
    component: Store,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'category/:catName',
        name: 'Products',
        component: Products
      },
      {
        path: 'search',
        name: 'Search',
        component: Search
      },
      {
        path: 'search/:search',
        name: 'Search',
        component: Search
      },
    ]
  //   children: [
  //     {
  //       path: 'not-found',
  //       component: () => import(/* webpackChunkName: "about" */ '@/views/Notfound.vue')
  //     },
  //     {
  //       path: 'products',
  //       // route level code-splitting
  //       // this generates a separate chunk (about.[hash].js) for this route
  //       // which is lazy-loaded when the route is visited.
  //       component: () => import(/* webpackChunkName: "Product" */ '@/views/Products.vue')
  //     },
  // ]
  },
  {
    path: '/:store/products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Product" */ '@/views/Products.vue')
  },
  {
    path: '/:store/not-found',
    name: 'Notfound',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Notfound.vue')
  },
  {
    path: '/:store/*',
    name: 'Notfound',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Notfound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
