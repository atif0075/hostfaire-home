<script setup lang="ts">
let otherApps = [
  {
    name: "FaireHost",
    logo: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.globalnexusdc.com%2Fwp-content%2Fuploads%2F2020%2F02%2Fhomeaway-logo.png&f=1&nofb=1&ipt=1d37a5d3fb4b9a33a462e57d2a906df5e5c6be9fc95971c8fd630881719b81e2&ipo=images",
  },
  {
    name: "Airbnb",
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fairbnb-logo-clipart-transparent.png&f=1&nofb=1&ipt=7b9d75b919b83efd3f99495fcabe13df3c7a74ca36eff7f12c4f66b56dd2a475&ipo=images",
  },
  {
    name: "Booking.com",
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vilacvetka.com%2Fwp-content%2Fuploads%2F2015%2F04%2Fbooking.com-logo-2.png&f=1&nofb=1&ipt=7ae8ff4b20d8c6330770e11014eef66a3f1ca4930af536365d54bd6bdf3adb8b&ipo=images",
  },
];
let comparisonFeatures = [
  {
    name: "Search",
    features: ["✅", "✅", "✅"],
  },
  {
    name: "Book",
    features: [" ✅", "✕", "✅"],
  },
  {
    name: "Manage",
    features: ["✅", " ✅", "✕"],
  },
  {
    name: "Pricing",
    features: ["✅", "✅", "✅"],
  },
  {
    name: "Calendar",
    features: ["✅", "✅", "✕"],
  },
  {
    name: "Messaging",
    features: ["✅", "✅", "✕"],
  },
  {
    name: "Reviews",
    features: ["✅", "✅", "✕"],
  },
  {
    name: "Payments",
    features: ["✅", "✅", "✕"],
  },
];
</script>
<template>
  <div class="xl:container m-auto px-6 py-20 md:px-12 lg:px-20 xl:px-0">
    <div class="m-auto text-center">
      <h2 class="text-2xl font-bold text-zinc-800 dark:text-white md:text-4xl">
        A comparison of our app with others
      </h2>
    </div>
    <div class="m-auto mt-12">
      <div class="relative z-10">
        <div class="relative overflow-auto p-6">
          <table class="w-full border-t border-zinc-100 dark:border-zinc-700">
            <thead>
              <tr>
                <td class="p-4 sm:sticky"></td>
                <td
                  v-for="(item, index) in otherApps"
                  :key="index"
                  class="p-8 space-y-8 bg-zinc-100"
                >
                  <img :src="item.logo" class="h-12 w-auto" />
                  <div class="space-y-4">
                    <h4
                      class="text-2xl font-semibold text-zinc-800 dark:text-zinc-100"
                    >
                      {{ item.name }}
                    </h4>
                    <p class="text-sm text-zinc-600 dark:text-zinc-400">
                      Delectus natus illum in, iste ut facilis ex sit culpa fuga
                      dolor atque? Quis.
                    </p>
                  </div>
                </td>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(item, index) in comparisonFeatures" :key="index">
                <td
                  class="left-0 border border-zinc-100 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 p-4 font-medium text-zinc-900 dark:text-zinc-200 sm:sticky"
                >
                  <span class="block w-max"> {{ item.name }} </span>
                </td>
                <td
                  v-for="(i, index) in item.features"
                  :key="index"
                  :class="i === '✕' ? 'text-red-500' : 'text-green-500'"
                  class="border border-zinc-100 dark:border-zinc-700 p-4 text-center"
                >
                  {{ i }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
