<template>
  <HeadlessTransitionRoot :show="modalStore.isOpen" as="template">
    <HeadlessDialog @close="modalStore.toggle()">
      <!-- The backdrop, rendered as a fixed sibling to the panel container -->
      <!-- Wrap your backdrop in a `TransitionChild`. -->
      <HeadlessTransitionChild
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/30 dark:bg-white/30" />
      </HeadlessTransitionChild>
      <!-- Wrap your panel in a `TransitionChild`. -->
      <HeadlessTransitionChild
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <!-- Full-screen container to center the panel -->
        <div
          class="fixed inset-0 flex w-screen items-center justify-center p-4"
        >
          <!-- The actual dialog panel -->
          <HeadlessDialogPanel
            class="w-full max-w-md transform overflow-hidden rounded-xl bg-zinc-50 p-6 text-left align-middle shadow-xl transition-all dark:bg-zinc-900"
          >
              <slot />
      
          </HeadlessDialogPanel>
        </div>
      </HeadlessTransitionChild>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>

<script setup lang="ts">
const modalStore = useModalStore();
</script>
