<template>
  <div class="min-h-screen bg-gray-100 flex flex-col lg:flex-row">

    <!-- LEFT SIDEBAR -->
    <div
      class="w-full lg:w-[320px] bg-white shadow-lg p-6 lg:p-8 flex flex-col"
    >

      <!-- TITLE -->
      <div>
        <h1
          class="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent"
        >
          My Dashboard
        </h1>

        <p class="text-gray-500 mt-2 text-sm lg:text-base">
          Manager bookings system
        </p>
      </div>

      <!-- PROFILE -->
      <div class="bg-gray-50 rounded-3xl shadow-md p-6 mt-8">

        <div class="flex items-center gap-4">

          <div class="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="https://i.pinimg.com/736x/f0/ae/91/f0ae91b8f72db7efbef0d3946f59b62f.jpg"
              alt=""
            >
          </div>

          <div>
            <h2 class="text-lg lg:text-xl font-semibold">
              GENZE
            </h2>

            <p class="text-gray-500 text-xs lg:text-sm break-all">
              komslkeey@ITsava.com
            </p>
          </div>

        </div>

      </div>

      <!-- MENU -->
      <div class="mt-8 space-y-3 text-base lg:text-lg">

        <router-link
          to="/hotels"
          class="w-full text-center block bg-blue-50 text-blue-600 px-4 py-3 rounded-xl"
        >
          <i class="bi bi-calendar-check mr-2"></i>
          Bookings
        </router-link>

        <button
          class="w-full hover:bg-gray-100 px-4 py-3 rounded-xl"
        >
          <i class="bi bi-person mr-2"></i>
          Profile
        </button>

        <button
          class="w-full text-red-500 hover:bg-red-50 px-4 py-3 rounded-xl"
        >
          <i class="bi bi-box-arrow-right mr-2"></i>
          Logout
        </button>

      </div>

    </div>

    <!-- RIGHT CONTENT -->
    <div class="flex-1 overflow-y-auto p-4 lg:p-6">

      <div class="max-w-7xl mx-auto">

        <!-- TITLE -->
        <h1 class="text-2xl font-bold mb-6">
          Booking Dashboard
        </h1>

        <!-- TOP CARDS -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6"
        >

          <!-- TOTAL CUSTOMERS -->
          <div
            class="bg-white p-5 rounded-2xl shadow-lg border-l-4 border-blue-500"
          >
            <p class="text-gray-400 text-sm">
              Total Customers
            </p>

            <h2 class="text-3xl font-bold text-blue-600 mt-2">
              {{ bookings.length }}
            </h2>
          </div>

          <!-- TOTAL REVENUE -->
          <div
            class="bg-white p-5 rounded-2xl shadow-lg border-l-4 border-green-500"
          >
            <p class="text-gray-400 text-sm">
              Total Revenue
            </p>

            <h2 class="text-3xl font-bold text-green-600 mt-2">
              ${{ totalRevenue }}
            </h2>
          </div>

          <!-- HIGHEST -->
          <div
            class="bg-white p-5 rounded-2xl shadow-lg border-l-4 border-orange-500"
          >
            <p class="text-gray-400 text-sm">
              Highest Booking
            </p>

            <h2 class="text-3xl font-bold text-orange-500 mt-2">
              ${{ highestPrice }}
            </h2>
          </div>

          <!-- LOWEST -->
          <div
            class="bg-white p-5 rounded-2xl shadow-lg border-l-4 border-red-500"
          >
            <p class="text-gray-400 text-sm">
              Lowest Booking
            </p>

            <h2 class="text-3xl font-bold text-red-500 mt-2">
              ${{ lowestPrice }}
            </h2>
          </div>

        </div>

        <!-- SEARCH -->
        <div class="bg-white p-4 rounded-2xl shadow-lg mb-6">

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

            <!-- SEARCH -->
            <input
              v-model="search"
              type="text"
              placeholder="Search customer..."
              class="border px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 w-full"
            >

            <!-- FILTER -->
            <select
              v-model="roomFilter"
              class="border px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 w-full"
            >
              <option value="">All Rooms</option>
              <option value="Single Room">Single Room</option>
              <option value="Double Room">Double Room</option>
              <option value="VIP">VIP</option>
            </select>

            <!-- RESET -->
            <button
              @click="resetAll"
              class="bg-red-500 hover:bg-red-600 text-white rounded-xl py-3 font-bold transition"
            >
              Reset
            </button>

          </div>

        </div>

        <!-- TABLE -->
        <div
          class="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
        >

          <div class="overflow-x-auto">

            <table class="w-full min-w-[900px] text-sm text-left">

              <!-- HEAD -->
              <thead class="bg-blue-600 text-white uppercase text-xs">

                <tr>
                  <th class="px-6 py-4 text-center">
                    Name
                  </th>

                  <th class="px-6 py-4 text-center">
                    Phone
                  </th>

                  <th class="px-6 py-4 text-center">
                    Email
                  </th>

                  <th class="px-6 py-4 text-center">
                    Room
                  </th>

                  <th class="px-6 py-4 text-center">
                    Nights
                  </th>

                  <th class="px-6 py-4 text-center">
                    Price
                  </th>

                  <th class="px-6 py-4 text-center">
                    Total
                  </th>

                  <th class="px-6 py-4 text-center">
                    Action
                  </th>
                </tr>

              </thead>

              <!-- BODY -->
              <tbody>

                <tr
                  v-for="(b, i) in filteredBookings"
                  :key="i"
                  class="border-t hover:bg-blue-50 transition"
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
                    <span
                      class="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-xs"
                    >
                      {{ b.room }}
                    </span>
                  </td>

                  <!-- NIGHTS -->
                  <td class="px-6 py-4">
                    {{ b.nights }}
                  </td>

                  <!-- PRICE -->
                  <td class="px-6 py-4">
                    ${{ b.price }}
                  </td>

                  <!-- TOTAL -->
                  <td class="px-6 py-4 font-bold text-blue-600">
                    ${{ b.total }}
                  </td>

                  <!-- ACTION -->
                  <td class="px-6 py-4">

                    <div class="flex flex-col sm:flex-row items-center justify-center gap-2">

                      <!-- EDIT -->
                      <button
                        @click="editBooking(i)"
                        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition w-full sm:w-auto"
                      >
                        <i class="bi bi-pencil-square mr-1"></i>
                        Edit
                      </button>

                      <!-- DELETE -->
                      <button
                        @click="deleteBooking(i)"
                        class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition w-full sm:w-auto"
                      >
                        <i class="bi bi-trash mr-1"></i>
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

                <!-- EMPTY -->
                <tr v-if="filteredBookings.length === 0">

                  <td
                    colspan="8"
                    class="text-center py-10 text-gray-400 text-base"
                  >
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
  bookings.value =
    JSON.parse(localStorage.getItem("bookings")) || []
})

