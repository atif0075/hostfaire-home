<script setup lang="ts"></script>
<template>
  <footer aria-label="Site Footer" class="bg-white">
    <div
      class="p-4 mt-10 bg-white border-t shadow md:flex md:items-center md:justify-between md:p-6"
    >
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2023
        <a href="https://flowbite.com/" class="hover:underline">HostFaire</a>.
        All Rights Reserved.
      </span>
      <ul
        class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
      >
        <li>
          <a href="#explore" class="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
          <a href="#faq" class="mr-4 hover:underline md:mr-6">FAQ</a>
        </li>
        <li>
          <nuxt-link to="/privacy-policy" class="mr-4 hover:underline md:mr-6"
            >Privacy Policy
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/terms-and-conditions" class="mr-4 hover:underline md:mr-6">
            Terms & Conditions
          </nuxt-link>
        </li>
      </ul>
    </div>
  </footer>
</template>
<style scoped></style>
