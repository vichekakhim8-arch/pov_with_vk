<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">

    <!-- BORDER WRAPPER -->
    <div class="relative w-full max-w-md rounded-2xl p-[2px] overflow-hidden">

      <!-- ANIMATED BORDER -->
      <div class=" absolute -inset-0 animate-spin-slow bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 "></div>

      <!-- LOGIN CARD -->
      <div class="relative bg-white rounded-2xl p-8">

        <!-- TITLE -->
        <h1 class="text-3xl font-bold text-center text-blue-600">
          HotelBooker
        </h1>

        <p class="text-center text-gray-500 mt-2">
          Welcome back Please login
        </p>

        <!-- FORM -->
        <form class="mt-6 space-y-4" @submit.prevent="login">

          <!-- EMAIL -->
          <div>

            <label class="text-sm font-medium text-gray-700">
              Email
            </label>

            <div class="relative mt-1">

              <!-- ICON -->
              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                📧
              </span>

              <input
                v-model="email"
                type="email"
                placeholder="Enter your email"
                class="w-full pl-10 pr-4 py-2 border rounded-md outline-none"
                :class="emailError ? 'border-red-500' : 'border-gray-300'"
              />

            </div>

            <!-- ERROR -->
            <p
              v-if="emailError"
              class="text-red-500 text-sm mt-1"
            >
              {{ emailError }}
            </p>

          </div>

          <!-- PASSWORD -->
          <div>

            <label class="text-sm font-medium text-gray-700">
              Password
            </label>

            <div class="relative mt-1">

              <!-- ICON -->
              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔒
              </span>

              <input
                v-model="password"
                type="password"
                placeholder="Enter your password"
                class="w-full pl-10 pr-4 py-2 border rounded-md outline-none"
                :class="passwordError ? 'border-red-500' : 'border-gray-300'"
              />

            </div>

            <!-- ERROR -->
            <p
              v-if="passwordError"
              class="text-red-500 text-sm mt-1"
            >
              {{ passwordError }}
            </p>

          </div>

          <!-- FORGOT -->
          <div class="flex justify-end">

            <a
              href="#"
              class="text-sm text-blue-500 hover:underline"
            >
              Forgot password?
            </a>

          </div>

          <!-- BUTTON -->
          <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold transition"
          >
            Login
          </button>

        </form>

        <!-- FOOTER -->
        <p class="text-center text-sm text-gray-500 mt-6">

          Don't have an account?

          <router-link
            to="/register"
            class="text-blue-500 hover:underline"
          >
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

const login = () => {

  // RESET ERRORS
  emailError.value = ""
  passwordError.value = ""

  // VALIDATION
  if (!email.value) {
    emailError.value = "Email is required"
  }

  if (!password.value) {
    passwordError.value = "Password is required"
  }

  // STOP IF ERROR
  if (emailError.value || passwordError.value) {
    return
  }

  // LOGIN SUCCESS
  console.log("Login:", email.value, password.value)

  router.push("/")
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
  animation: spin-slow 15s linear infinite ;
}
</style>