import { createRouter, createWebHistory } from 'vue-router'

import About from './pages/about.vue';
import Contact from './pages/contacts.vue';
import Home from './pages/Home.vue';
import UserPage from  './pages/Users.vue';
import ProductosPage from "./pages/Productos.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/users', component: UserPage},
  { path: '/productos', component: ProductosPage}
]

export default createRouter({
  history: createWebHistory(),
  routes
})