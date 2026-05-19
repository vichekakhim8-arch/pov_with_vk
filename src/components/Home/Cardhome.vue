<template>
  
  <div class="p-4">

    <!-- HEADER -->
    <div class="mb-6">
      <h1 class="text-2xl font-bold">Hello, Hotels!</h1>

      <p class="text-gray-500 mt-1">
        {{ filteredHotels.length }} hotels found
      </p>
    </div>

   <!-- Card -->
<div class="w-full flex flex-wrap gap-4 justify-center">

  <div
    v-for="item in filteredHotels"
    :key="item.id"
    class="w-[90%] md:w-[45%] lg:w-[23%]   "
  >

    <router-link
      :to="{ name: 'hotel-detail', params: { id: item.id } }"
      class="group bg-white rounded-2xl overflow-hidden p-2 shadow-sm hover:shadow-xl transition block "
    >

      <!-- IMAGE -->
      <div class="relative overflow-hidden">

        <img
          :src="item.image"
          class="h-[80%] w-full object-cover group-hover:scale-110 transition duration-500 rounded-2xl"
          alt=""
        />

        <div class="absolute top-3 right-3 bg-white/90 text-xs px-2 py-1 rounded-full shadow">
          ⭐ {{ item.rating }}
        </div>

      </div>

      <!-- CONTENT -->
      <div class="p-4 space-y-2 w-full h-[20%]">

        <h2 class="font-semibold text-gray-900 text-sm sm:text-base truncate">
          {{ item.name }}
        </h2>

        <p class="text-xs text-gray-400">
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
import { ref, computed } from 'vue'

const hotels = ref([
  {
    id: 1,
    name: 'Island Resort',
    location: 'Phuket, Thailand',
    price: 120,
    amenities: ['Free Wi-Fi', 'Swimming Pool', 'Spa', 'Gym'],
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'

  },
  {
    id: 2,
    name: 'Ocean Hotel',
    location: 'Bali, Indonesia',
    price: 95,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
  },
  {
    id: 3,
    name: 'Sunset Villa',
    location: 'Maldives',
    price: 250,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461'
  },
  {
    id: 4,
    name: 'Beach House',
    location: 'Krabi, Thailand',
    price: 180,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'
  },
  {
    id: 5,
    name: 'Grand Luxury Hotel',
    location: 'New York, USA',
    price: 299,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb'
  },
  {
    id: 6,
    name: 'Mountain Resort',
    location: 'Swiss Alps',
    price: 210,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85'
  }
])

const filteredHotels = computed(() => hotels.value)
</script>