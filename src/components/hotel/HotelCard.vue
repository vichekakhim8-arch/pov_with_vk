<template>
  <div>

    <!-- HEADER -->
    <div class="p-4">
      <h1 class="text-2xl font-bold">Hello, Hotels!</h1>

      <!-- 👉 Dynamic count -->
      <p class="text-gray-500 mt-1">
        {{ hotels.length }} hotels found
      </p>
    </div>

  <!-- GRID -->
<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">

  <div
    v-for="item in filteredHotels"
    :key="item.id"
    class="group bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition"
  >

    <!-- IMAGE + FULL CLICK LINK -->
    <router-link :to="{ name: 'hotel-detail', params: { id: item.id } }">

      <div class="relative overflow-hidden">

        <img
          :src="item.image"
          class="h-40 sm:h-48 w-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div class="absolute top-3 right-3 bg-white/90 text-xs px-2 py-1 rounded-full shadow">
          ⭐ {{ item.rating }}
        </div>

      </div>

      <!-- CONTENT -->
      <div class="p-4 space-y-1">

        <h2 class="font-semibold text-gray-900 text-sm sm:text-base truncate">
          {{ item.name }}
        </h2>

        <p class="text-xs text-gray-400 flex items-center gap-1">
          📍 {{ item.location }}
        </p>

        <div class="flex items-center justify-between mt-3">

          <p class="text-blue-600 font-bold text-sm sm:text-base">
            ${{ item.price }}
            <span class="text-gray-400 text-xs">/ night</span>
          </p>

          <span class="text-xs sm:text-sm px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
            View
          </span>

        </div>

      </div>

    </router-link>

  </div>

</div>

  </div>
</template>

<script setup>
const hotels = ref([
  { id: 1, name: 'Island Resort', location: 'Phuket, Thailand', price: 120, rating: 4.5, image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21' },
  { id: 2, name: 'Ocean Hotel', location: 'Bali, Indonesia', price: 95, rating: 4.2, image: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb2103a' },
  { id: 3, name: 'Sunset Villa', location: 'Maldives', price: 250, rating: 4.9, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85' },
  { id: 4, name: 'Beach House', location: 'Krabi, Thailand', price: 180, rating: 4.6, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
  { id: 5, name: 'Grand Luxury Hotel', location: 'New York, USA', price: 299, rating: 4.8, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb' }
])
</script>