<template>
  <section class="relative h-screen w-full overflow-hidden">

    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-no-repeat bg-cover bg-center"
      style="background-image: url('/src/assets/image/hero2.png');"
    ></div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/20"></div>

    <!-- Content -->
    <div class="relative z-10 flex items-center justify-center h-full text-center px-6">

      <div>
        <h1 class="text-white text-4xl md:text-6xl font-bold">
          Discover Your Perfect Holiday
        </h1>

        <p class="text-gray-200 mt-4 text-lg md:text-xl">
          Book hotels, resorts, and villas in paradise destinations
        </p>

        <!-- Button -->
        <div class="mt-6">
          <router-link to="/hotels">
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
              All Hotel view
            </button>
          </router-link>
          
        </div>
      </div>

    </div>


    <!-- SEARCH CARD WRAPPER -->
<div class="relative w-[90%] md:w-[80%] mx-auto mt-10 ab">

  <!-- 🔵 ANIMATED GLOW BORDER -->
  <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 blur opacity-40 animate-pulse"></div>

  <!-- CARD -->
  <div class="relative bg-white rounded-3xl shadow-xl p-6 ">

    <h2 class="text-3xl font-bold text-center mb-2">
      Search Hotels
    </h2>

    <p class="text-gray-500 text-center mb-8">
      Find your perfect hotel instantly
    </p>

    <!-- FORM -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5 items-end">

      <!-- SEARCH INPUT -->
      <div class="md:col-span-3">
        <label class="block text-sm font-semibold text-gray-700 mb-2">
          Hotel Name
        </label>

        <div class="relative">
          <input
            v-model="searchTitle"
            type="text"
            placeholder="Search hotels..."
            class="w-full border border-gray-200 bg-gray-50 rounded-2xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
          />

          <!-- ICON -->
          <i class="bi bi-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>
      </div>

      <!-- BUTTON -->
      <div>
        <button
          class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold shadow-md hover:shadow-lg transition"
        >
          Search
        </button>
      </div>

    </div>

  </div>
</div>
    
  </section>
</template>

<script setup>
</script>