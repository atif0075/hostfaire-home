<script setup lang="ts">
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
</script>
<template>
  <div id="faq" class="space-y-4 max-w-3xl mx-auto px-2 py-16">
    <h2 class="text-2xl text-center font-bold text-zinc-800 md:text-4xl">
      Frequently asked questions
    </h2>
    <details
      v-for="(faq, index) in faqList"
      :key="index"
      class="group rounded-lg bg-zinc-100 hover:bg-zinc-100 p-6 [&_summary::-webkit-details-marker]:hidden"
      :open="faq.open"
    >
      <summary class="flex items-center justify-between cursor-pointer">
        <h2 class="font-medium text-gray-900">
          {{ faq.question }}
        </h2>

        <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </summary>

      <p v-motion-fade-visible class="mt-4 leading-relaxed text-gray-700">
        {{ faq.answer }}}
      </p>
    </details>
  </div>
</template>
<style scoped></style>
