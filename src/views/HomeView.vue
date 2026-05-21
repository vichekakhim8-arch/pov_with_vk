<template>
  <div class="bg-gray-50 min-h-screen">

    <!-- HERO SECTION -->
    <Section />

    <!-- SEARCH CARD -->
    <div class="w-[90%] md:w-[80%] mx-auto bg-white rounded-3xl shadow-xl p-6 mt-10">
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

          <input v-model="searchTitle" type="text" placeholder="Enter hotel name..."
            class="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400" />
        </div>

        <!-- LOCATION -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            Location
          </label>

          <input v-model="searchLocation" type="text" placeholder="Enter location..."
            class="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400" />
        </div>

        <!-- BUTTON -->
        <div class="flex items-end">
          <button class="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-2xl font-semibold transition">
            Search Now
          </button>
        </div>

      </div>
    </div>

    <!-- all hotel card -->
    <div class="w-[90%] mx-auto mt-12">

      <h2 class="text-2xl font-bold mb-6 text-orange-500 hover:text-blue-500">
        SkywayHotel-list: {{ filteredHotels.length }}
      </h2>

      <div class="flex flex-wrap gap-6 justify-center">

        <div v-for="item in filteredHotels" :key="item.id" class="w-[90%] md:w-[45%] lg:w-[23%]">

          <!-- CARD -->
          <router-link :to="{ name: 'hotel-detail', params: { id: item.id } }"
            class="group bg-white rounded-2xl overflow-hidden border border-none shadow-sm hover:shadow-xl transition block ">

            <!-- IMAGE -->
            <div class="relative group overflow-hidden w-full h-[80%]">

              <img :src="item.image" class="h-[250px] w-full object-cover group-hover:scale-110 transition duration-500"
                alt="" />
              <div class="absolute top-3 left-3 bg-white/90 text-xs px-2 py-1 rounded-full shadow opacity-0 group-hover:opacity-100
                    transition-all duration-800">
                <i class="bi bi-heart text-blue-500 hover:text-blue-700 "></i>
              </div>
              <div class="absolute top-3 right-3 bg-white/90 text-xs px-2 py-1 rounded-full shadow">
                ⭐ {{ item.rating }}

              </div>

            </div>

            <!-- content below card -->
            <div class="p-4 flex flex-col justify-between w-full h-[20%]">

              <div>

                <h2 class="font-semibold text-xl truncate text-gray-700 ">
                  {{ item.name }}
                </h2>

                <p class="text-gray-500 text-sm mt-4 line-clamp-2">
                  {{ item.description }}
                </p>

              </div>

              <div class="flex items-center justify-between mt-5">

                <p class="text-blue-600 font-bold text-lg text-orange-500 hover:text-blue-500">
                  ${{ item.price }}
                  <span class="text-gray-400 text-sm">/ night</span>
                </p>

                <router-link to="/hotels"
                  class="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-700 transition">
                  View Hotel
                </router-link>

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
    name: 'Single Room',
    location: 'Mountain Hotel',
    price: 120,
    rating: 4.8,
    image:
      './src/assets/image/roomhotel1.png',
    description: 'A beautiful luxury hotel with ocean view, modern rooms, and excellent service. Perfect for vacation and relaxation.',
  },
  {
    id: 2,
    name: 'Honeymoon room',
    location: 'Sihanoukville',
    price: 220,
    rating: 4.7,
    image:
      './src/assets/image/roomhotel2.png',
    description: 'Welcome to SkyWayHotel, where comfort meets luxury.',
  },
  {
    id: 3,
    name: 'Double Room',
    location: 'Mondulkiri',
    price: 180,
    rating: 4.5,
    image:
      './src/assets/image/roomhotel3.png',
    description: 'Our modern rooms are designed to give guests a relaxing and peaceful stay.',
  },
  {
    id: 4,
    name: 'Triple Room',
    location: 'Siem Reap',
    price: 250,
    rating: 4.6,
    image:
      './src/assets/image/roomhotel4.png',
    description: 'Modern boutique hotel near famous tourist attractions.',
  },
  {
    id: 5,
    name: 'Premium Family Rooml',
    location: 'Siem Reap',
    price: 250,
    rating: 4.6,
    image:
      '/src/assets/image/roomhotel5.png',
    description: 'he hotel also provides clean bathrooms with modern facilities and daily room service.',
  },
  {
    id: 6,
    name: 'Family Room',
    location: 'River side',
    price: 280,
    rating: 4.3,
    image:
      '/src/assets/image/roomhotel6.png',
    description: 'Each room includes comfortable beds, air conditioning, free Wi-Fi, and a smart TV.',
  },
  {
    id: 7,
    name: 'Triple Room',
    location: 'kompot City',
    price: 110,
    rating: 4.6,
    image:
      '/src/assets/image/roomhotel7.png',
    description: 'Modern boutique hotel near famous tourist attractions.',
  },
  {
    id: 8,
    name: 'Ocean View Room',
    location: 'Near Beach',
    price: 220,
    rating: 4.5,
    image:
      '/src/assets/image/roomhotel8.png',
    description: 'SkyWayHotel is the perfect place for vacations, business trips, and family stays.',
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

<style scoped></style>