<script setup lang="ts">
const { $gsap } = useNuxtApp();
const { $ScrollTrigger } = useNuxtApp();
onMounted(() => {
  // animate pop in when visible
  $gsap.from("#guide", {
    scrollTrigger: {
      trigger: "#useGuide",
      start: "top 60%",
    },
    duration: 1,
    opacity: 0,
    y: 100,
    ease: "power4.out",
    stagger: 0.2,
  });
});
let guide = ref([
  {
    title: "Create an Account",
    description:
      "Click on 'Sign Up' and enter your email address, or sign up using your Google, Apple or Facebook account.",
    image: "https://i.ibb.co/K0yjhy1/key.png",
  },
  {
    title: "Search & Book a Listing",
    description:
      "Browse the available listings and use filters to narrow down your search.",
    image: "https://i.ibb.co/2jnY1KM/search.png",
  },
  {
    title: "Payment & Communication",
    description:
      "Enter your payment details securely or select a saved payment method.",
    image: "https://i.ibb.co/ZMhb4gL/credit-card.png",
  },
]);
</script>
<template>
  <div id="useGuide" class="py-16 bg-white">
    <div class="xl:container m-auto space-y-12 px-6 md:px-12 lg:px-20">
      <div>
        <h2
          class="mt-4 text-center text-2xl font-bold text-gray-800 md:text-4xl"
        >
          A simple guidance to use HostFaire
        </h2>
      </div>
      <div
        class="mt-16 grid gap-8 sm:w-2/3 sm:mx-auto md:w-full md:grid-cols-2 md:-mx-8 lg:grid-cols-3"
      >
        <div
          id="guide"
          v-for="(item, index) in guide"
          :key="index"
          class="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 bg-opacity-50 shadow-2xl shadow-gray-600/10"
        >
          <div class="space-y-12 text-center">
            <img
              :src="item.image"
              class="w-16 mx-auto"
              width="512"
              height="512"
              alt="guide"
            />
            <div class="space-y-6">
              <h3 class="text-2xl font-semibold text-gray-800 transition">
                {{ item.title }}
              </h3>
              <p class="text-gray-600">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
