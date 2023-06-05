<script setup></script>
<template>
  <div
    class="pt-32 md:py-12 relative flex justify-center items-center xl:container m-auto px-6 md:px-12"
  >
    <div
      class="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-blue-200 to-blue-400 blur-3xl opacity-50"
    ></div>
    <div class="relative lg:flex lg:items-center lg:gap-12">
      <div
        class="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12"
      >
        <h1
          class="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white"
        >
          Demo <span class="text-primary dark:text-primaryLight">Video</span>
        </h1>
        <p class="mt-8 text-gray-600 dark:text-gray-300">
          This is a demo video of the app in action. This app is currently in
          alpha testing. This demo video is to give you a better idea of how the
          app works.
        </p>
      </div>
      <div
        class="overflow-hidden mt-5 lg:mt-0 lg:hover:scale-110 transition-all duration-300 w-full lg:w-7/12 lg:-mr-16"
      >
        <video
          src="../assets/videos/demo.mp4"
          class="w-full h-full rounded-xl shadow-lg"
          controls
        ></video>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
