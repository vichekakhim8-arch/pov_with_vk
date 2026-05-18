<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6 flex items-center justify-center">

    <div class="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden">

      <!-- HEADER -->
      <div class="bg-blue-600 text-white p-6 text-center">
        <h1 class="text-2xl font-bold">KHQR Payment</h1>
        <p class="text-sm opacity-80">Secure & Fast Payment 🇰🇭</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2">

        <!-- LEFT -->
        <div class="p-6 space-y-5">

          <!-- HOTEL INFO -->
          <div class="bg-gray-50 p-4 rounded-2xl border">
            <p class="text-gray-500 text-sm">Hotel</p>
            <h2 class="text-xl font-bold">{{ name }}</h2>
            <p class="text-gray-500 text-sm mt-1">📍 {{ location }}</p>
          </div>

          <!-- THANK YOU BOX -->
          <div class="bg-green-50 border border-green-200 p-5 rounded-2xl text-center">
            <p class="text-green-600 text-lg font-semibold">
              🙏 Thank you for your booking!
            </p>
            <p class="text-gray-600 text-sm mt-2">
              Please scan QR code to complete payment.
            </p>
          </div>

          <!-- NOTE -->
          <div class="text-xs text-gray-400 text-center">
            Your reservation will be confirmed after payment
          </div>

        </div>

        <!-- RIGHT -->
        <div class="p-6 flex flex-col items-center justify-center bg-gray-50">

          <p class="text-gray-600 mb-3 font-medium">
            Scan QR to pay
          </p>

          <div class="bg-white p-4 rounded-2xl shadow-md border">
            <img
              :src="qrCode"
              class="w-52 h-52"
            />
          </div>

          <button
            @click="payNow"
            class="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Comfirm Payment
          </button>

          <p v-if="paid" class="mt-4 text-green-600 font-bold">
            ✅ Thank you! Payment received
          </p>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

/* DATA ONLY (NO CALCULATION) */
const name = route.query.name ?? "Hotel Name"
const location = route.query.location ?? "Location not available"

/* QR */
const qrCode = computed(() => {
  return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=THANK_YOU`
})

/* PAYMENT */
const paid = ref(false)

const payNow = () => {
  paid.value = true
}
</script>