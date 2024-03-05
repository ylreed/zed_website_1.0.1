<script setup lang="ts">
const colorMode = useColorMode()
const modalStore = useModalStore()
const user = useSupabaseUser()


</script>

<template>
  <div>
    <!-- User is logged out, let them log in -->
    <div>
      <Icon
        name="heroicons-solid:user-circle"
        v-show="!user"
        class="hover:text-zed-orange h-7 w-7 cursor-pointer text-zinc-500 transition-transform duration-100 hover:scale-125 dark:text-zinc-50"
        @click="modalStore.toggle()"
      />
    </div>
    <!-- User is logged in, direc thtem to the dashboard -->
    <NuxtLink to="/zedFit/coach" v-show="user">
      <Icon
        name="heroicons:rectangle-group"
        class="hover:text-zed-orange h-9 w-9 cursor-pointer text-zinc-500 transition-transform duration-100 hover:scale-125 dark:text-zinc-50"
      />
    </NuxtLink>
  </div>
 
</template>
