import { createRouter, createWebHistory } from 'vue-router'

import About from './pages/about.vue'
import Contact from './pages/contacts.vue'
import Home from './pages/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
]

export default createRouter({
  history: createWebHistory(),
  routes
})