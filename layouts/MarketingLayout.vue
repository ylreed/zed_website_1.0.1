<script setup lang="ts">
import { ref } from "vue";
const modalStore = useModalStore();
const loginStore = useLoginStore();
const colorMode = useColorMode();
</script>

<template>
  <div class="bg-zinc-50 dark:bg-zinc-900">
    <header
      class="sticky top-0 bg-zinc-50/95 backdrop-blur dark:bg-zinc-900/95"
    >
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">zedFit</span>
            <img
              v-show="colorMode.value === 'dark'"
              src="/assets/img/zedFit_Dark.svg"
              class="h-8 w-auto"
            />

            <img
              v-show="colorMode.value === 'light'"
              src="/assets/img/zedFit_Light.svg"
              class="h-8 w-auto"
            />
          </a>
        </div>

        <div class="-m-1.5 flex p-1.5">
          <ThemeSwitcherButton class="pr-2" />
          <LoggedInToggleButton />
          <FullPageModal>
            <div>
            <img
              v-show="$colorMode.value === 'dark'"
              src="/assets/img/zedFit_Dark.svg"
              class="mx-auto mt-8 h-10 w-auto"
              alt="zedFit"
            />

            <img
              v-show="$colorMode.value === 'light'"
              src="/assets/img/zedFit_Light.svg"
              class="mx-auto mt-8 h-10 w-auto"
              alt="zedFit"
            />
          </div>
            <section class="relative w-full h-[500px] overflow-hidden text-center">
              <HeadlessTransitionRoot
                :show="!loginStore.isLogin"
                enter="transition ease-out duration-1000"
                enterFrom="opacity-0 -translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-1000"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-full"
                >
                <div class="absolute w-full"><LoginForm  /></div>
              </HeadlessTransitionRoot>
              <HeadlessTransitionRoot
                :show="loginStore.isLogin"
                enter="transition ease-out duration-1000"
                enterFrom="opacity-0 translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-1000"
                leaveFrom="opacity-100 -translate-x-0"
                leaveTo="opacity-0 translate-x-full"
                ><div class="absolute w-full"><SignUpForm  /></div>
              </HeadlessTransitionRoot>
            </section>
          </FullPageModal>
        </div>
      </nav>
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
