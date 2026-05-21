<template>
  <div class="min-h-screen bg-gray-100 py-16 px-4">

    <!-- CONTAINER -->
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

      <!-- LEFT SIDE -->
      <div class="bg-white rounded-2xl shadow-lg p-8">

        <h1 class="text-4xl font-bold tracking-wide">
          <span class="text-5xl text-yellow-500 animate-bounce inline-block">C</span>
          <span class="text-blue-600">ontact</span>
          <span class="text-pink-500 hover:rotate-6 inline-block transition"> Ad</span>
          <span class="text-2xl text-red-600 animate-pulse">min</span>
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

              <p class="text-gray-500 hover:text-blue-500 transition duration-500 hover:underline cursor-pointer">
                adminsava@gmail.com
              </p>
            </div>
          </div>

        </div>

        <!-- MAP -->
        <div class="mt-8 rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125079.71693775736!2d104.82459216192369!3d11.57040464747404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1779198740795!5m2!1sen!2skh"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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