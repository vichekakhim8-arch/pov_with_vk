<template>
  <div class="w-full min-h-screen bg-gray-50">

    <!-- HERO + IMAGE GALLERY -->
    <div class="relative w-full">

      <!-- MAIN IMAGE -->
      <div class="relative h-[350px] md:h-[450px] w-full">
        <img :src="selectedImage" class="w-full h-full object-cover transition duration-300"
          alt="hotel" />
        <div class="absolute inset-0 bg-black/40"></div>

        <!-- TITLE OVER IMAGE -->
        <div class="absolute bottom-6 left-6 text-white">
          <h1 class="text-3xl md:text-4xl font-bold">
            {{ hotel.name }}
          </h1>
          <p class="text-sm opacity-90">
            📍 {{ hotel.location }}
          </p>
        </div>
      </div>

    
      <!-- THUMBNAILS -->
      <div class="flex gap-3 mt-3 px-4 md:px-0 max-w-6xl mx-auto">
        <img v-for="(img, index) in images" ref=""
          :key="index"
          :src="img"
          @click="selectedImage = img"
          class="w-24 h-20 object-cover rounded-lg cursor-pointer border-2 transition"
          :class="selectedImage === img
            ? 'border-blue-500 scale-105' : 'border-transparent opacity-70 hover:opacity-100'"/>
      </div>

    </div>


   <!-- content -->
<div class="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

  <!-- LEFT SIDE -->
  <div class="lg:col-span-2 space-y-6">

    <!-- OVERVIEW -->
    <div class="bg-white p-6 rounded-2xl shadow-sm">
      <div class="flex justify-between items-center">
        <h2 class="text-2xl font-semibold">Overview</h2>

        <div class="flex items-center gap-1 text-yellow-500">
          ⭐ {{ hotel.rating }}
        </div>
      </div>

      <p class="text-gray-600 mt-4 leading-relaxed">
        {{ hotel.description }}
      </p>
    </div>

    <!-- AMENITIES -->
    <div class="bg-white p-6 rounded-2xl shadow-sm">
      <h2 class="text-xl font-semibold mb-4">Amenities</h2>

      <div class="grid  md:grid-cols-2 lg:grid-cols-2 gap-3">
        <div
          v-for="(item, i) in hotel.amenities"
          :key="i"
          class="bg-gray-100 px-3 py-2 rounded-lg text-sm text-gray-700"
        >
          ✔ {{ item }}
        </div>
      </div>
    </div>

  <!-- PRICE + BOOKING -->
<div class=" bg-white p-6 rounded-2xl shadow-sm ">

  <!-- badge -->
  <div class="flex items-center justify-between">
    <span class="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
      Best Deal 🔥
    </span>

    <div class="flex items-center text-yellow-500 text-sm">
      ⭐ {{ hotel.rating }}
    </div>
  </div>

  <!-- price -->
  <div class="mt-4">
    <p class="text-gray-500 text-sm flex items-center gap-1">
      💰 Price per night
    </p>

    <h2 class="text-4xl font-extrabold text-blue-600 mt-1">
      ${{ hotel.price }}
    </h2>

    <p class="text-xs text-gray-400 mt-1">
      Includes taxes & service fees
    </p>
  </div>

  <!-- buttons -->
 <router-link to="/booking" class="block text-center w-full mt-6 bg-blue-600 hover:bg-blue-700
       text-white py-3 rounded-xl font-semibold shadow-md transition">

       Booking Now

</router-link>

 

</div>

  </div>

  <!-- RIGHT SIDE -->
  <div class="space-y-6">

   <!-- LOCATION -->
<div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 sticky top-0 left-0 z-10">

  <div class="flex items-center gap-2 mb-3">
    <div class="w-9 h-9 bg-red-100 text-red-500 rounded-full flex items-center justify-center">
      📍
    </div>

    <h3 class="font-semibold text-lg">Location</h3>
  </div>

  <p class="text-gray-600 text-sm leading-relaxed">
    {{ hotel.location }}
  </p>

  <!-- map box -->
  <div class="mt-4 h-40 rounded-xl overflow-hidden relative bg-gray-100">

    <img
      src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
      class="w-full h-full object-cover opacity-80"
    />

    <!-- overlay -->
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
import { computed, ref } from "vue"
import { useRoute } from "vue-router"

/* ROUTE */
const route = useRoute()

/* HOTELS DATA */
const hotels = [
  {
    id: 1,
    name: "skyWay Hotel",
    location: "Kompot, Cambodia",
    rating: 4.8,
    price: 220,

    description:
      "A beautiful luxury hotel with ocean view, modern rooms, and excellent service. Perfect for vacation and relaxation.",

    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Breakfast Included",
      "Air Conditioning",
      "24/7 Reception",
      "Gym"
    ],

    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb210c7",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
    ]
  },

  {
    id: 2,
    name: "Ocean Paradise Hotel",
    location: "Siem Reap, Cambodia",
    rating: 4.9,
    price: 180,

    description:
      "Luxury stay near Angkor Wat with premium rooms and amazing swimming pool.",

    amenities: [
      "Spa",
      "Free Breakfast",
      "Airport Pickup",
      "Gym",
      "Free WiFi",
      "Bar"
    ],

    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb210c7",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
    ]
  },

  {
    id: 3,
    name: "Luxury Beach Resort",
    location: "Sihanoukville, Cambodia",
    rating: 4.5,
    price: 95,

    description:
      "Relaxing beach hotel with sea view and modern luxury rooms.",

    amenities: [
      "Beach Access",
      "Restaurant",
      "Free WiFi",
      "Swimming Pool",
      "Parking",
      "Room Service"
    ],

    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb210c7",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
    ]
  }
]

/* GET HOTEL BY ID */
const hotel = computed(() => {
  return hotels.find(h => h.id == route.params.id)
})

/* IMAGE GALLERY */
const selectedImage = ref(hotel.value.images[0])
const images = ref(hotel.value.images)
</script>