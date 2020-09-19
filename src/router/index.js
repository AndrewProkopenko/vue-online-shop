import Vue from 'vue'
import VueRouter from 'vue-router'

import Catalog from '../components/Catalog/v-catalog'
import Cart from '../components/Cart/v-cart'
import CategoriesList from '../components/Categories/v-categories-list'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Catalog
  },
  {
    path: '/cart',
    name: 'cart', 
    component: Cart
  }, 
  {
    path: '/category',
    name: 'category', 
    component: CategoriesList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
