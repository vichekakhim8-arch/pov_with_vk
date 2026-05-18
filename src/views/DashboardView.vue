  <template>
    <div class="min-h-screen bg-gray-50 p-4 sm:p-6">

      <div class="max-w-6xl mx-auto">

        <h1 class="text-xl sm:text-2xl font-bold mb-6">
          Booking Dashboard
        </h1>

        <!-- TABLE WRAPPER -->
        <div class="bg-white rounded-2xl border overflow-x-auto">

          <table class="w-full min-w-[700px]">

            <thead class="bg-gray-100 text-xs sm:text-sm">
              <tr>
                <th class="p-3 text-left">Name</th>
                <th class="text-left">Email</th>
                <th class="text-left">Room</th>
                <th class="text-left">Nights</th>
                <th class="text-left">Price</th>
                <th class="text-left">Total</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>

            <tbody class="text-xs sm:text-sm">

              <tr
                v-for="(b, i) in bookings"
                :key="i"
                class="border-t hover:bg-gray-50"
              >
                <td class="p-3 font-medium">
                  {{ b.firstName }} {{ b.lastName }}
                </td>

                <td class="break-all">
                  {{ b.email }}
                </td>

                <td>{{ b.room }}</td>

                <td>{{ b.nights }}</td>

                <td>${{ b.price }}</td>

                <td class="text-blue-600 font-bold">
                  ${{ b.total }}
                </td>

                <!-- ACTION -->
                <td class="text-center space-x-1 sm:space-x-2">

                  <button
                    @click="deleteBooking(i)"
                    class="bg-red-500 hover:bg-red-600 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm"
                  >
                    Delete
                  </button>

                  <button
                    @click="resetAll"
                    class="bg-gray-600 hover:bg-gray-700 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm mt-1 sm:mt-0"
                  >
                    Reset
                  </button>

                </td>

              </tr>

              <!-- EMPTY -->
              <tr v-if="bookings.length === 0">
                <td colspan="7" class="text-center p-6 text-gray-500">
                  No bookings found
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </div>
  </template>

  <script setup>
  import { ref, onMounted } from "vue"

  const bookings = ref([])

  /* LOAD DATA */
  onMounted(() => {
    bookings.value = JSON.parse(localStorage.getItem("bookings")) || []
  })

  /* DELETE */
  const deleteBooking = (index) => {
    bookings.value.splice(index, 1)
    localStorage.setItem("bookings", JSON.stringify(bookings.value))
  }

  /* RESET */
  const resetAll = () => {
    bookings.value = []
    localStorage.removeItem("bookings")
  }
  </script>