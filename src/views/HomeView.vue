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

    <!-- HOTEL RESULT -->
    <div class="w-[90%] mx-auto mt-12">

      <h2 class="text-2xl font-bold mb-6 text-orange-500 hover:text-blue-500">
        Hotels Found : {{ filteredHotels.length }} 
      </h2>

      <div class="flex flex-wrap gap-6 justify-center">

        <div v-for="item in filteredHotels" :key="item.id" class="w-[90%] md:w-[45%] lg:w-[23%]">

          <!-- CARD -->
          <router-link :to="{ name: 'hotel-detail', params: { id: item.id } }"
            class="group bg-white rounded-2xl overflow-hidden border border-none shadow-sm hover:shadow-xl transition block ">

            <!-- IMAGE -->
            <div class="relative overflow-hidden w-full h-[80%]">

              <img :src="item.image" class="h-[250px] w-full object-cover group-hover:scale-110 transition duration-500"
                alt="" />
                <div class="absolute top-3 left-3 bg-white/90 text-xs px-2 py-1 rounded-full shadow">
                  <i class="bi bi-heart text-orange-300 hover:text-blue-300"></i>
                </div>
                <div class="absolute top-3 right-3 bg-white/90 text-xs px-2 py-1 rounded-full shadow">
                  ⭐  {{ item.rating }}

              </div>

            </div>

            <!-- CONTENT -->
            <div class="p-4 flex flex-col justify-between w-full h-[20%]">

              <div>

                <h2 class="font-semibold text-xl truncate text-orange-500 hover:text-blue-500">
                  {{ item.name }}
                </h2>

                <p class="text-sm text-gray-400 mt-2">
                  📍 {{ item.location }}
                </p>

                <p class="text-gray-500 text-sm mt-4 line-clamp-2">
                  {{ item.description }}
                </p>

              </div>

              <div class="flex items-center justify-between mt-5">

                <p class="text-blue-600 font-bold text-lg text-orange-500 hover:text-blue-500">
                  ${{ item.price }}
                  <span class="text-gray-400 text-sm">/ night</span>
                </p>

                <router-link to="/hotels" class="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-orange-600 transition">
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
    name: 'SkyWayHotel',
    location: 'Mountain Hotel',
    price: 120,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    description: 'A beautiful luxury hotel with ocean view, modern rooms, and excellent service. Perfect for vacation and relaxation.',
  },
  {
    id: 2,
    name: 'SkyWayHotel',
    location: 'Sihanoukville',
    price: 150,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
    description: 'Beachfront resort with ocean sunset and relaxing rooms.',
  },
  {
    id: 3,
    name: 'SkyWayHotel',
    location: 'Mondulkiri',
    price: 90,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
    description: 'Nature resort surrounded by mountains and fresh air.',
  },
  {
    id: 4,
    name: 'SkyWayHotel',
    location: 'Siem Reap',
    price: 110,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c',
    description: 'Modern boutique hotel near famous tourist attractions.',
  },
  {
    id: 5,
    name: 'SkyWayHotel',
    location: 'Siem Reap',
    price: 110,
    rating: 4.6,
    image:
      '/src/assets/card5.png',
    description: 'Modern boutique hotel near famous tourist attractions.',
  },
  {
    id: 6,
    name: 'SkyWayHotel',
    location: 'River side',
    price: 110,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c',
    description: 'Modern boutique hotel near famous tourist attractions.',
  },
  {
    id: 7,
    name: 'SkyWayHotel',
    location: 'kompot City',
    price: 110,
    rating: 4.6,
    image:
      '',
    description: 'Modern boutique hotel near famous tourist attractions.',
  },
  {
    id: 8,
    name: 'SkyWayHotel',
    location: 'Near Beach',
    price: 199,
    rating: 4.5,
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

<style scoped></style>