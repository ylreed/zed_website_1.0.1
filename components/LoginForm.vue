<script setup lang="ts">
const router = useRouter();

const colorMode = useColorMode();
const loginStore = useLoginStore();

const supabase = useSupabaseClient();

const email = ref("");
const password = ref("");
const errorMsg = ref("");

async function signInWithEmail() {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    router.push("zedFit/coach");
  } catch (error) {
    errorMsg.value = (error as Error).message;
    document.getElementById("er1")!.classList.add("animate-fade");
    setTimeout(() => {
      console.log("hide");
      document.getElementById("er1")!.classList.remove("animate-fade");
      errorMsg.value = "";
    }, 4000);
  }
}
</script>
<template>
  <div>
    <HeadlessDialogTitle>
      <div>
        <h2
          class="mt-12 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          Sign in to your account
        </h2>
      </div>
    </HeadlessDialogTitle>
    <form @submit.prevent="signInWithEmail" novalidate>
      <div class="isolate mt-12 -space-y-px rounded-lg">
        <AppInput
          id="le1"
          :name="'email'"
          :label="'email'"
          :type="'email'"
          v-model="email"
          autocomplete="email"
          :required="true"
        />
        <AppInput
          id="lp1"
          :name="'password'"
          :label="'password'"
          :type="'password'"
          v-model="password"
        />
        <AppSubmit label="Log in" />
      </div>
      <div class="h-6">
        <p id="er1" class="p-2 text-sm text-left font-semibold leading-6 text-zed-red">
          {{ errorMsg }}
        </p>
      </div>
    </form>
    <p class="mt-10 cursor-pointer text-center text-sm">
      <a
        href="#"
        class="font-semibold leading-6 text-zed-orange hover:text-zed-red"
        >Forgot password?</a
      >
    </p>
    <p class="mt-4 text-center text-sm text-gray-500">
      Not a member?
      <a
        @click="loginStore.toggle()"
        class="cursor-pointer px-1 font-semibold leading-6 text-zed-orange hover:text-zed-red"
        >Start a 14 day free trial
      </a>
    </p>
  </div>
</template>
