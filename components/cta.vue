<script setup lang="ts">
const { $gsap } = useNuxtApp();
const { $ScrollTrigger } = useNuxtApp();
onMounted(() => {
  // animate pop in when visible
  $gsap.from("#explore", {
    scrollTrigger: {
      trigger: "#cta",
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
  <section>
    <div id="explore" class="py-16">
      <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
        <div
          id="cta"
          class="lg:bg-gray-100 lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center"
        >
          <div class="md:5/12 lg:w-1/2">
            <img
              src="../assets/svg/house.svg"
              alt="image"
              loading="lazy"
              width=""
              height=""
            />
          </div>
          <div class="md:7/12 lg:w-1/2">
            <h2 class="text-3xl font-bold text-gray-900 md:text-4xl">
              Find your dream home
            </h2>
            <p class="my-8 text-gray-600">
              HostFaire empowers hotels and other properties by providing full
              stack technology that increases earnings and eases operations.
              Bringing affordable and trusted accommodation that guests can book
              instantly.
            </p>
            <div class="divide-y space-y-4 divide-gray-100">
              <div class="mt-8 flex gap-4 md:items-center">
                <div class="w-12 h-12 flex gap-4 rounded-full bg-indigo-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 m-auto text-indigo-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="w-5/6">
                  <h4 class="font-semibold text-lg text-gray-700">
                    Chat Anytime
                  </h4>
                  <p class="text-gray-500">
                    This feature allows for real-time communication with
                    customer service and support, making the booking process
                    smooth and hassle-free for travelers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
