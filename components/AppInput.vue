<template>
    <div class="group relative z-0 transition-all focus-within:z-10">
      <input
        :id="id"
        :name="name"
        v-model="model"
        :autocomplete="autocomplete"
        :type="type"
        :required=required
        :placeholder="placeholder"
        :disabled="disabled"
        :pattern="pattern"
        class="peer block w-full border border-zinc-300 bg-transparent bg-white px-6 pb-4 pt-12 text-base/6 text-zinc-900 ring-4 ring-transparent transition autofill:!bg-yellow-200 focus:shadow-inner focus:outline-none group-first:rounded-t-2xl group-last:rounded-b-2xl dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 invalid:[&:not(:placeholder-shown):not(:focus)]:text-zed-red"
      /><label
        :for="id"
        class="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-zinc-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-zed-orange peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-zinc-500 dark:text-zinc-400 dark:peer-focus:text-zinc-500 dark:peer-[:not(:placeholder-shown)]:text-zinc-600 "
        >{{ label }}</label
      >
    </div>
  </template>
  
  <script setup lang="ts">
  const model = defineModel();
  const props = defineProps({
    type: {
      type: String,
      default: "text",
    },
    id: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    autocomplete: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: " ",
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  });
  
  const pattern = () => {
    if (props.type == "email") {
      return "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
    } else if (props.type == "password") {
      return " ";
    } else {
      return " ";
    }
  
  };

  </script>