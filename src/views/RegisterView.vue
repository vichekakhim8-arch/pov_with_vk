<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">

    <!-- BORDER WRAPPER -->
    <div class="relative w-full max-w-md rounded-2xl p-[2px] overflow-hidden">

      <!-- ANIMATED BORDER -->
      <div class="absolute  -inset-15 animate-spin-slow bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <!-- REGISTER CARD -->
      <div class="relative bg-white rounded-2xl p-8">

        <!-- TITLE -->
      
        <h1 class="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
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

            <div class="relative mt-1">

              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                
              </span>

              <input
                v-model="form.name"
                type="text"
                placeholder="Enter your name"
                class="w-full pl-10 pr-4 py-2 border rounded-xl outline-none"
                :class="errors.name ? 'border-red-500' : 'border-gray-300'"
              />

            </div>

            <p
              v-if="errors.name"
              class="text-red-500 text-sm mt-1"
            >
              {{ errors.name }}
            </p>

          </div>

          <!-- EMAIL -->
          <div>

            <label class="text-sm font-medium text-gray-700">
              Email
            </label>

            <div class="relative mt-1">

              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                
              </span>

              <input
                v-model="form.email"
                type="email"
                placeholder="Enter your email"
                class="w-full pl-10 pr-4 py-2 border rounded-xl outline-none"
                :class="errors.email ? 'border-red-500' : 'border-gray-300'"
              />

            </div>

            <p
              v-if="errors.email"
              class="text-red-500 text-sm mt-1"
            >
              {{ errors.email }}
            </p>

          </div>

          <!-- PASSWORD -->
          <div>

            <label class="text-sm font-medium text-gray-700">
              Password
            </label>

            <div class="relative mt-1">

              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                
              </span>

              <input
                v-model="form.password"
                type="password"
                placeholder="Enter your password"
                class="w-full pl-10 pr-4 py-2 border rounded-xl outline-none"
                :class="errors.password ? 'border-red-500' : 'border-gray-300'"
              />

            </div>

            <p
              v-if="errors.password"
              class="text-red-500 text-sm mt-1"
            >
              {{ errors.password }}
            </p>

          </div>

          <!-- CONFIRM PASSWORD -->
          <div>

            <label class="text-sm font-medium text-gray-700">
              Confirm Password
            </label>

            <div class="relative mt-1">

              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                
              </span>

              <input
                v-model="form.confirmPassword"
                type="password"
                placeholder="Confirm your password"
                class="w-full pl-10 pr-4 py-2 border rounded-xl outline-none"
                :class="errors.confirmPassword ? 'border-red-500' : 'border-gray-300'"
              />

            </div>

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
            class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl font-semibold transition"
          >
            Register
          </button>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">

          <button class="w-full sm:w-auto border py-2 px-7 rounded-sm hover:bg-gray-50 transition">
            Google Account
          </button>

          <button class="w-full sm:w-auto bg-blue-500 py-2 px-7 rounded-sm text-white hover:bg-blue-600 transition">
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
import { reactive } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

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

const handleRegister = () => {

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

  // SUCCESS
  console.log("Register Data:", form)

  router.push("/login")
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