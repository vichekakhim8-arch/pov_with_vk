<template>
  <div class="min-h-screen bg-gray-100 py-16 px-4">

    <!-- CONTAINER -->
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

      <!-- LEFT SIDE -->
      <div class="bg-white rounded-2xl shadow-lg p-8">

        <h1 class="text-4xl font-bold text-blue-600">
          <span class="text-5xl text-yellow-500">C</span>ontact Ad<span class="text-2xl text-red-600">min</span>
        </h1>

        <p class="text-gray-500 mt-3">
          We'd love to hear from you. Send us a message and we’ll respond as soon as possible.
        </p>

        <!-- CONTACT INFO -->
        <div class="mt-8 space-y-5">

          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
              <img src="/src/assets/image/logoaddress.png" alt="">
            </div>

            <div>
              <h3 class="font-semibold text-lg">
                Address
              </h3>

              <p class="text-gray-500">
                Phnom Penh, Cambodia
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">
              <img src="/src/assets/image/logoPhone.png" alt="">
            </div>

            <div>
              <h3 class="font-semibold text-lg">
                Phone
              </h3>

              <p class="text-gray-500">
                +855 12 345 678
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-2xl">
              <img src="/src/assets/image/logoEmail.png" alt="Email">
            </div>

            <div>
              <h3 class="font-semibold text-lg">
                Email
              </h3>

              <p class="text-gray-500">
                adminsava@gmail.com
              </p>
            </div>
          </div>

        </div>

        <!-- MAP -->
        <div class="mt-8 rounded-2xl overflow-hidden">
          <img
            src="https://maps.googleapis.com/maps/api/staticmap?center=Phnom+Penh,Cambodia&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:A%7CPhnom+Penh,Cambodia"
            class="w-full h-56 object-cover"
          />
        </div>

      </div>

      <!-- RIGHT SIDE -->
      <div class="bg-white rounded-2xl shadow-lg p-8">

        <h2 class="text-2xl font-bold text-gray-800">
          Send Message
        </h2>

        <form class="mt-6 space-y-5">

          <!-- NAME -->
          <div>
            <label class="text-sm font-medium text-gray-700">
              Full Name
            </label>

            <div class="relative mt-1">

              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                
              </span>

              <input
                type="text"
                placeholder="Enter your name"
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
              />

            </div>
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
                type="email"
                placeholder="Enter your email"
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
              />

            </div>
          </div>

          <!-- MESSAGE -->
          <div>
            <label class="text-sm font-medium text-gray-700">
              Message
            </label>

            <div class="relative mt-1">

              <span class="absolute left-3 top-4 text-gray-400">
                
              </span>

              <textarea
                rows="5"
                placeholder="Write your message..."
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500 resize-none"
              ></textarea>

            </div>
          </div>

          <!-- BUTTON -->
          <button
            class="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>

  </div>
</template>

<script setup>
</script>

<style scoped>
</style>