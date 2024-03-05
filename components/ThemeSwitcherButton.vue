<template>
  <div items-center>
    <Icon
      name="heroicons-solid:sun"
      v-show="$colorMode.preference === 'light'"
      class="h-7 w-7 text-zinc-500 hover:text-zed-orange cursor-pointer transition-transform duration-100 hover:scale-125"
      @click="toggleTheme"
    />
    <Icon
      name="heroicons-outline:moon"
      v-show="$colorMode.preference === 'dark'"
      class="h-7 w-7 text-zinc-50 hover:text-zed-orange cursor-pointer transition-transform duration-100 hover:scale-125"
      @click="toggleTheme"
    />
  </div>
</template>
<script setup>
const colorMode = useColorMode();
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>
