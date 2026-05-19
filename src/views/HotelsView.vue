<template>
  <div class="min-h-screen bg-gray-50">

    <!-- HERO SECTION -->
    <HotelSection />

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

    <!-- BODY -->
    <div
      class="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 p-4 lg:p-6"
    >

      <!-- SIDEBAR -->
      <div class="w-full lg:w-[240px] flex-shrink-0">

        <div
          class="bg-white p-4 sm:p-5 rounded-2xl border shadow-sm sticky top-4"
        >

          <h2 class="text-lg sm:text-xl font-serif font-medium mb-5">
            Filters
          </h2>

          <!-- PRICE -->
          <p class="text-xs uppercase tracking-widest text-gray-400 mb-3">
            Price Range
          </p>

          <div class="grid grid-cols-2 lg:grid-cols-1 gap-2 mb-4 text-sm">
            <label>
              <input type="radio" value="" v-model="price" />
              All
            </label>

            <label>
              <input type="radio" value="low" v-model="price" />
              Under $150
            </label>

            <label>
              <input type="radio" value="mid" v-model="price" />
              $150 - $200
            </label>

            <label>
              <input type="radio" value="high" v-model="price" />
              $200+
            </label>
          </div>

          <hr class="my-4" />

          <!-- RATING -->
          <p class="text-xs uppercase tracking-widest text-gray-400 mb-3">
            Rating
          </p>

          <div class="grid grid-cols-2 lg:grid-cols-1 gap-2 mb-4 text-sm">
            <label>
              <input type="radio" value="all" v-model="rating" />
              All
            </label>

            <label>
              <input type="radio" value="4" v-model="rating" />
              4★+
            </label>

            <label>
              <input type="radio" value="4.5" v-model="rating" />
              4.5★+
            </label>
          </div>

          <hr class="my-4" />

          <!-- SORT -->
          <p class="text-xs uppercase tracking-widest text-gray-400 mb-3">
            Sort
          </p>

          <select
            v-model="sort"
            class="w-full border p-2 rounded-xl mb-4 text-sm"
          >
            <option value="">Default</option>
            <option value="priceLow">Price Low → High</option>
            <option value="priceHigh">Price High → Low</option>
            <option value="rating">Rating</option>
          </select>

          <!-- CLEAR -->
          <button
            @click="clearFilters"
            class="w-full border text-gray-500 py-2 rounded-xl hover:bg-gray-50 text-sm"
          >
            Clear Filters
          </button>

        </div>
      </div>

      <!-- HOTELS -->
      <div class="flex-1 min-w-0">

        <p class="text-gray-500 text-sm mb-4">
          {{ filteredHotels.length }} hotels found
        </p>

        <!-- GRID -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          <!-- CARD -->
          <div
            v-for="item in filteredHotels"
            :key="item.id"
            class="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition group"
          >

            <!-- IMAGE -->
            <div class="relative overflow-hidden h-60">

              <img
                :src="item.image"
                class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                alt="hotel"
              />

              <div
                class="absolute top-3 right-3 bg-white/90 text-xs px-2 py-1 rounded-full shadow"
              >
                ⭐ {{ item.rating }}
              </div>

            </div>

            <!-- CONTENT -->
            <div class="p-4 flex flex-col justify-between">

              <div>

                <h2 class="font-semibold text-gray-900 text-xl truncate">
                  {{ item.name }}
                </h2>

                <p class="text-sm text-gray-400 mt-2">
                  📍 {{ item.location }}
                </p>

                <p class="text-gray-500 text-sm mt-4 line-clamp-3">
                  Beautiful luxury hotel with amazing service and relaxing rooms.
                </p>

              </div>

              <!-- FOOTER -->
              <div class="flex items-center justify-between mt-5">

                <p class="text-blue-600 font-bold text-lg">
                  ${{ item.price }}
                  <span class="text-gray-400 text-sm">
                    / night
                  </span>
                </p>

                <router-link
                  :to="{ name: 'hotel-detail', params: { id: item.id } }"
                  class="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                  View
                </router-link>

              </div>

            </div>

          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import HotelSection from '../components/hotel/HotelSection.vue'

/* SEARCH */
const searchTitle = ref('')
const searchLocation = ref('')

/* FILTERS */
const price = ref('')
const rating = ref('all')
const sort = ref('')

/* HOTELS */
const hotels = ref([
  {
    id: 1,
    name: 'Beach House',
    location: 'Krabi, Thailand',
    price: 180,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
  },

  {
    id: 2,
    name: 'Grand Luxury Hotel',
    location: 'New York, USA',
    price: 299,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb'
  },

  {
    id: 3,
    name: 'Ocean View Resort',
    location: 'Bali, Indonesia',
    price: 220,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'
  },

  {
    id: 4,
    name: 'Mountain Escape',
    location: 'Swiss Alps',
    price: 350,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85'
  },

  {
    id: 5,
    name: 'City Lights Hotel',
    location: 'Tokyo, Japan',
    price: 199,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a'
  }
])

/* FILTER + SEARCH + SORT */
const filteredHotels = computed(() => {

  let result = [...hotels.value]

  /* SEARCH TITLE */
  if (searchTitle.value) {
    result = result.filter(h =>
      h.name.toLowerCase().includes(
        searchTitle.value.toLowerCase()
      )
    )
  }

  /* SEARCH LOCATION */
  if (searchLocation.value) {
    result = result.filter(h =>
      h.location.toLowerCase().includes(
        searchLocation.value.toLowerCase()
      )
    )
  }

  /* PRICE */
  if (price.value === 'low') {
    result = result.filter(h => h.price < 150)
  }

  if (price.value === 'mid') {
    result = result.filter(
      h => h.price >= 150 && h.price <= 200
    )
  }

  if (price.value === 'high') {
    result = result.filter(h => h.price > 200)
  }

  /* RATING */
  if (rating.value === '4') {
    result = result.filter(h => h.rating >= 4)
  }

  if (rating.value === '4.5') {
    result = result.filter(h => h.rating >= 4.5)
  }

  /* SORT */
  if (sort.value === 'priceLow') {
    result.sort((a, b) => a.price - b.price)
  }

  if (sort.value === 'priceHigh') {
    result.sort((a, b) => b.price - a.price)
  }

  if (sort.value === 'rating') {
    result.sort((a, b) => b.rating - a.rating)
  }

  return result
})

/* CLEAR FILTERS */
const clearFilters = () => {
  searchTitle.value = ''
  searchLocation.value = ''
  price.value = ''
  rating.value = 'all'
  sort.value = ''
}
</script>