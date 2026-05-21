<template>
  <footer class="bg-[#0b1120] text-slate-300 border-t border-white/10 mt-16">

    <div class="max-w-7xl mx-auto px-6 py-16">

      <!-- GRID -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <!-- BRAND -->
        <div>
          <RouterLink to="/" class="text-2xl font-extrabold text-white">
            <span class="text-red-500 text-3xl">S</span>ky
            <span class="text-yellow-400">Way</span>Hotel
          </RouterLink>

          <p class="text-sm text-slate-400 mt-3 leading-relaxed max-w-xs">
            Book hotels effortlessly — best prices, unmatched comfort.
          </p>

          <!-- SOCIAL -->
          <div class="flex gap-3 mt-5">

            <a href="#" class="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-blue-500/20 transition">
              <i class="bi bi-facebook"></i>
            </a>

            <a href="#" class="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-sky-500/20 transition">
              <i class="bi bi-telegram"></i>
            </a>

            <a href="#" class="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-pink-500/20 transition">
              <i class="bi bi-instagram"></i>
            </a>

            <a href="#" class="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-slate-500/20 transition">
              <i class="bi bi-twitter-x"></i>
            </a>

          </div>
        </div>

        <!-- QUICK LINKS -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white mb-4">
            Quick Links
          </h3>

          <ul class="space-y-3 text-sm">
            <li><RouterLink class="hover:text-blue-400 transition" to="/">Home</RouterLink></li>
            <li><RouterLink class="hover:text-blue-400 transition" to="/hotels">Hotels</RouterLink></li>
            <li><RouterLink class="hover:text-blue-400 transition" to="/booking">Booking</RouterLink></li>
            <li><RouterLink class="hover:text-blue-400 transition" to="/payment">Payment</RouterLink></li>
          </ul>
        </div>

        <!-- ACCOUNT -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white mb-4">
            Account
          </h3>

          <ul class="space-y-3 text-sm">
            <li><RouterLink class="hover:text-blue-400 transition" to="/login">Login</RouterLink></li>
            <li><RouterLink class="hover:text-blue-400 transition" to="/register">Register</RouterLink></li>
            <li><RouterLink class="hover:text-blue-400 transition" to="/dashboard">Dashboard</RouterLink></li>
          </ul>
        </div>

        <!-- CONTACT -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white mb-4">
            Contact Us
          </h3>

          <ul class="space-y-4 text-sm text-slate-400">

            <li class="flex gap-2 items-start">
              <i class="bi bi-geo-alt text-blue-500"></i>
              Kompot, Cambodia
            </li>

            <li class="flex gap-2 items-start">
              <i class="bi bi-envelope text-blue-500"></i>
              <a href="mailto:skywayhotel@hotelbooker.com" class="hover:text-blue-400">
                skywayhotel@hotelbooker.com
              </a>
            </li>

            <li class="flex gap-2 items-start">
              <i class="bi bi-telephone text-blue-500"></i>
              <a href="tel:+85512345678" class="hover:text-blue-400">
                +855 12 345 678
              </a>
            </li>

          </ul>
        </div>

      </div>

      <!-- BOTTOM -->
      <div class="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">

        <p>© 2026 SkyWayHotel. All rights reserved.</p>

        <div class="flex gap-6">
          <RouterLink class="hover:text-blue-400" to="/privacy">Privacy</RouterLink>
          <RouterLink class="hover:text-blue-400" to="/terms">Terms</RouterLink>
        </div>

      </div>

    </div>

  </footer>
</template>