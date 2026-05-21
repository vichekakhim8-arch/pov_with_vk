<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">

    <div class="relative w-full max-w-md rounded-2xl p-[2px] overflow-hidden">

      <!-- BACKGROUND ANIMATION -->
      <div class="absolute -inset-10 animate-spin-slow bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <!-- LOGIN CARD -->
      <div class="relative bg-white rounded-2xl p-8">

        <!-- TITLE -->
        <h1 class="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
          Login
        </h1>

        <p class="text-center text-gray-500 mt-2">
          Welcome back, please login
        </p>

        <!-- FORM -->
        <form class="mt-6 space-y-4" @submit.prevent="login">

          <!-- EMAIL -->
          <div>
            <label class="text-sm font-medium text-gray-700">Email</label>

            <div class="relative mt-1">
              <input
                v-model="email"
                type="email"
                placeholder="Enter your email"
                class="w-full px-4 py-2 border rounded-md outline-none"
                :class="emailError ? 'border-red-500' : 'border-gray-300'"
              />
            </div>

            <p v-if="emailError" class="text-red-500 text-sm mt-1">
              {{ emailError }}
            </p>
          </div>

          <!-- PASSWORD -->
          <div>
            <label class="text-sm font-medium text-gray-700">Password</label>

            <div class="relative mt-1">
              <input
                v-model="password"
                type="password"
                placeholder="Enter your password"
                class="w-full px-4 py-2 border rounded-md outline-none"
                :class="passwordError ? 'border-red-500' : 'border-gray-300'"
              />
            </div>

            <p v-if="passwordError" class="text-red-500 text-sm mt-1">
              {{ passwordError }}
            </p>
          </div>

          <!-- FORGOT PASSWORD -->
          <div class="flex justify-end">
            <a href="#" class="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <!-- BUTTON -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-2 rounded-md font-semibold transition"
          >
            <span v-if="!loading">Login</span>

            <span v-else class="flex items-center justify-center gap-2">
              <svg
                class="animate-spin h-5 w-5"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                  fill="none"
                />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>

              Loading...
            </span>
          </button>

        </form>

        <!-- FOOTER -->
        <p class="text-center text-sm text-gray-500 mt-6">
          Don't have an account?

          <router-link to="/register" class="text-blue-500 hover:underline">
            Sign up
          </router-link>
        </p>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const email = ref("")
const password = ref("")

const emailError = ref("")
const passwordError = ref("")
const loading = ref(false)

const login = async () => {
  emailError.value = ""
  passwordError.value = ""

  if (!email.value) {
    emailError.value = "Email is required"
  }

  if (!password.value) {
    passwordError.value = "Password is required"
  }

  if (emailError.value || passwordError.value) return

  loading.value = true

  try {
    // fake API request
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Login:", email.value, password.value)

    router.push("/")
  } finally {
    loading.value = false
  }
}
</script>

<style>
@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 15s linear infinite;
}
</style>