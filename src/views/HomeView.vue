<template>
  <div class="bg-gray-50 min-h-screen">

    <!-- HERO SECTION -->
    <Section />

    <!-- SEARCH CARD WRAPPER -->
    <div class="relative w-[90%] md:w-[80%] mx-auto mt-10">

      <!-- 🔵 ANIMATED GLOW BORDER -->
      <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 blur opacity-40 animate-pulse"></div>

      <!-- CARD -->
      <div class="relative bg-white rounded-3xl shadow-xl p-6">

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

    <!-- HOTEL LIST -->
    <div class="w-[90%] mx-auto mt-12">
      <h1 class="text-center font-bold text-3xl py-4">Popular Hotels</h1>

      <p class="  mb-6 text-gray-500">
        {{ filteredHotels.length }} Hotels found
      </p>

      <div class="flex flex-wrap gap-6 justify-center">

        <div
          v-for="item in filteredHotels"
          :key="item.id"
          class="w-[90%] md:w-[45%] lg:w-[23%]"
        >

          <router-link
            :to="{ name: 'hotel-detail', params: { id: item.id } }"
            class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition block"
          >

            <!-- IMAGE -->
            <div class="relative group overflow-hidden w-full h-[80%]">

              <img
                :src="item.image"
                class="h-[250px] w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div class="absolute top-3 left-3 bg-white/90 text-xs px-2 py-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition-all duration-300">
                <i class="bi bi-heart text-blue-500 hover:text-blue-700"></i>
              </div>

              <div class="absolute top-3 right-3 bg-white/90 text-xs px-2 py-1 rounded-full shadow">
                ⭐ {{ item.rating }}
              </div>

            </div>

            <!-- CONTENT -->
            <div class="p-4 flex flex-col justify-between w-full h-[20%]">

              <div>
                <h2 class="font-semibold text-xl truncate text-gray-700">
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

                <router-link
                  to="/hotels"
                  class="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-700 transition"
                >
                  View Hotel
                </router-link>

              </div>

            </div>

          </router-link>

        </div>

      </div>
    </div>

    <Menufood />
    <Drinkcatary />
    <Service />

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Section from '../components/Home/Section.vue'
import Service from '../components/Home/Service.vue'
import Menufood from '../components/Home/Menufood.vue'
import Drinkcatary from '../components/Home/Drinkcatary.vue'

const searchTitle = ref('')
const searchLocation = ref('')

const hotels = ref([
  {
    id: 1,
    name: 'Single Room',
    price: 120,
    rating: 4.8,
    image: '/src/assets/image/roomhotel1.png',
    description: 'A beautiful luxury hotel with ocean view...',
  },
  {
    id: 2,
    name: 'Honeymoon room',
    price: 220,
    rating: 4.7,
    image: '/src/assets/image/roomhotel2.png',
    description: 'Welcome to SkyWayHotel...',
  },
  {
    id: 3,
    name: 'Double Room',
    price: 180,
    rating: 4.5,
    image: '/src/assets/image/roomhotel3.png',
    description: 'Our modern rooms...',
  },
  {
    id: 4,
    name: 'Triple Room',
    price: 250,
    rating: 4.6,
    image: '/src/assets/image/roomhotel4.png',
    description: 'Modern boutique hotel...',
  },
  {
    id: 5,
    name: 'Premium Family Rooml',
    price: 250,
    rating: 4.6,
    image: '/src/assets/image/roomhotel5.png',
    description: 'The hotel provides clean rooms...',
  },
  {
    id: 6,
    name: 'Family Room',
    price: 280,
    rating: 4.3,
    image: '/src/assets/image/roomhotel6.png',
    description: 'Comfortable beds and WiFi...',
  },
  {
    id: 7,
    name: 'Triple Room',
    price: 110,
    rating: 4.6,
    image: '/src/assets/image/roomhotel7.png',
    description: 'Near tourist attractions...',
  },
  {
    id: 8,
    name: 'Ocean View Room',
    price: 220,
    rating: 4.5,
    image: '/src/assets/image/roomhotel8.png',
    description: 'Perfect for vacations...',
  },
])

const filteredHotels = computed(() => {
  return hotels.value.filter((hotel) => {
    const matchTitle = (hotel.name ?? "")
      .toLowerCase()
      .includes((searchTitle.value ?? "").toLowerCase())

    const matchLocation = (hotel.location ?? "")
      .toLowerCase()
      .includes((searchLocation.value ?? "").toLowerCase())

    return matchTitle && matchLocation
  })
})
</script>