<template>
  <div class="w-full h-screen bg-gray-100 flex">

    <!-- Dasborad design -->
    <div class="w-[320px] h-full bg-white shadow-lg p-8 flex flex-col">

      <!-- My Dashboard -->
      <div>
        <h1 class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
          My Dashboard
        </h1>

        <p class="text-gray-500 mt-2">
          Manager bookings system
        </p>
      </div>

      <!-- Profile dasborad -->
      <div class="bg-gray-50 rounded-3xl shadow-md p-6 mt-10">

        <div class="flex items-center gap-4">
          <div class="w-25  rounded-full bg-blue-100 flex items-center justify-center">
            <img class="rounded-full" src="https://i.pinimg.com/736x/f0/ae/91/f0ae91b8f72db7efbef0d3946f59b62f.jpg" alt="">
          </div>

          <div>
            <h2 class="text-xl font-semibold">GENZE</h2>
            <p class="text-gray-500">komslkeey@ITsava.com</p>
          </div>
        </div>

      </div>

      <!-- Menu Profile -->
      <div class="mt-10 space-y-3 text-xl">

        <button class="w-full bg-blue-50 text-blue-600 px-4 py-3 rounded-xl">
          Bookings
        </button>

        <button class="w-full hover:bg-gray-100 px-4 py-3 rounded-xl">
          Profile
        </button>

        <button class="w-full text-red-500 hover:bg-red-50 px-4 py-3 rounded-xl">
          Logout
        </button>

      </div>

    </div>

    <!-- Right content -->
    <div class="flex-1 h-full overflow-y-auto p-6">

      <div class="max-w-7xl mx-auto">

        <!-- Tiltle -->
        <h1 class="text-2xl font-bold mb-6">
          Booking Dashboard
        </h1>

        <!-- TOP CARDS -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <!-- Total Customers -->
          <div class="bg-white p-5 rounded-2xl shadow-lg hover:border-l-4 hover:border-blue-500">
            <p class="text-gray-400 text-sm">Total Customers</p>
            <h2 class="text-3xl font-bold text-blue-600 mt-2">
              {{ bookings.length }}
            </h2>
          </div>
          <!-- Total Revenue -->
          <div class="bg-white p-5 rounded-2xl shadow-lg hover:border-l-4 hover:border-green-500 shadow-lg hover:border-l-4 hover:border-blue-500">
            <p class="text-gray-400 text-sm">Total Revenue</p>
            <h2 class="text-3xl font-bold text-green-600 mt-2">
              ${{ totalRevenue }}
            </h2>
          </div>
          <!-- Highest Booking -->
          <div class="bg-white p-5 rounded-2xl  shadow-lg  hover:border-l-4 hover:border-orange-500">
            <p class="text-gray-400 text-sm">Highest Booking</p>
            <h2 class="text-3xl font-bold text-orange-500 mt-2">
              ${{ highestPrice }}
            </h2>
          </div>
          <!-- Lowest Booking -->
          <div class="bg-white p-5 rounded-2xl shadow-lg hover:border-l-4 hover:border-red-500">
            <p class="text-gray-400 text-sm">Lowest Booking</p>
            <h2 class="text-3xl font-bold text-red-500 mt-2">
              ${{ lowestPrice }}
            </h2>
          </div>

        </div>

        <!-- for search and find room -->
        <div class="bg-white p-4 rounded-2xl shadow-lg mb-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

            <input
              v-model="search"
              type="text"
              placeholder="Search customer..."
              class="border px-4 py-3 rounded-xl"
            />

            <select
              v-model="roomFilter"
              class="border px-4 py-3 rounded-lg"
            >
              <option value="">All Rooms</option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="VIP">VIP</option>
            </select>

            <button
              @click="resetAll"
              class="bg-red-500 text-white rounded-xl py-3 text-xl font-bold"
            >
              Reset
            </button>

          </div>
        </div>

        <!-- TABLE -->
