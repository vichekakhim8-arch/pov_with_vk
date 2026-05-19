<template>
  <div class="w-full h-screen bg-gray-100 flex">

    <!-- LEFT SIDEBAR -->
    <div class="w-[320px] h-full bg-white shadow-lg p-8 flex flex-col">

      <!-- TITLE -->
      <div>
        <h1 class="text-4xl font-bold">
          My Dashboard
        </h1>

        <p class="text-gray-500 mt-2">
          Manage bookings system
        </p>
      </div>

      <!-- PROFILE -->
      <div class="bg-gray-50 rounded-3xl shadow-md p-6 mt-10">

        <div class="flex items-center gap-4">
          <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            👤
          </div>

          <div>
            <h2 class="text-xl font-semibold">John Doe</h2>
            <p class="text-gray-500">john@example.com</p>
          </div>
        </div>

      </div>

      <!-- MENU -->
      <div class="mt-10 space-y-3">

        <button class="w-full bg-blue-50 text-blue-600 px-4 py-3 rounded-xl">
          📅 Bookings
        </button>

        <button class="w-full hover:bg-gray-100 px-4 py-3 rounded-xl">
          👤 Profile
        </button>

        <button class="w-full text-red-500 hover:bg-red-50 px-4 py-3 rounded-xl">
          ↪ Logout
        </button>

      </div>

    </div>

    <!-- RIGHT CONTENT -->
    <div class="flex-1 h-full overflow-y-auto p-6">

      <div class="max-w-7xl mx-auto">

        <!-- TITLE -->
        <h1 class="text-2xl font-bold mb-6">
          Booking Dashboard
        </h1>

        <!-- TOP CARDS -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

          <div class="bg-white p-5 rounded-2xl border">
            <p class="text-gray-400 text-sm">Total Customers</p>
            <h2 class="text-3xl font-bold text-blue-600 mt-2">
              {{ bookings.length }}
            </h2>
          </div>

          <div class="bg-white p-5 rounded-2xl border">
            <p class="text-gray-400 text-sm">Total Revenue</p>
            <h2 class="text-3xl font-bold text-green-600 mt-2">
              ${{ totalRevenue }}
            </h2>
          </div>

          <div class="bg-white p-5 rounded-2xl border">
            <p class="text-gray-400 text-sm">Highest Booking</p>
            <h2 class="text-3xl font-bold text-orange-500 mt-2">
              ${{ highestPrice }}
            </h2>
          </div>

          <div class="bg-white p-5 rounded-2xl border">
            <p class="text-gray-400 text-sm">Lowest Booking</p>
            <h2 class="text-3xl font-bold text-red-500 mt-2">
              ${{ lowestPrice }}
            </h2>
          </div>

        </div>

        <!-- FILTER -->
        <div class="bg-white p-4 rounded-2xl border mb-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

            <input
              v-model="search"
              type="text"
              placeholder="Search customer..."
              class="border px-4 py-3 rounded-xl"
            />

            <select
              v-model="roomFilter"
              class="border px-4 py-3 rounded-xl"
            >
              <option value="">All Rooms</option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="VIP">VIP</option>
            </select>

            <button
              @click="resetAll"
              class="bg-red-500 text-white rounded-xl py-3"
            >
              Reset
            </button>

          </div>
        </div>

        <!-- TABLE -->
        <div class="bg-white rounded-2xl border overflow-x-auto">

          <table class="w-full min-w-[900px]">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-3 text-left">Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Room</th>
                <th>Nights</th>
                <th>Price</th>
                <th>Total</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>

            <tbody>

              <tr
                v-for="(b, i) in filteredBookings"
                :key="i"
                class="border-t hover:bg-gray-50"
              >
                <td class="p-3">
                  {{ b.firstName }} {{ b.lastName }}
                </td>

                <td>{{ b.phone }}</td>
                <td class="break-all">{{ b.email }}</td>
                <td>{{ b.room }}</td>
                <td>{{ b.nights }}</td>
                <td>${{ b.price }}</td>
                <td class="text-blue-600 font-bold">
                  ${{ b.total }}
                </td>

                <td class="text-center">
                  <button
                    @click="deleteBooking(i)"
                    class="bg-red-500 text-white px-3 py-1 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>

              <tr v-if="filteredBookings.length === 0">
                <td colspan="8" class="text-center p-6 text-gray-500">
                  No bookings found
                </td>
              </tr>

            </tbody>
          </table>

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