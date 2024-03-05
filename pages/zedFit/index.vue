<script setup lang="ts">
const colorMode = useColorMode();
definePageMeta({
  layout: "marketing-layout",
});
</script>

<template>
  <div class="flex place-content-center p-24">
    <a href="#" class="-m-1.5 p-1.5">
      <span class="sr-only">zedFit</span>
      <img
        v-show="$colorMode.value === 'dark'"
        src="/assets/img/zedFit_Dark.svg"
        class="h-96 w-auto"
      />

      <img
        v-show="$colorMode.value === 'light'"
        src="/assets/img/zedFit_Light.svg"
        class="h-96 w-auto"
      />
    </a>
  </div>
</template>
