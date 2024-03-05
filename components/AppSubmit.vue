<template>
    <div class="group relative z-0 transition-all focus-within:z-10">
      <div
        class="absolute w-full rounded-b-2xl border border-transparent bg-gradient-to-r from-zed-orange from-5% via-zed-red to-zed-orange to-95% px-6 pb-4 pt-4 text-center text-white"
      >
      {{ label }}
      </div>
      <button
        type="submit"
        class="peer relative block w-full border border-transparent bg-gradient-to-r from-zed-orange from-20% via-zed-red to-zed-orange to-80% px-6 pb-4 pt-4 text-base/6 text-white transition-all duration-500 hover:opacity-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 group-last:rounded-b-2xl"
      >
        {{ label }}
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    label: {
      type: String,
      default: "Submit",
    },
  });
  </script>
  