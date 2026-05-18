<!-- src/components/layout/Navbar.vue -->

<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="flex items-center justify-between h-16">

        <!-- LOGO -->
        <RouterLink
          to="/"
          class="text-2xl font-bold text-blue-600"
        >
          HotelBooker
        </RouterLink>

        <!-- DESKTOP MENU -->
        <div class="hidden md:flex items-center gap-6">

          <RouterLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            class="font-medium transition duration-300 hover:text-blue-600"
            :class="isActive(link.path)
              ? 'text-blue-600'
              : 'text-gray-700'"
          >
            {{ link.name }}
          </RouterLink>

        </div>

        <!-- RIGHT BUTTONS -->
        <div class="hidden md:flex items-center gap-3">

          <RouterLink
            to="/login"
            class="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
          >
            Login
          </RouterLink>

          <RouterLink
            to="/register"
            class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Register
          </RouterLink>

        </div>

        <!-- MOBILE BUTTON -->
        <button
          @click="mobileMenu = !mobileMenu"
          class="md:hidden text-2xl text-gray-700"
        >
          ☰
        </button>

      </div>

    </div>

    <!-- MOBILE MENU -->
    <div
      v-if="mobileMenu"
      class="md:hidden bg-white border-t"
    >

      <div class="flex flex-col p-4 gap-4">

        <RouterLink
          v-for="link in navLinks"
          :key="link.name"
          :to="link.path"
          @click="mobileMenu = false"
          class="font-medium"
          :class="isActive(link.path)
            ? 'text-blue-600'
            : 'text-gray-700'"
        >
          {{ link.name }}
        </RouterLink>

        <RouterLink
          to="/login"
          class="text-blue-600 font-medium"
        >
          Login
        </RouterLink>

        <RouterLink
          to="/register"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
        >
          Register
        </RouterLink>

      </div>

    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const mobileMenu = ref(false)

const route = useRoute()

const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Hotels',
    path: '/hotels'
  },

  {
    name: 'About',
    path: '/about'
  },
  
  {
    name: 'Dashboard',
    path: '/dashboard'
  }
]

const isActive = (path) => {
  return route.path === path
}
</script>