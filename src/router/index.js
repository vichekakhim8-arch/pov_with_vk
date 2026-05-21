import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import HotelsView from '../views/HotelsView.vue'
import HotelDetailView from '../views/HotelDetailView.vue'
import BookingView from '../views/BookingView.vue'
import PaymentView from '../views/PaymentView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import FooddetailView from '../views/FooddetailView.vue'
import DrinkView from '../views/DrinkView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/hotels',
    name: 'hotels',
    component: HotelsView
  },

  {
    path: '/hotel/:id',
    name: 'hotel-detail',
    component: HotelDetailView
  },

  {
    path: '/booking',
    name: 'booking',
    component: BookingView
  },

  {
    path: '/payment',
    name: 'payment',
    component: PaymentView
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },

  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  
  {
    path: '/contact',
    name: 'contact',
    component: ContactView

  },
{
  path: '/Fooddetail',
  name: 'Fooddetail',
  component: FooddetailView
},
{
  path: '/drink',
  name: 'drink-detail',
  component: DrinkView
}
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router