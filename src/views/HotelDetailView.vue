<template>
  <div class="w-full min-h-screen bg-gray-50">

    <!-- HERO + IMAGE GALLERY -->
    <div class="relative w-full">

      <!-- MAIN IMAGE -->
      <div class="relative h-[350px] md:h-[450px] w-full">
        <img
          :src="selectedImage"
          class="w-full h-full object-cover transition duration-300"
          alt="hotel"
        />
        <div class="absolute inset-0 bg-black/40"></div>

        <!-- TITLE OVER IMAGE -->
        <div class="absolute bottom-6 left-6 text-white">
          <h1 class="text-3xl md:text-4xl font-bold">
            {{ hotel?.name }}
          </h1>
          <p class="text-sm opacity-90 py-2">
            {{ hotel?.location }}
          </p>
        </div>
      </div>

      <!-- THUMBNAILS -->
      <div class="flex gap-3 m-3 px-4 md:px-0 max-w-6xl lg:mx-auto ">
        <img
          v-for="(img, index) in images"
          :key="index"
          :src="img"
          @click="selectedImage = img"
          class="w-24 h-20 object-cover rounded-lg cursor-pointer border-2 transition"
          :class="selectedImage === img
            ? 'border-blue-500 scale-105'
            : 'border-transparent opacity-70 hover:opacity-100'"
        />
      </div>

    </div>


     <router-link
      to="/hotels"
      class="m-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition"
    >
      <i class="bi bi-arrow-left"></i>
      Back
    </router-link>
    <!-- CONTENT -->
    <div class="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

      <!-- LEFT SIDE -->
      <div class="lg:col-span-2 space-y-6">

        <!-- OVERVIEW -->
        <div class="bg-white p-6 rounded-2xl shadow-sm">
          <div class="flex justify-between items-center">
            <h2 class="text-2xl font-semibold">Overview</h2>

            <div class="flex items-center gap-1 text-yellow-500">
              {{ hotel?.rating }}
            </div>
          </div>

          <p class="text-gray-600 mt-4 leading-relaxed">
            {{ hotel?.description }}
          </p>
        </div>

        <!-- AMENITIES -->
        <div class="bg-white p-6 rounded-2xl shadow-sm">
          <h2 class="text-xl font-semibold mb-4">Amenities</h2>

          <div class="grid md:grid-cols-2 gap-3">
            <div
              v-for="(item, i) in hotel?.amenities"
              :key="i"
              class="bg-gray-100 px-3 py-2 rounded-lg text-sm text-gray-700"
            >
              {{ item }}
            </div>
          </div>
        </div>

        <!-- PRICE + BOOKING -->
        <div class="bg-white p-6 rounded-2xl shadow-sm">

          <div class="flex items-center justify-between">
            <span class="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
              Best Deal
            </span>

            <div class="flex items-center text-yellow-500 text-sm">
              {{ hotel?.rating }}
            </div>
          </div>

          <div class="mt-4">
            <p class="text-gray-500 text-sm">
              Price per night
            </p>

            <h2 class="text-4xl font-extrabold text-orange-600 mt-1">
              ${{ hotel?.price }}
            </h2>

            <p class="text-xs text-gray-400 mt-1">
              Includes taxes & service fees
            </p>
          </div>

          <router-link
            to="/booking"
            class="block text-center w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-md transition"
          >
            Booking Now
          </router-link>

        </div>

      </div>

      <!-- RIGHT SIDE -->
      <div class="space-y-6">

        <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 sticky top-0">

          <h1 class="text-3xl md:text-2xl font-bold">
            {{ hotel?.name }}
          </h1>

          <p class="text-gray-600 text-sm leading-relaxed">
            {{ hotel?.location }}
          </p>

          <div class="mt-4 h-96 rounded-xl overflow-hidden relative bg-gray-100">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62749.57605654387!2d104.12695762982489!3d10.591015444849269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310836897d5fd26f%3A0x6f50ed443bd607ff!2sKampot!5e0!3m2!1sen!2skh!4v1779356423904!5m2!1sen!2skh" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <div class="absolute inset-0 bg-black/20 flex items-center justify-center">
              <span class="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm shadow">
                Open Map View
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

