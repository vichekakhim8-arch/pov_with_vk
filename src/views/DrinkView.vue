<template>
  <router-link
      to="/"
      class="m-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition"
    >
      <i class="bi bi-arrow-left"></i>
      Back
    </router-link>
  <div class="w-full min-h-screen bg-gray-100 flex justify-center items-center p-4">

    <div class="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">

      <!-- IMAGE -->
      <div class="relative">
        <img
          :src="image"
          class="w-full h-[300px] md:h-[500px] object-cover"
        />

        <div class="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
          <h1 class="text-2xl font-bold">{{ name }}</h1>
          <p class="text-sm opacity-80 mt-1">
            Fresh delicious drink made with premium ingredients
          </p>
          <div class="mt-2 text-yellow-400 font-bold">
            ⭐ 4.8 Rating
          </div>
        </div>
      </div>

      <!-- RIGHT SIDE -->
      <div class="p-6 flex flex-col justify-between">

        <!-- PRICE -->
        <div class="bg-blue-50 rounded-xl p-4 mb-5">
          <p class="text-gray-500 text-sm">Price per item</p>
          <h2 class="text-3xl font-bold text-blue-600">
            ${{ price }}
          </h2>
        </div>

        <!-- COUNTER -->
        <div class="flex items-center justify-between bg-gray-100 rounded-xl p-4">

          <button
            @click="dec"
            class="w-10 h-10 bg-red-500 text-white rounded-xl text-xl font-bold hover:bg-red-600 transition"
          >
            -
          </button>

          <span class="text-2xl font-bold">{{ count }}</span>

          <button
            @click="inc"
            class="w-10 h-10 bg-green-500 text-white rounded-xl text-xl font-bold hover:bg-green-600 transition"
          >
            +
          </button>

        </div>

        <!-- TOTAL -->
        <div class="mt-6 space-y-3 text-lg">
          <div class="flex justify-between">
            <span class="text-gray-600">Total Items</span>
            <span class="font-bold">{{ count }}</span>
          </div>

          <div class="flex justify-between">
            <span class="text-gray-600">Total Price</span>
            <span class="font-bold text-green-600">
              ${{ totalPrice }}
            </span>
          </div>
        </div>

        <!-- PAYMENT METHOD -->
        <div class="mt-6">
          <p class="text-gray-600 mb-2 font-semibold">Payment Method</p>

        
        </div>

        <!-- ORDER BUTTON -->
        <router-link
          to="/payment"
          
          @click="orderNow"
          class="mt-8 w-full bg-gradient-to-r from-blue-500 to-indigo-600
                text-white py-3 rounded-xl font-bold shadow-lg
                hover:scale-105 transition text-center"
        >
          Order Now
        </router-link>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const count = ref(1);
const payment = ref("cash");

// ✅ FIX: watch query.name to reset count when navigating to a different drink
watch(() => route.query.name, () => {
  count.value = 1;
});

const name = computed(() => route.query.name || "Drink");

const price = computed(() =>
  Number(route.query.price || 0)
);

// ✅ FIX: decode the image URL passed from the list
const image = computed(() =>
  decodeURIComponent(route.query.image || "")
);

const inc = () => count.value++;

const dec = () => {
  if (count.value > 1) count.value--;
};

const totalPrice = computed(() =>
  (count.value * price.value).toFixed(2)
);

const orderNow = () => {
  alert(`
Order Success
Drink: ${name.value}
Qty: ${count.value}
Total: $${totalPrice.value}
Payment: ${payment.value}
  `);
};
</script>