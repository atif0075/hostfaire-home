<script setup lang="ts">
const { $gsap } = useNuxtApp();
const { $TextPlugin } = useNuxtApp();
let faqList = ref([
  {
    question: "How do I book accommodation on HostFaire?",
    answer:
      "Booking accommodation on HostFaire is easy. It has user-friendly mobile app that allow you to search for properties, read reviews, and make bookings.",
    open: true,
  },
  {
    question: "How do I communicate with the host on HostFaire?",
    answer:
      "HostFaire has messaging systems in place to allow guests to communicate with the host or property. You can send a message to the host through the platform to ask any questions or to request additional information.",
    open: false,
  },
  {
    question: "Is it safe to book accommodation on HostFaire?",
    answer:
      "HostFaire has measures in place to ensure the safety of their guests. It  provides reviews and ratings from previous guests, so travelers can make informed decisions about where to stay. Additionally, It’s system is secured and encrypted to ensure the protection of the personal information of the users.",
    open: false,
  },
]);
onMounted(() => {
  // animate slide in when visible
  $gsap.from("#faqItems", {
    scrollTrigger: {
      trigger: "#faqItems",
      start: "top 60%",
    },
    duration: 1,
    opacity: 0,
    y: 100,
    ease: "power4.out",
    stagger: 0.2,
  });
});
</script>
<template>
  <div id="faq" class="space-y-4 max-w-3xl mx-auto px-2 py-16">
    <h2 class="text-2xl text-center font-bold text-zinc-800 md:text-4xl">
      Frequently asked questions
    </h2>
    <div
      v-for="(faq, index) in faqList"
      :key="index"
      id="faqItems"
      class="group rounded-lg bg-zinc-100 hover:bg-zinc-100 p-6"
      @click="faq.open = !faq.open"
    >
      <div class="flex items-center justify-between cursor-pointer">
        <h2 class="font-medium text-gray-900">
          {{ faq.question }}
        </h2>
      </div>
      <Transition>
        <div v-if="faq.open" class="mt-4 leading-relaxed text-gray-700">
          {{ faq.answer }}
        </div>
      </Transition>
    </div>
  </div>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
