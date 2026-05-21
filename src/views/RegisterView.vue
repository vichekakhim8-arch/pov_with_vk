<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">

    <!-- BORDER WRAPPER -->
    <div class="relative w-full max-w-md rounded-2xl p-[2px] overflow-hidden">

      <!-- ANIMATED BORDER -->
      <div
        class="absolute inset-2 animate-spin-slow bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
      ></div>

      <!-- REGISTER CARD -->
      <div class="relative bg-white rounded-2xl p-8">

        <!-- TITLE -->
        <h1
          class="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent"
        >
          Create Account
        </h1>

        <p class="text-center text-gray-500 mt-2">
          Register to start booking hotels
        </p>

        <!-- FORM -->
        <form class="mt-6 space-y-4" @submit.prevent="handleRegister">

          <!-- NAME -->
          <div>
            <label class="text-sm font-medium text-gray-700">
              Full Name
            </label>

            <input
              v-model="form.name"
              type="text"
              placeholder="Enter your name"
              class="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              :class="errors.name ? 'border-red-500' : 'border-gray-300'"
            />

            <p v-if="errors.name" class="text-red-500 text-sm mt-1">
              {{ errors.name }}
            </p>
          </div>

          <!-- EMAIL -->
          <div>
            <label class="text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              v-model="form.email"
              type="email"
              placeholder="Enter your email"
              class="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              :class="errors.email ? 'border-red-500' : 'border-gray-300'"
            />

            <p v-if="errors.email" class="text-red-500 text-sm mt-1">
              {{ errors.email }}
            </p>
          </div>

          <!-- PASSWORD -->
          <div>
            <label class="text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              v-model="form.password"
              type="password"
              placeholder="Enter your password"
              class="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              :class="errors.password ? 'border-red-500' : 'border-gray-300'"
            />

            <p v-if="errors.password" class="text-red-500 text-sm mt-1">
              {{ errors.password }}
            </p>
          </div>

          <!-- CONFIRM PASSWORD -->
          <div>
            <label class="text-sm font-medium text-gray-700">
              Confirm Password
            </label>

            <input
              v-model="form.confirmPassword"
              type="password"
              placeholder="Confirm your password"
              class="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              :class="errors.confirmPassword ? 'border-red-500' : 'border-gray-300'"
            />

            <p
              v-if="errors.confirmPassword"
              class="text-red-500 text-sm mt-1"
            >
              {{ errors.confirmPassword }}
            </p>
          </div>

          <!-- BUTTON -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-2 rounded-md font-semibold transition duration-300"
          >
            <span v-if="!loading">
              Register
            </span>

            <span
              v-else
              class="flex items-center justify-center gap-2"
            >
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

          <!-- SOCIAL BUTTONS -->
          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
          >
            <button
              type="button"
              class="w-full sm:w-auto border py-2 px-7 rounded-md hover:bg-gray-50 transition"
            >
              Google Account
            </button>

            <button
              type="button"
              class="w-full sm:w-auto bg-blue-500 py-2 px-7 rounded-md text-white hover:bg-blue-600 transition"
            >
              Facebook Account
            </button>
          </div>
        </form>

        <!-- LOGIN LINK -->
        <p class="text-center text-sm text-gray-500 mt-4">
          Already have an account?

          <router-link
            to="/login"
            class="text-blue-500 font-medium hover:underline"
          >
            Login
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const loading = ref(false)

const form = reactive({
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
})

const errors = reactive({
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
})

const handleRegister = async () => {
  // RESET ERRORS
  errors.name = ""
  errors.email = ""
  errors.password = ""
  errors.confirmPassword = ""

  // VALIDATION
  if (!form.name) {
    errors.name = "Name is required"
  }

  if (!form.email) {
    errors.email = "Email is required"
  }

  if (!form.password) {
    errors.password = "Password is required"
  }

  if (!form.confirmPassword) {
    errors.confirmPassword = "Confirm password is required"
  }

  if (
    form.password &&
    form.confirmPassword &&
    form.password !== form.confirmPassword
  ) {
    errors.confirmPassword = "Passwords do not match"
  }

  // STOP IF ERROR
  if (
    errors.name ||
    errors.email ||
    errors.password ||
    errors.confirmPassword
  ) {
    return
  }

  loading.value = true

  try {
    // FAKE API CALL
    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    )

    console.log("Register Data:", form)

    // REDIRECT TO HOME
    router.push("/")
  } catch (error) {
    console.log(error)
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
  animation: spin-slow 6s linear infinite;
}
</style>