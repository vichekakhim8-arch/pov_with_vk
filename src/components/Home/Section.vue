<template>
  <section class="relative h-screen w-full overflow-hidden">

    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('/src/assets/image/bannerSea.png');"
    ></div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

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
  </section>
</template>

<script setup>
</script>