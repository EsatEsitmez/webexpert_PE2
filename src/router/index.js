import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import SingleProductView from '../views/SingleProductView.vue'
import LoginView from "@/views/LoginView";
import ShoppingCartView from '../views/ShoppingCartView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import ConfirmationView from '../views/ConfirmationView.vue'


const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/products', name: 'products', component: ProductsView },
  { path: '/products/:id', name: ':id', component: SingleProductView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/cart', name: 'cart', component: ShoppingCartView },
  { path: '/cart/checkout', name: 'checkout', component: CheckoutView },
  { path: '/cart/checkout/confirmation', name: 'confirmation', component: ConfirmationView }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
