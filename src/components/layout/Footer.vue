<!-- src/components/layout/Footer.vue -->

<template>
  <footer class="bg-gray-500 text-white mt-10 border ">

    <div class="max-w-7xl mx-auto px-4 py-10">

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">

        <!-- BRAND + SOCIAL -->
        <div>
          <h2 class="text-2xl font-bold text-blue-500">
            HotelBooker
          </h2>

          <p class="text-gray-400 mt-3 text-sm">
            Book hotels easily with the best price and comfort.
          </p>

          <!-- SOCIAL ICONS -->
          <div class="flex gap-4 mt-4 text-xl">

            <a href="https://facebook.com" target="_blank" class="hover:text-blue-500">
              <i class="bi bi-facebook"></i>
            </a>

            <a href="https://t.me" target="_blank" class="hover:text-sky-400">
              <i class="bi bi-telegram"></i>
            </a>

            <a href="https://instagram.com" target="_blank" class="hover:text-pink-500">
              <i class="bi bi-instagram"></i>
            </a>

            <a href="https://twitter.com" target="_blank" class="hover:text-blue-400">
              <i class="bi bi-twitter-x"></i>
            </a>

          </div>
        </div>

        <!-- QUICK LINKS -->
        <div>
          <h3 class="font-semibold mb-3">Quick Links</h3>

          <ul class="space-y-2 text-gray-300">

            <li><RouterLink to="/" class="hover:text-blue-400">Home</RouterLink></li>
            <li><RouterLink to="/hotels" class="hover:text-blue-400">Hotels</RouterLink></li>
            <li><RouterLink to="/booking" class="hover:text-blue-400">Booking</RouterLink></li>
            <li><RouterLink to="/payment" class="hover:text-blue-400">Payment</RouterLink></li>

          </ul>
        </div>

        <!-- ACCOUNT -->
        <div>
          <h3 class="font-semibold mb-3">Account</h3>

          <ul class="space-y-2 text-gray-300">

            <li><RouterLink to="/login" class="hover:text-blue-400">Login</RouterLink></li>
            <li><RouterLink to="/register" class="hover:text-blue-400">Register</RouterLink></li>
            <li><RouterLink to="/dashboard" class="hover:text-blue-400">Dashboard</RouterLink></li>

          </ul>
        </div>

        <!-- CONTACT -->
        <div>
          <h3 class="font-semibold mb-3">Contact</h3>

          <p class="text-gray-400 text-sm">Phnom Penh, Cambodia</p>
          <p class="text-gray-400 text-sm mt-2">Email: support@hotelbooker.com</p>
          <p class="text-gray-400 text-sm mt-2">Phone: +855 12 345 678</p>

        </div>

      </div>

      <!-- BOTTOM -->
      <div class="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © 2026 HotelBooker. All rights reserved.
      </div>

    </div>

  </footer>
</template>

<script setup>
</script>