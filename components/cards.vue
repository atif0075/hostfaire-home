<script setup lang="ts">
const { $gsap } = useNuxtApp();
const { $ScrollTrigger } = useNuxtApp();
onMounted(() => {
  // animate slide in when visible
  $gsap.from("#cards", {
    scrollTrigger: {
      trigger: "#inapp",
      start: "top 60%",
    },
    duration: 1,
    opacity: 0,
    y: 100,
    ease: "power4.out",
    stagger: 0.2,
  });
});
let cards = ref([
  {
    section: "Signup",
    src: "https://i.ibb.co/fk6t76t/Unknown.png",
    about:
      "Sign up for creating account and start adding your places to HostFaire.",
  },
  {
    section: "Dashboard",
    src: "https://i.ibb.co/7Jbsqwm/Unknown-2.png",
    about: "A clean user interface to provide user a walm welcome and feeling.",
  },
  {
    section: "Ad - Detail",
    src: "https://i.ibb.co/y5S9wCj/Unknown-7.png",
    about:
      "Complete ad detail to see what the host is offering in their property listing.",
  },
  {
    section: "Chatting",
    src: "https://i.ibb.co/nfst34C/Unknown-3.png",
    about:
      "Secured Encrypted chatting to ensure a safe environment which will give them a peace of mind.",
  },
]);
</script>
<template>
  <div id="inapp" class="py-20">
    <div class="xl:container mx-auto px-6 md:px-12">
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-2xl font-bold text-gray-800 md:text-4xl">
          InApp Screenshots
        </h2>
        <p class="text-gray-600">
          Some of the screenshots of the app in action. This app is live and can
          be used by anyone.
        </p>
      </div>
      <div
        class="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="(item, index) in cards"
          :key="index"
          id="cards"
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
