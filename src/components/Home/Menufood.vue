<template>
  <div class="w-full flex justify-center bg-gray-100 py-6">
    <div class="w-[85%]">

      <h1 class="text-2xl font-bold mb-4">Popular Foods</h1>

      <!-- HORIZONTAL SCROLL -->
      <div class="flex gap-4 overflow-x-auto scroll-smooth pb-3">

        <!-- CARD -->
        <div
          v-for="food in foods"
          :key="food.id"
          @click="goDetail(food)"
          class="cursor-pointer min-w-[160px] sm:min-w-[180px] md:min-w-[200px]
                 h-[160px] sm:h-[180px] md:h-[200px]
                 rounded-2xl overflow-hidden shadow-md
                 shrink-0 bg-white
                 hover:scale-105 transition duration-300"
        >
          <img
            :src="food.image"
            class="w-full h-full object-cover"
            :alt="food.name"
          />
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

// ✅ Use relative path: go up 2 folders (Home → components → src) then into assets
import bugerImg  from "../../assets/image/buger.png";
import piImg  from "../../assets/image/pizza.png";
import nodalImg  from "../../assets/image/nodal.png";
import kakoImg   from "../../assets/image/kako.png";
import loklakImg from "../../assets/image/loklak.png";
import pahokImg  from "../../assets/image/pahokang.png";
import deImg     from "../../assets/image/de.png";
import amokImg  from "../../assets/image/amok.png";

const router = useRouter();

const foods = [
  { id: 1, name: "Burger",             price: 5,  image: bugerImg  },
  { id: 2, name: "Pizza",              price: 7,  image: piImg  },
  { id: 3, name: "Noodles",            price: 4,  image: nodalImg  },
  { id: 4, name: "Somlaor Korko",      price: 6,  image: kakoImg   },
  { id: 5, name: "Khmer Beef Lok Lak", price: 10, image: loklakImg },
  { id: 6, name: "Prahok-Ang",         price: 12, image: pahokImg  },
  { id: 7, name: "Drink",              price: 3,  image: deImg     },
  { id: 8, name: "Amok Fish",            price: 9,  image: amokImg   },
];

const goDetail = (food) => {
  router.push({ name: "Fooddetail", query: food });
};
</script>