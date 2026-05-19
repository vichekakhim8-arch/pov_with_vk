<template>
  <div class="bg-gray-50 min-h-screen">

    <!-- HERO SECTION -->
    <Section />

    <!-- SEARCH CARD -->
    <div
      class="w-[90%] md:w-[80%] mx-auto bg-white rounded-3xl shadow-xl p-6 mt-10"
    >
      <h2 class="text-3xl font-bold text-center mb-2">
        Search Hotels
      </h2>

      <p class="text-gray-500 text-center mb-8">
        Find hotels by name and location
      </p>

      <!-- FORM -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">

        <!-- HOTEL NAME -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            Hotel Name
          </label>

          <input
            v-model="searchTitle"
            type="text"
            placeholder="Enter hotel name..."
            class="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <!-- LOCATION -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            Location
          </label>

          <input
            v-model="searchLocation"
            type="text"
            placeholder="Enter location..."
            class="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <!-- BUTTON -->
        <div class="flex items-end">
          <button
            class="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-2xl font-semibold transition"
          >
            Search Now
          </button>
        </div>

      </div>
    </div>

  <!-- HOTEL RESULT -->
<div class="w-[90%] mx-auto mt-12">

  <h2 class="text-2xl font-bold mb-6">
    Hotels Found : {{ filteredHotels.length }}
  </h2>

  <div class="flex flex-wrap gap-6 justify-center">

    <div
      v-for="item in filteredHotels"
      :key="item.id"
      class="w-[90%] md:w-[45%] lg:w-[23%]"
    >

      <!-- CARD -->
      <router-link
        :to="{ name: 'hotel-detail', params: { id: item.id } }"
        class="group bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition block "
      >

        <!-- IMAGE -->
        <div class="relative overflow-hidden w-full h-[80%]">

          <img
            :src="item.image"
            class="h-[250px] w-full object-cover group-hover:scale-110 transition duration-500"
            alt=""
          />

          <div
            class="absolute top-3 right-3 bg-white/90 text-xs px-2 py-1 rounded-full shadow"
          >
            ⭐ {{ item.rating }}
          </div>

        </div>

        <!-- CONTENT -->
        <div class="p-4 flex flex-col justify-between w-full h-[20%]">

          <div>

            <h2 class="font-semibold text-gray-900 text-xl truncate">
              {{ item.name }}
            </h2>

            <p class="text-sm text-gray-400 mt-2">
              📍 {{ item.location }}
            </p>

            <p class="text-gray-500 text-sm mt-4 line-clamp-3">
              {{ item.description }}
            </p>

          </div>

          <div class="flex items-center justify-between mt-5">

            <p class="text-blue-600 font-bold text-lg">
              ${{ item.price }}
              <span class="text-gray-400 text-sm">/ night</span>
            </p>

            <span
              class="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              View
            </span>

          </div>

        </div>

      </router-link>

    </div>

  </div>

</div>
    <!-- SERVICE -->
    <Service />

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import Section from '../components/Home/Section.vue'
import Service from '../components/Home/Service.vue'

/* SEARCH */
const searchTitle = ref('')
const searchLocation = ref('')

/* HOTEL DATA */
const hotels = ref([
  {
    id: 1,
    name: 'Luxury Hotel',
    location: 'Phnom Penh',
    price: 120,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    description: 'Luxury hotel with swimming pool and beautiful city view.',
  },
  {
    id: 2,
    name: 'Ocean View Resort',
    location: 'Sihanoukville',
    price: 150,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
    description: 'Beachfront resort with ocean sunset and relaxing rooms.',
  },
  {
    id: 3,
    name: 'Mountain Resort',
    location: 'Mondulkiri',
    price: 90,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
    description: 'Nature resort surrounded by mountains and fresh air.',
  },
  {
    id: 4,
    name: 'City Boutique Hotel',
    location: 'Siem Reap',
    price: 110,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c',
    description: 'Modern boutique hotel near famous tourist attractions.',
  },
])

/* FILTER SEARCH */
const filteredHotels = computed(() => {
  return hotels.value.filter((hotel) => {

    const matchTitle = hotel.name
      .toLowerCase()
      .includes(searchTitle.value.toLowerCase())

    const matchLocation = hotel.location
      .toLowerCase()
      .includes(searchLocation.value.toLowerCase())

    return matchTitle && matchLocation
  })
})
</script>

<style scoped>
</style>