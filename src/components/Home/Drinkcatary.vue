<template>
  <div class="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-10 flex justify-center">

    <!-- MAIN CONTAINER -->
    <div class="w-[90%] md:w-[85%]">

      <!-- TITLE -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800">
          Drink Categories 
        </h1>
        <p class="text-sm text-gray-500 mt-1">
          Choose your favorite drink
        </p>
      </div>

      <!-- GRID -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">

        <!-- CARD -->
        <div
          v-for="(drink, index) in drinks"
          :key="index"
          class="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 flex items-center gap-4"
        >

          <!-- IMAGE -->
          <div class="shrink-0">
            <img
              :src="drink.image"
              class="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover border-2 border-gray-200"
            />
          </div>

          <!-- INFO -->
          <div class="flex-1">
            <h2 class="text-base font-semibold text-gray-800">
              {{ drink.name }}
            </h2>

            <p class="text-xs text-gray-500 mt-1 line-clamp-2">
              {{ drink.description }}
            </p>

            <div class="flex items-center justify-between mt-2">
              <span class="text-orange-600 font-bold text-sm">
                {{ drink.price }}
              </span>

              <router-link
                :to="{
                  name: 'drink-detail',
                  query: {
                    name: drink.name,
                    price: drink.price.replace('$', ''),
                    image: encodeURIComponent(drink.image)
                  }
                }"
                class="bg-red-600 hover:bg-red-700 text-white text-xs px-4 py-2  rounded-lg transition"
              >
                Order
              </router-link>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
const drinks = [
  {
    name: "Strawberry Mojito",
    price: "$1.50",
    image: "/src/assets/image/srrawberry.png",
    description: "Cold refreshing Coca Cola with ice."
  },
  {
    name: "Pepsi",
    price: "$1.50",
    image: "/src/assets/image/pepsi.png",
    description: "Sweet fizzy Pepsi perfect for meals."
  },
  {
    name: "Orange Juice",
    price: "$2.00",
    image: "/src/assets/image/orange.png",
    description: "Fresh squeezed orange juice full of vitamins."
  },
  {
    name: "Lemon Tea",
    price: "$1.80",
    image: "/src/assets/image/lemontea.png",
    description: "Cool lemon tea with refreshing taste."
  },
  {
    name: "Milk Tea",
    price: "$2.50",
    image: "/src/assets/image/milktea.png",
    description: "Sweet milk tea with chewy pearls."
  },
  {
    name: "Coffee",
    price: "$2.00",
    image: "/src/assets/image/coffee.png",
    description: "Strong coffee to boost your energy."
  },
  {
    name: "Water",
    price: "$1.00",
    image: "/src/assets/image/water.png",
    description: "Pure clean drinking water."
  },
  {
    name: "Energy Drink",
    price: "$2.20",
    image: "/src/assets/image/energy.png",
    description: "Energy drink for focus and power."
  }
];
</script>