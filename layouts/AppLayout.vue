<script setup lang="ts">
import { ref } from "vue";

const menuOpen = ref(false);
</script>

<template>
  <div class="container bg-zinc-50 dark:bg-zinc-900">
    <header
      class="sticky top-0 z-50 bg-zinc-50/95 backdrop-blur dark:bg-zinc-50/95"
    >
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">zedFit</span>
            <img class="h-8 w-auto" src="/assets/img/zedFit_Light.svg" alt="" />
          </a>
        </div>
        <div class="flex">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="menuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" />
          </button>
        </div>
      </nav>
      <Dialog as="div" @close="menuOpen = false" :open="menuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="/assets/img/zF.svg" alt="" />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="menuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="divide-y divide-gray-500/10">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-900 hover:bg-gray-50"
                >Settings</a
              >
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <main>
      <slot></slot>
    </main>
    <footer>
      <div class="bg-slate-900">
        <slot name="footer"></slot>
      </div>
    </footer>
  </div>
</template>
