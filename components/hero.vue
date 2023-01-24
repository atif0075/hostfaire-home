<template>
  <section>
    <body class="bg-white">
      <div class="relative w-full">
        <nav class="absolute w-full">
          <div class="container m-auto px-6 md:px-12 lg:px-7">
            <div
              class="flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0 relative"
            >
              <input
                type="checkbox"
                name="toggle_nav"
                id="toggle_nav"
                class="peer hidden"
              />
              <div class="w-full flex justify-between md:w-max md:px-0">
                <a href="#" aria-label="logo" class="font-semibold text-xl">
                  HostFaire
                </a>

                <div class="flex items-center md:hidden max-h-10">
                  <label
                    role="button"
                    for="toggle_nav"
                    aria-label="humburger"
                    id="hamburger"
                    class="relative z-40 px-2 py-3 sm:-mr-6"
                  >
                    <div
                      id="line"
                      class="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                    ></div>
                    <div
                      id="line2"
                      class="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                    ></div>
                  </label>
                </div>
              </div>

              <label
                role="button"
                for="toggle_nav"
                class="fixed w-full z-30 h-full top-0 left-0 bg-zinc-700 bg-opacity-40 hidden peer-checked:block md:peer-checked:hidden"
              ></label>

              <div
                class="flex z-50 flex-col md:flex-row justify-between items-center gap-y-4 p-6 bg-white md:w-8/12 md:gap-y-4 md:p-0 md:bg-transparent lg:w-7/12 fixed top-0 -left-full transition-all duration-500 peer-checked:left-0 max-w-sm h-full md:left-0 md:h-auto w-4/5 md:max-w-none md:relative lg:first-letter:top-0"
              >
                <div class="flex md:hidden w-full pb-5">
                  <a href="#" aria-label="logo">
                    <a href="#" aria-label="logo" class="font-semibold text-xl">
                      HostFaire
                    </a>
                  </a>
                </div>
                <div class="block w-full h-full md:h-auto">
                  <ul
                    class="space-y-8 tracking-wide font-medium md:flex md:space-y-0"
                  >
                    <li>
                      <a href="#" class="block md:px-3">
                        <div
                          class="relative text-zinc-800 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full before:bg-zinc-800"
                        >
                          <span>Home</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#inapp" class="block md:px-3 group">
                        <div
                          class="relative text-zinc-600 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full before:bg-zinc-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                        >
                          <span class="transition">In App</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#faq" class="block md:px-3 group">
                        <div
                          class="relative text-zinc-600 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full before:bg-zinc-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                        >
                          <span class="transition">FAQ</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div class="min-h-screen flex">
          <div class="container m-auto px-6 py-40 md:px-12 lg:py-0 lg:px-7">
            <div class="flex items-center flex-wrap gap-12 lg:gap-0">
              <div class="lg:w-5/12 space-y-8">
                <span class="flex space-x-2">
                  <span
                    class="block w-14 mb-2 border-b-2 border-zinc-600"
                  ></span>
                  <span class="font-medium text-zinc-600">The new era</span>
                </span>
                <h1 class="text-4xl font-bold md:text-6xl">
                  Your home, <br />
                  everywhere you go
                </h1>
                <p class="text-xl text-zinc-700">
                  Need a time out? Find a stay nearby
                </p>

                <div class="flex space-x-4">
                  <a
                    href="#explore"
                    type="button"
                    title="Start buying"
                    class="w-full py-3 px-6 text-center transition bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700 focus:bg-zinc-800 sm:w-max"
                  >
                    <span class="block text-white font-semibold">
                      Explore
                    </span>
                  </a>
                  <a
                    href="#beta"
                    type="button"
                    title="Start buying"
                    class="group w-full py-3 px-6 text-center transition active:bg-zinc-200 focus:bg-zinc-100 sm:w-max"
                  >
                    <span
                      class="block text-zinc-700 font-semibold group-focus:text-zinc-700"
                    >
                      Join Beta List
                    </span>
                  </a>
                </div>
              </div>

              <div class="hidden relative md:block lg:w-7/12">
                <div
                  aria-hidden="true"
                  class="absolute inset-0 m-auto w-[30rem] h-[30rem] rounded-full bg-zinc-200"
                ></div>
                <div>
                  <div>
                    <img
                      v-motion-slide-right
                      src="../assets/svg/hero.svg"
                      class="relative ml-auto"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </section>
</template>
<script setup lang="ts">
let showVideo = ref(false);
let btnText = ref("Watch Video");
let toggleVideo = () => {
  showVideo.value = !showVideo.value;
  btnText.value = showVideo.value ? "Close Video" : "Watch Video";
};
</script>
<style scoped>
.btn-outline {
  @apply hover:text-white !important;
}
</style>
