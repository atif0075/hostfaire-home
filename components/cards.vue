<script setup lang="ts">
import { ref, onMounted } from "vue";
let cards = ref([
  {
    section: "Signup",
    src: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
    about: "Sign up for an account and start adding your places to the map.",
  },
  {
    section: "Loading",
    src: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
    about: "A beautiful waiting screen while the map loads. ",
  },
  {
    section: "Adding User",
    src: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
    about: "Add a user to your place. You can add multiple users to a place.",
  },
  {
    section: "Marking Place",
    src: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
    about:
      "Mark your place on the map. You can also add a photo of your place.",
  },
]);
</script>
<template>
  <div class="py-20">
    <div class="xl:container mx-auto px-6 md:px-12">
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-2xl font-bold text-gray-800 md:text-4xl">
          InApp Screenshots
        </h2>
        <p class="text-gray-600">
          Some of the screenshots of the app in action. The app is still in
          development.
        </p>
      </div>
      <div
        class="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="(item, index) in cards"
          :key="index"
          v-motion-slide-visible-bottom
          class="group relative rounded-3xl space-y-6 overflow-hidden"
        >
          <img
            class="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
            :src="item.src"
            loading="lazy"
            width="640"
            height="805"
          />
          <div
            class="rounded-b-3xl absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0"
          >
            <div>
              <h4 class="text-xl font-semibold text-white">
                {{ item.section }}
              </h4>
              <span class="block text-sm text-gray-500">HostFaire</span>
            </div>
            <p class="mt-8 text-gray-300 line-clamp-2 group-hover:line-clamp-3">
              {{ item.about }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
