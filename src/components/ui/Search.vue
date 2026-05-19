<template>
   <!-- SEARCH CARD -->
  <div class="w-[90%] md:w-[80%] mx-auto bg-white rounded-3xl shadow-xl p-6 mt-10">
    <h2 class="text-3xl font-bold text-center mb-2">Search Hotels</h2>
    <p class="text-gray-500 text-center mb-8">Find hotels by name and location</p>

    <!-- FORM -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <!-- HOTEL TITLE -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">
          Hotel Name
        </label>
        <input
          v-model="searchTitle"
          type="text"
          placeholder="Enter hotel name..."
          class="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
        <!-- LOCATION -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">
          Location
        </label>
        <input
          v-model="searchLocation"
          type="text"
          placeholder="Enter location..."
          class="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <!-- BUTTON -->
      <div class="flex items-end">
        <button
          @click="searchHotels"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-2xl font-semibold transition"
        >
          Search Now
        </button>
      </div>

    </div>

  </div>
</template>

<script setup>
/* SEARCH */
const searchTitle = ref('')
const searchLocation = ref('')
/* FILTER + SEARCH + SORT */
const filteredHotels = computed(() => {
  let result = [...hotels.value]

  // SEARCH TITLE
  if (searchTitle.value) {
    result = result.filter(h =>
      h.name.toLowerCase().includes(searchTitle.value.toLowerCase())
    )
  }

  // SEARCH LOCATION
  if (searchLocation.value) {
    result = result.filter(h =>
      h.location.toLowerCase().includes(searchLocation.value.toLowerCase())
    )
  }
  return result
})
</script>

<style>

</style>