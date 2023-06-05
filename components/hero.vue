<script setup lang="ts"> 
import HouseLottie from "../assets/house.json";
const openNavbar = () => {
  const nav = document.querySelector(".navmenu");
  nav?.classList.toggle("hidden");
}; 
</script>
<template>
  <header>
    <input
      type="checkbox"
      name="hbr"
      id="hbr"
      class="hbr peer"
      hidden
      aria-hidden="true"
    />
    <nav
      class="fixed z-20 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur navbar shadow-md shadow-gray-600/5 peer-checked:navbar-active md:relative md:bg-transparent dark:shadow-none"
    >
      <div class="xl:container m-auto px-6 md:px-12">
        <div
          class="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0"
        >
          <div class="w-full flex justify-between lg:w-auto">
            <a href="#" aria-label="logo" class="flex space-x-2 items-center">
              <span class="text-base font-bold text-gray-600 dark:text-white">
                HostFaire
              </span>
            </a>
            <label
              for="hbr"
              @click="openNavbar"
              class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
            >
              <div
                aria-hidden="true"
                class="m-auto h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
              ></div>
              <div
                aria-hidden="true"
                class="m-auto mt-2 h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
              ></div>
            </label>
          </div>
          <div
            class="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0"
          >
            <div class="text-gray-600 dark:text-gray-300 lg:pr-4">
              <ul
                class="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0"
              >
                <li>
                  <NuxtLink
                    to="/"
                    class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                  >
                    <span>Home</span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/privacy-policy"
                    class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                  >
                    <span>Privacy Policy</span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/terms-and-services"
                    class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                  >
                    <span>Terms & Services</span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <div
    class="pt-32 md:py-12 xl:container m-auto h-[100svh] flex justify-center items-center relative px-6 md:px-12"
  >
    <div
      class="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-blue-200 to-blue-400 blur-3xl opacity-50 dark:opacity-20"
    ></div>
    <div class="relative lg:flex lg:items-center lg:gap-12">
      <div
        class="text-center pt-24 lg:pt-12 lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12"
      >
        <h1
          class="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white"
        >
          Your home, <br />
          everywhere you go
        </h1>
        <p class="mt-8 text-gray-600 dark:text-gray-300">
          Need a time out? Find a stay nearby and get some space. HostFaire is a
          platform that allows you to find a place to stay for a few hours or a
          few days. <br />
        </p>
      </div>
      <div class="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
        <client-only >
          <Vue3Lottie :animationData="HouseLottie" :height="600" :width="600" />
        </client-only>
      </div>
    </div>
  </div>

  <section class="hidden">
    <body class="bg-white h-screen">
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
                    class="w-full py-3 px-6 text-center rounded-lg transition bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700 focus:bg-zinc-800 sm:w-max"
                  >
                    <span class="block text-white font-semibold">
                      Explore
                    </span>
                  </a>
                </div>
              </div>

              <div class="hidden relative md:block lg:w-7/12">
                <div
                  aria-hidden="true"
                  class="absolute inset-0 m-auto w-[30rem] h-[30rem] rounded-full bg-zinc-200"
                ></div>
                <div class="img">
                  <img
                    src="../assets/svg/hero.svg"
                    class="img relative ml-auto"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </section>
</template>

<style scoped>
.btn-outline {
  @apply hover:text-white !important;
}
</style>
