<script setup lang="ts">
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBOrp1l9E6RkPitCOkIG31exKfNB2UbbS4",
  authDomain: "hf-waitinglist.firebaseapp.com",
  projectId: "hf-waitinglist",
  storageBucket: "hf-waitinglist.appspot.com",
  messagingSenderId: "695178076860",
  appId: "1:695178076860:web:cd951cebaf4c81889a26b9",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let email = ref("");
let isUserInWaitingList = ref(false);
const submit = async () => {
  await addDoc(collection(db, "waiting_list"), {
    email: email.value,
  });
  isUserInWaitingList.value = true;
};
</script>
<template>
  <footer aria-label="Site Footer" class="bg-white">
    <div id="beta" class="py-10">
      <div class="mx-auto max-w-md">
        <strong
          class="block text-center text-xl font-medium text-gray-900 sm:text-3xl"
        >
          Join out beta list to get early access
        </strong>
        <form @submit.prevent="submit" class="mt-6">
          <div class="relative max-w-lg">
            <label class="sr-only" for="email"> Email </label>
            <input
              v-if="!isUserInWaitingList"
              class="w-full rounded-full outline-none ring-2 ring-offset-2 ring-primary border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium"
              id="email"
              type="email"
              v-model="email"
              required="true"
              placeholder="john@doe.com"
            />

            <button
              :class="isUserInWaitingList ? 'w-full' : ''"
              class="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-primary/90"
              type="submit"
            >
              {{ isUserInWaitingList ? "Joined" : "Join" }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <footer
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
          <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
          <a href="#" class="hover:underline">Contact</a>
        </li>
      </ul>
    </footer>
  </footer>
</template>
<style scoped></style>
