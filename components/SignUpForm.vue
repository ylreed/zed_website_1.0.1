<script setup lang="ts">

const colorMode = useColorMode();
const loginStore = useLoginStore();

const supabase = useSupabaseClient();

const email = ref("");
const password = ref("");
const errorMsg = ref("");

const signUpWithEmail = async () => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
  } catch (error) {
    errorMsg.value = (error as Error).message;
    document.getElementById("er2")!.classList.add("animate-fade");
    setTimeout(() => {
      console.log("hide");
      document.getElementById("er2")!.classList.remove("animate-fade");
      errorMsg.value = "";
    }, 4000);
  }
};
</script>
<template>
  <div>
    <HeadlessDialogTitle>
      <div>
        <h2
          class="mt-12 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          Create account
        </h2>
      </div>
    </HeadlessDialogTitle>
    <form @submit.prevent="signUpWithEmail" novalidate>
      <div class="isolate mt-12 -space-y-px rounded-lg">
        <AppInput
          id="se1"
          :name="'email'"
          :label="'email'"
          :type="'email'"
          v-model="email"
          autocomplete="email"
          :required="true"
        />
        <AppInput
          id="sp1"
          :name="'password'"
          :label="'password'"
          :type="'password'"
          v-model="password"
        />
        <AppSubmit label="Sign Up" />
      </div>
      <div class="h-6">
        <p
          id="er2"
          class="p-2 text-left text-sm font-semibold leading-6 text-zed-red"
        >
          {{ errorMsg }}
        </p>
      </div>
    </form>
    <p class="mt-10 text-center text-sm text-gray-500">
      Already a member?
      <a
        @click="loginStore.toggle()"
        class="cursor-pointer px-1 font-semibold leading-6 text-zed-orange hover:text-zed-red"
        >Sign in</a
      >
    </p>
  </div>
</template>
