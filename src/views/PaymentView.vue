<template>
  <router-link
      to="/"
      class="m-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition"
    >
      <i class="bi bi-arrow-left"></i>
      Back
    </router-link>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 p-6">
    <div class="w-full max-w-5xl grid md:grid-cols-2 bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden border">

      <!-- LEFT SIDE -->
      <div class="p-10 space-y-6">

        <div>
          <h1 class="text-3xl font-bold text-gray-800">
            Choose Payment Method
          </h1>
          <p class="text-gray-500 mt-1">
            Select your preferred bank to complete payment
          </p>
        </div>

        <!-- HOTEL INFO -->
        <div class="p-5 rounded-2xl bg-white border shadow-sm">
          <h2 class="text-xl font-semibold text-gray-800">
            Welcome to Sky Way Hotel
          </h2>
          <p class="text-gray-500 text-sm mt-1">
            {{ location }}
          </p>
        </div>

        <!-- PAYMENT OPTIONS -->
        <div class="space-y-3">

          <button @click="select('ABA')" :class="btnClass('ABA')">
            <img src="/src/assets/logo/aba.png" class="w-10 h-10 object-contain" />
            <span>ABA Bank</span>
          </button>

          <button @click="select('WING')" :class="btnClass('WING')">
            <img src="/src/assets/logo/wing.png" class="w-10 h-10 object-contain" />
            <span>Wing Bank</span>
          </button>

          <button @click="select('ACLEDA')" :class="btnClass('ACLEDA')">
            <img src="/src/assets/logo/acleda.png" class="w-10 h-10 object-contain" />
            <span>ACLEDA Bank</span>
          </button>

          <button @click="select('KHQR')" :class="btnClass('KHQR')">
            <img src="/src/assets/logo/kh.png" class="w-10 h-10 object-contain" />
            <span>KHQR System</span>
          </button>

        </div>

        <!-- SELECTED -->
        <div v-if="selected" class="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
          <p class="text-emerald-700 font-semibold">
            Selected: {{ selected }}
          </p>
        </div>

      </div>

      <!-- RIGHT SIDE -->
      <div class="p-10 flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white">

        <p class="text-gray-600 font-medium mb-4">
          Payment QR Code
        </p>

        <!-- QR -->
        <div class="p-6 bg-white rounded-3xl shadow-xl border hover:scale-[1.02] transition">
          <img :src="qrCode" class="w-56 h-56" />
        </div>

        <!-- BUTTON -->
        <button
          @click="payNow"
          :disabled="isLoading"
          class="mt-6 w-full max-w-xs bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 active:scale-95 transition text-white py-3 rounded-xl font-semibold shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <svg
            v-if="isLoading"
            class="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"
          ></svg>

          <span v-if="!isLoading">Confirm Payment</span>
          <span v-else>Processing...</span>
        </button>

        <!-- SUCCESS -->
        <div v-if="paid" class="mt-4 text-emerald-600 font-semibold animate-pulse">
          Payment successful via {{ selected }}
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

const location = route.query.location ?? "Location not available"

const selected = ref("")
const paid = ref(false)
const isLoading = ref(false)

// select method
const select = (method) => {
  selected.value = method
  paid.value = false
}

// button style
const btnClass = (method) => [
  "w-full flex items-center gap-3 px-5 py-3 rounded-xl border transition font-medium",
  "hover:shadow-md hover:bg-gray-50",
  selected.value === method
    ? "bg-emerald-500 text-white border-emerald-500 shadow-lg"
    : "bg-white border-gray-200 text-gray-700"
]

// QR code
const qrCode = computed(() =>
  `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${selected.value || "KHQR"}_PAYMENT`
)

// payment
const payNow = () => {
  if (!selected.value) {
    alert("Please select payment method first")
    return
  }

  isLoading.value = true
  paid.value = false

  setTimeout(() => {
    isLoading.value = false
    paid.value = true
  }, 2000)
}
</script>