const filteredBookings = computed(() => {
  let result = [...bookings.value]

  if (search.value) {
    result = result.filter((b) =>
      `${b.firstName} ${b.lastName}`
        .toLowerCase()
        .includes(search.value.toLowerCase())
    )
  }

  if (roomFilter.value) {
    result = result.filter(
      (b) => b.room === roomFilter.value
    )
  }

  return result
})

const totalRevenue = computed(() =>
  bookings.value.reduce(
    (sum, b) => sum + Number(b.total),
    0
  )
)

const highestPrice = computed(() =>
  bookings.value.length
    ? Math.max(
        ...bookings.value.map((b) =>
          Number(b.total)
        )
      )
    : 0
)

const lowestPrice = computed(() =>
  bookings.value.length
    ? Math.min(
        ...bookings.value.map((b) =>
          Number(b.total)
        )
      )
    : 0
)

const deleteBooking = (index) => {
  bookings.value.splice(index, 1)

  localStorage.setItem(
    "bookings",
    JSON.stringify(bookings.value)
  )
}

const editBooking = (index) => {
  const booking = bookings.value[index]

  const firstName = prompt(
    "Edit First Name",
    booking.firstName
  )

  const lastName = prompt(
    "Edit Last Name",
    booking.lastName
  )

  const phone = prompt(
    "Edit Phone",
    booking.phone
  )

  if (firstName !== null) {
    booking.firstName = firstName
  }

  if (lastName !== null) {
    booking.lastName = lastName
  }

  if (phone !== null) {
    booking.phone = phone
  }

  localStorage.setItem(
    "bookings",
    JSON.stringify(bookings.value)
  )
}

const resetAll = () => {
  bookings.value = []

  localStorage.removeItem("bookings")
}
</script>

<style scoped>
th {
  padding: 15px 10px;
}
</style>