<div class="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden ">

  <!-- TABLE WRAPPER -->
  <div class="overflow-x-auto">

    <table class="w-full min-w-[900px] text-sm text-left">

      <!-- HEADER -->
      <thead class="bg-gray-50 text-gray-700 uppercase text-xs tracking-wider">
        <tr class="bg-blue-600 ">
          <th class="px-6 py-4 text-center text-white ">Name</th>
          <th class="px-6 py-4 text-center text-white ">Phone</th>
          <th class="px-6 py-4 text-center text-white ">Email</th>
          <th class="px-6 py-4 text-center text-white ">Room</th>
          <th class="px-6 py-4 text-center text-white ">Nights</th>
          <th class="px-6 py-4 text-center text-white ">Price</th>
          <th class="px-6 py-4 text-center text-white ">Total</th>
          <th class="px-6 py-4 text-center text-white ">Action</th>
        </tr>
      </thead>

      <!-- BODY -->
      <tbody>

        <tr
          v-for="(b, i) in filteredBookings"
          :key="i"
          class="border-t hover:bg-blue-50 transition duration-200"
        >
          <!-- NAME -->
          <td class="px-6 py-4 font-semibold text-gray-800">
            {{ b.firstName }} {{ b.lastName }}
          </td>

          <!-- PHONE -->
          <td class="px-6 py-4 text-gray-600">
            {{ b.phone }}
          </td>

          <!-- EMAIL -->
          <td class="px-6 py-4 text-gray-600 break-all">
            {{ b.email }}
          </td>

          <!-- ROOM -->
          <td class="px-6 py-4">
            <span class="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-xs">
              {{ b.room }}
            </span>
          </td>

          <!-- NIGHTS -->
          <td class="px-6 py-4 text-gray-700 font-medium">
            {{ b.nights }}
          </td>

          <!-- PRICE -->
          <td class="px-6 py-4 text-gray-700">
            ${{ b.price }}
          </td>

          <!-- TOTAL -->
          <td class="px-6 py-4 font-bold text-blue-600 text-base">
            ${{ b.total }}
          </td>

          <!-- ACTION -->
          <td class="px-6 py-4 text-center">
            <button
              @click="deleteBooking(i)"
              class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl shadow-md transition duration-200"
            >
              Delete
            </button>
          </td>
        </tr>

        <!-- EMPTY -->
        <tr v-if="filteredBookings.length === 0">
          <td colspan="8" class="text-center py-10 text-gray-400 text-base">
            No bookings found
          </td>
        </tr>

      </tbody>
    </table>

  </div>
</div>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"

const bookings = ref([])
const search = ref("")
const roomFilter = ref("")

onMounted(() => {
  bookings.value = JSON.parse(localStorage.getItem("bookings")) || []
})

const filteredBookings = computed(() => {
  let result = [...bookings.value]

  if (search.value) {
    result = result.filter(b =>
      `${b.firstName} ${b.lastName}`
        .toLowerCase()
        .includes(search.value.toLowerCase())
    )
  }

  if (roomFilter.value) {
    result = result.filter(b => b.room === roomFilter.value)
  }

  return result
})

const totalRevenue = computed(() =>
  bookings.value.reduce((sum, b) => sum + Number(b.total), 0)
)

const highestPrice = computed(() =>
  bookings.value.length
    ? Math.max(...bookings.value.map(b => Number(b.total)))
    : 0
)

const lowestPrice = computed(() =>
  bookings.value.length
    ? Math.min(...bookings.value.map(b => Number(b.total)))
    : 0
)

const deleteBooking = (index) => {
  bookings.value.splice(index, 1)
  localStorage.setItem("bookings", JSON.stringify(bookings.value))
}

const resetAll = () => {
  bookings.value = []
  localStorage.removeItem("bookings")
}
</script>
<style scoped>
  th{
    padding: 15px 10px;
    
  }
</style>