const hotels = ref([
  {
    id: 1,
    name: 'Single Room',
    price: 120,
    rating: 4.8,
    image: '/src/assets/image/roomhotel1.png',
    description: 'A beautiful luxury hotel...',
    location: 'Kampot',
    images: [
      '/src/assets/image/roomhotel1.png',
      '/src/assets/image/roomhotel2.png',
      '/src/assets/image/roomhotel3.png'
    ],
    amenities: ['Free WiFi', 'Air Conditioning', 'Smart TV', 'Breakfast Included']
  },
  {
    id: 2,
    name: 'Honeymoon room',
    price: 220,
    rating: 4.7,
    image: '/src/assets/image/roomhotel2.png',
    description: 'Welcome to SkyWayHotel...',
    location: 'Kampot',
    images: [
      '/src/assets/image/roomhotel2.png',
      '/src/assets/image/roomhotel3.png',
      '/src/assets/image/roomhotel4.png'
    ],
    amenities: ['Free WiFi', 'Pool Access', 'Breakfast', 'Room Service']
  },
  {
    id: 3,
    name: 'Double Room',
    price: 180,
    rating: 4.5,
    image: '/src/assets/image/roomhotel3.png',
    description: 'Modern rooms...',
    location: 'Kampot',
    images: [
      '/src/assets/image/roomhotel3.png',
      '/src/assets/image/roomhotel4.png',
      '/src/assets/image/roomhotel5.png'
    ],
    amenities: ['Free WiFi', 'Air Conditioning', 'TV', 'Parking']
  },
  {
    id: 4,
    name: 'Triple Room',
    price: 250,
    rating: 4.6,
    image: '/src/assets/image/roomhotel4.png',
    description: 'Boutique hotel...',
    location: 'Kampot',
    images: [
      '/src/assets/image/roomhotel4.png',
      '/src/assets/image/roomhotel5.png',
      '/src/assets/image/roomhotel6.png'
    ],
    amenities: ['Free WiFi', 'Breakfast', 'Gym', 'Spa']
  },
  {
    id: 5,
    name: 'Premium Family Rooml',
    price: 250,
    rating: 4.6,
    image: '/src/assets/image/roomhotel5.png',
    description: 'Comfortable stay...',
    location: 'Kampot',
    images: [
      '/src/assets/image/roomhotel5.png',
      '/src/assets/image/roomhotel6.png',
      '/src/assets/image/roomhotel7.png'
    ],
    amenities: ['WiFi', 'Family Space', 'TV', 'Kitchen']
  },
  {
    id: 6,
    name: 'Family Room',
    price: 280,
    rating: 4.3,
    image: '/src/assets/image/roomhotel6.png',
    description: 'Spacious rooms...',
    location: 'Kampot',
    images: [
      '/src/assets/image/roomhotel6.png',
      '/src/assets/image/roomhotel7.png',
      '/src/assets/image/roomhotel8.png'
    ],
    amenities: ['Free WiFi', 'AC', 'Breakfast', 'Pool']
  },
  {
    id: 7,
    name: 'Triple Room',
    price: 110,
    rating: 4.6,
    image: '/src/assets/image/roomhotel7.png',
    description: 'Affordable stay...',
    location: 'Kompot',
    images: [
      '/src/assets/image/roomhotel7.png',
      '/src/assets/image/roomhotel8.png',
      '/src/assets/image/roomhotel1.png'
    ],
    amenities: ['WiFi', 'Parking', 'TV', 'Fan']
  },
  {
    id: 8,
    name: 'Ocean View Room',
    location: 'Near Beach',
    price: 220,
    rating: 4.5,
    image: '/src/assets/image/roomhotel8.png',
    description: 'Perfect vacation spot...',
    images: [
      '/src/assets/image/roomhotel8.png',
      '/src/assets/image/roomhotel1.png',
      '/src/assets/image/roomhotel2.png'
    ],
    amenities: ['Ocean View', 'WiFi', 'Breakfast', 'Balcony']
  },
])

const hotel = computed(() => {
  return hotels.value.find(h => h.id == route.params.id)
})

const selectedImage = ref("")
const images = ref([])

watch(
  hotel,
  (val) => {
    if (val) {
      images.value = val.images?.length ? val.images : [val.image]
      selectedImage.value = images.value[0]
    }
  },
  { immediate: true }
)
</script>