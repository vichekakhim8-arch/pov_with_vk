<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100 flex items-center justify-center p-6">

    <div class="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

      <!-- LEFT SIDE -->
      <div class="p-8 md:p-10 space-y-6 bg-white">

        <!-- TITLE -->
        <div>
          <h1 class="text-3xl font-bold text-gray-800">
            KHQR Payment
          </h1>
          <p class="text-gray-500 mt-1">
            Secure & fast payment system 🇰🇭
          </p>
        </div>

        <!-- HOTEL CARD -->
        <div class="bg-gray-50 border rounded-2xl p-5">
          <p class="text-xs text-gray-400">Hotel</p>
          <h2 class="text-xl font-semibold text-gray-800">
            {{ name }}
          </h2>
          <p class="text-sm text-gray-500 mt-1">
            📍 {{ location }}
          </p>
        </div>

        <!-- STATUS CARD -->
        <div class="rounded-2xl p-5 border bg-green-50 border-green-200">
          <h3 class="text-green-700 font-semibold text-lg">
            🙏 Thank you for your booking
          </h3>
          <p class="text-sm text-gray-600 mt-1">
            Scan QR code to complete your payment securely.
          </p>
        </div>

        <!-- INFO -->
        <div class="text-xs text-gray-400 leading-relaxed">
          Your reservation will be confirmed automatically after successful payment.
        </div>

      </div>

      <!-- RIGHT SIDE -->
      <div class="bg-gradient-to-b from-gray-50 to-white p-8 flex flex-col items-center justify-center">

        <!-- QR TITLE -->
        <p class="text-gray-600 font-medium mb-4">
          Scan to pay
        </p>

        <!-- QR CARD -->
        <div class="bg-white p-5 rounded-2xl shadow-lg border">
          <img :src="qrCode" class="w-56 h-56" />
        </div>

        <!-- BUTTON -->
        <button
          @click="payNow"
          class="mt-6 w-full max-w-xs bg-green-600 hover:bg-green-700 active:scale-95 transition text-white py-3 rounded-xl font-semibold shadow-md"
        >
          Confirm Payment
        </button>

        <!-- SUCCESS MESSAGE -->
        <div v-if="paid" class="mt-4 text-green-600 font-semibold flex items-center gap-2">
          <span>✅</span>
          Payment received successfully
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

const name = route.query.name ?? "Hotel Name"
const location = route.query.location ?? "Location not available"

const qrCode = computed(() =>
  `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=KHQR_PAYMENT_SUCCESS`
)

const paid = ref(false)

const payNow = () => {
  paid.value = true
}
</script>