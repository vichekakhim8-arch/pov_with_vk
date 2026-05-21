<template>
  
  <div class="min-h-screen bg-gray-50 p-6">
    <router-link
        to="/hotels"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition"
      >
        <i class="bi bi-arrow-left"></i>
        Back
      </router-link>

    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

      <!-- LEFT -->
      <div class="lg:col-span-2 space-y-6">

        <h1 class="text-2xl font-bold text-gray-900">
          Book Your Stay
        </h1>

        <!-- ERROR CARD -->
        <div
          v-if="errorMessage"
          class="bg-red-100  border-red-300 text-red-700 p-4 rounded-2xl"
        >
          {{ errorMessage }}
        </div>

        <!-- GUEST INFO -->
        <div class="bg-white p-6 rounded-2xl shadow-lg space-y-4">

          <h2 class="font-semibold text-gray-800">
            Guest Information
          </h2>

          <input
            v-model="firstName"
            type="text"
            placeholder="First Name"
            class="w-full p-3 border rounded-xl"
          />

          <input
            v-model="lastName"
            type="text"
            placeholder="Last Name"
            class="w-full p-3 border rounded-xl"
          />

          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="w-full p-3 border rounded-xl"
          />

          <input
            v-model="phone"
            type="tel"
            placeholder="Phone"
            class="w-full p-3 border rounded-xl"
          />

        </div>

        <!-- DATES -->
        <div class="bg-white p-6 rounded-2xl  shadow-lg ">

          <h2 class="font-semibold mb-4">
            Stay Dates
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label class="text-sm text-gray-500">
                Check-in
              </label>

              <input
                type="date"
                v-model="checkIn"
                class="w-full p-3 border rounded-xl mt-1"
              />
            </div>

            <div>
              <label class="text-sm text-gray-500">
                Check-out
              </label>

              <input
                type="date"
                v-model="checkOut"
                class="w-full p-3 border rounded-xl mt-1"
              />
            </div>

          </div>

          <p class="mt-3 text-gray-600">
            Nights:
            <b>{{ nights }}</b>
          </p>

        </div>

      </div>

      <!-- RIGHT -->
      <div class="space-y-6">

        <!-- HOTEL CARD -->
        <div class="bg-white rounded-2xl  overflow-hidden shadow-lg">

          <!-- IMAGE -->
          <img
            :src="hotel.image"
            @error="handleImageError"
            class="h-40 w-full object-cover"
          />

          <!-- CONTENT -->
          <div class="p-4">

            <h2 class="font-semibold text-lg">
              {{ hotel.name }}
            </h2>

            <p class="text-gray-500 mt-1">
              {{ hotel.location }}
            </p>

            <p class="text-sm text-gray-600 mt-3">
              {{ hotel.description }}
            </p>

          </div>

        </div>

        <!-- PRICE -->
        <div class="bg-white p-5 rounded-2xl border shadow-sm space-y-3">

          <h3 class="font-semibold">
            Price Summary
          </h3>

          <div class="flex justify-between text-gray-600">
            <span>Price per night</span>
            <span>${{ hotel.price }}</span>
          </div>

          <div class="flex justify-between text-gray-600">
            <span>Nights</span>
            <span>{{ nights }}</span>
          </div>

          <div class="flex justify-between text-gray-600">
            <span>Service fee</span>
            <span>${{ serviceFee }}</span>
          </div>

          <hr />

          <div class="flex justify-between text-lg font-bold">

            <span>Total</span>

            <span class="text-blue-600">
              ${{ total }}
            </span>

          </div>

        </div>

        <!-- BUTTON -->
        <button
          @click="saveBooking"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
        >
          Confirm Booking
        </button>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useRouter } from "vue-router"

/* ROUTER */
const router = useRouter()

/* ERROR */
const errorMessage = ref("")

/* HOTEL */
const hotel = ref({
  name: "Luxury Hotel",
  location: "Phnom Penh",
  price: 120,
  image:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  description:
    "Luxury hotel with swimming pool and beautiful city view."
})

/* GUEST INFO */
const firstName = ref("")
const lastName = ref("")
const email = ref("")
const phone = ref("")

/* DATES */
const checkIn = ref("")
const checkOut = ref("")

/* SERVICE FEE */
const serviceFee = ref(10)

const MS_PER_DAY = 1000 * 60 * 60 * 24

/* NIGHTS */
const nights = computed(() => {

  if (!checkIn.value || !checkOut.value) {
    return 1
  }

  const start = new Date(checkIn.value)
  const end = new Date(checkOut.value)

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return 1
  }

  const diff = end.getTime() - start.getTime()

  const days = Math.ceil(diff / MS_PER_DAY)

  return days > 0 ? days : 1
})

/* TOTAL */
const total = computed(() => {
  return (hotel.value.price * nights.value) + serviceFee.value
})

/* IMAGE ERROR */
const handleImageError = (event) => {
  event.target.src =
    "https://via.placeholder.com/600x400?text=Hotel+Image"
}

/* SAVE BOOKING */
const saveBooking = () => {

  errorMessage.value = ""

  /* VALIDATION */
  if (
    !firstName.value ||
    !lastName.value ||
    !email.value ||
    !phone.value ||
    !checkIn.value ||
    !checkOut.value
  ) {

    errorMessage.value =
      "Please fill in all booking information."

    return
  }

  const newBooking = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    room: hotel.value.name,
    nights: nights.value,
    price: hotel.value.price,
    total: total.value
  }

  let bookings =
    JSON.parse(localStorage.getItem("bookings")) || []

  bookings.push(newBooking)

  localStorage.setItem(
    "bookings",
    JSON.stringify(bookings)
  )

  /* GO PAYMENT */
  router.push("/payment")
}
</script>