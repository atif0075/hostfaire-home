<script setup lang="ts">
let faqList = ref([
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    open: true,
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    open: false,
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    open: false,
  },
]);
let toggle = (index: number) => {
  faqList.value.forEach((faq, i) => {
    if (i === index) {
      faq.open = !faq.open;
      console.log(i, faq.open);
    } else {
      faq.open = false;
      console.log(i, faq.open);
    }
  });
};
</script>
<template>
  <div class="space-y-4 max-w-3xl mx-auto px-2">
    <h2
      class="text-2xl text-center font-bold text-zinc-800 dark:text-white md:text-4xl"
    >
      Frequently asked questions
    </h2>
    <details
      v-for="(faq, index) in faqList"
      :key="index"
      @click="toggle(index)"
      class="group rounded-lg bg-zinc-100 hover:bg-zinc-100 p-6 [&_summary::-webkit-details-marker]:hidden"
      :open="faq.open"
    >
      <summary class="flex items-center justify-between cursor-pointer">
        <h2 class="font-medium text-gray-900">
          {{ faq.question }}
          {{ faq.open }}
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

      <p class="mt-4 leading-relaxed text-gray-700">{{ faq.answer }}}</p>
    </details>
  </div>
</template>
<style scoped></style>
