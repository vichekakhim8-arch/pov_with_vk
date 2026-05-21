<template>
  <div class="min-h-screen bg-gray-50 p-6">

    <div class="max-w-5xl mx-auto space-y-8">

      <!-- PROFILE SECTION -->
      <div class="bg-white p-6 rounded-2xl border shadow-sm flex flex-col sm:flex-row items-center gap-6">

        <!-- IMAGE -->
        <img
          src="/src/assets/image/logohotel.png"
          class="w-24 h-24 rounded-full object-cover border"
          alt="profile"
        />

        <!-- INFO -->
        <div>
          <h1 class="text-2xl font-bold text-gray-900">
            Skywayhotel Booking System
          </h1>

          <p class="text-gray-500">
            Built by Frontend Developer
          </p>

          <p class="text-sm text-gray-400 mt-1">
            Vue 3 + Tailwind CSS Project
          </p>
        </div>

      </div>

      <!-- ABOUT -->
      <div class="bg-white p-6 rounded-2xl  shadow-lg">
        <h2 class="text-xl font-semibold mb-3">About This Project</h2>

        <p class="text-gray-600 leading-relaxed">
      

        This SkywayHotel system is a web application designed for easy hotel room search and booking.
        It allows users to view available rooms and make bookings quickly and efficiently.
        The system includes a dashboard for managing bookings and user data.
        It also provides a simple payment UI simulation for a smooth user experience.
        Overall, it helps improve hotel reservation management in a modern and user-friendly way.
                
        </p>
      </div>

      <!-- FEATURES -->
      <div class="bg-white p-6 rounded-2xl shadow-lg">
        <h2 class="text-xl font-semibold mb-4">Features</h2>

        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
          <li>✔ Hotel listing with images</li>
          <li>✔ Filter by price and rating</li>
          <li>✔ Booking form system</li>
          <li>✔ Price calculation</li>
          <li>✔ Booking dashboard</li>
          <li>✔ Responsive UI design</li>
        </ul>
      </div>

      <!-- TECH STACK -->
      <div class="bg-white p-6 rounded-2xl shadow-lg">
        <h2 class="text-xl font-semibold mb-4">Tech Stack</h2>

        <div class="flex flex-wrap gap-3">
          <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
            Vue 3
          </span>

          <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
            Tailwind CSS
          </span>

          <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
            Vue Router
          </span>

          <span class="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">
            LocalStorage
          </span>
        </div>
      </div>

      

    </div>

     <div class="min-h-auto py-10 bg-gray-100 flex items-center justify-center  m-4">

    <div class="w-full max-w-4xl">

      <!-- TITLE -->
      <h1 class="text-3xl font-bold text-center mb-10 text-gray-800">
        Team Work
      </h1>

      <!-- TEAM GRID -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <!-- MEMBER 1 -->
        <div class="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">

          <div class="border-3 rounded-full w-30 h-30 flex items-center justify-center mx-auto border-red-900 ">
            <img
              src="/src/assets/image/mypic.png"
              class=" rounded-full mx-auto border-4 w-full h-full object-cover"
            />
          </div>

          <h2 class="mt-4 text-xl font-bold">Vicheka</h2>
          <p class="text-gray-500">Frontend Developer</p>
          
          
          
          <div class="mt-4 flex justify-center gap-3 flex-wrap">
            <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">Vue</span>
            <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs">Tailwind</span>
            <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs">Router</span>
            <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs">localStorage</span>
            <span class="px-3 py-1 bg-green-100 text-red-600 rounded-full text-xs">css</span>
          </div>
          
        </div>
        
        <!-- MEMBER 2 -->
        <div class="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">

           <div class="border-3 rounded-full w-30 h-30 flex items-center justify-center mx-auto border-red-900 ">
            <img
              src="/src/assets/image/pov.png"
              class=" rounded-full mx-auto border-4 w-full h-full object-cover"
            />
          </div>

          <h2 class="mt-4 text-xl font-bold">Sery Pov</h2>
          <p class="text-gray-500">Frontend Developer</p>

        
          
          <div class="mt-4 flex justify-center gap-3 flex-wrap">
            <span class="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs">Vue</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs">Tailwind CSS</span>
            <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs">Router</span>
            <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs">localStorage</span>
            <span class="px-3 py-1 bg-purple-100 text-red-600 rounded-full text-xs">css</span>
          </div>

        </div>

      </div>

    </div>
    
  </div>

  </div>
</template>

<script setup>
</script>