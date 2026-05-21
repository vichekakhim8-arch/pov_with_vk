<template>
  <nav class="bg-white/70 backdrop-blur-md shadow-t-lg sticky top-0 z-50 border-b border-gray-100 ">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="flex items-center justify-between h-16">

        <!-- LOGO -->
        <RouterLink
          to="/"
          class="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          <span class="text-4xl text-red-600">S</span>ky<span class="text-yellow-500">Way</span>Hotel
        </RouterLink>

        <!-- Menu list -->
        <div class="hidden md:flex items-center gap-8">

          <RouterLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            class="relative font-medium transition duration-300 pb-1"
            :class="isActive(link.path)
              ? 'text-blue-600'
              : 'text-gray-700 hover:text-blue-600'"
          >

            {{ link.name }}

            <!-- UNDERLINE ANIMATION -->
            <span class="absolute left-0 -bottom-0.5 h-[2px] bg-blue-600 transition-all duration-300"
              :class="isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'"
            ></span>

          </RouterLink>

        </div>

        <!-- Right buttons -->
        <div class="hidden md:flex items-center gap-3">

          <RouterLink
            to="/login"
            class="px-6 py-2 hover:bg-red-600 hover:text-white rounded-xl border border-blue-600 text-blue-600 transition duration-300"
          >
            Login
          </RouterLink>

          <RouterLink
            to="/register"
            class="px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transition duration-300"
          >
            Register
          </RouterLink>

        </div>

        <!-- mobile button  -->
        <button @click="mobileMenu = !mobileMenu" class="md:hidden text-3xl text-gray-700">
          ☰ 
        </button>

      </div>

    </div>

    <!-- mobile menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-x-full opacity-0"
      enter-to-class="translate-x-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-x-0 opacity-100"
      leave-to-class="translate-x-full opacity-0"
    >

      <div
        v-if="mobileMenu"
        class="fixed top-0 right-0 w-72 h-screen bg-white shadow-2xl z-50 md:hidden"
      >

        <!-- TOP -->
        <div class="flex items-center justify-between p-5 border-b">

          <h2 class="text-xl font-bold text-blue-600">
            Menu
          </h2>

          <button @click="mobileMenu = false" class="text-2xl">
            ✕
          </button>

        </div>

        <!-- LINKS -->
        <div class="flex flex-col p-5 gap-5">

          <RouterLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            @click="mobileMenu = false"
            class="text-lg font-medium transition duration-300"
            :class="isActive(link.path)
              ? 'text-blue-600'
              : 'text-gray-700 hover:text-blue-600'"
          >
            {{ link.name }}
          </RouterLink>

          <div class="border-t pt-5 flex flex-col gap-3">

            <RouterLink
              to="/login"
              class="border border-blue-600 hover:shadow-lg transitio-all duration-300 text-blue-600 py-2  rounded-xl text-center"
            >
              Login
            </RouterLink>

            <RouterLink
              to="/register"
              class="bg-blue-600 text-white py-2 hover:shadow-lg transitio-all duration-300  rounded-xl text-center"
            >
              Register
            </RouterLink>

          </div>

        </div>

      </div>

    </transition>

  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const mobileMenu = ref(false)
const route = useRoute()

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Hotels', path: '/hotels' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Dashboard', path: '/dashboard' }
]

const isActive = (path) => {
  return route.path === path
}
</script>