<script setup lang="ts">
const supabase = useSupabaseClient();
const email = ref("");

const signInWithOtp = async () => {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: "http://localhost:3000/confirm",
    },
  });
  if (error) console.log(error);
};
</script>
<template>
  <div>
    <div
      class="flex h-full rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline"
    >
      <div
        class="grid h-full w-full place-items-start justify-items-center overflow-hidden p-6 py-8 sm:p-8 lg:p-12"
      >
        <form class="w-full max-w-sm space-y-8">
          <h3
            class="text-lg/7 font-semibold tracking-[-0.015em] text-zinc-950 sm:text-base/7 dark:text-white"
          >
            Sign in
          </h3>
          <div
            class="[&amp;>*+[data-slot=control]]:mt-6 [&amp;>[data-slot=text]]:mt-1"
            role="group"
            data-headlessui-state=""
          >
            <div data-slot="control" class="space-y-8">
              <div
                class="[&amp;>[data-slot=label]+[data-slot=control]]:mt-3 [&amp;>[data-slot=label]+[data-slot=description]]:mt-1 [&amp;>[data-slot=description]+[data-slot=control]]:mt-3 [&amp;>[data-slot=control]+[data-slot=description]]:mt-3 [&amp;>[data-slot=control]+[data-slot=error]]:mt-3 [&amp;>[data-slot=label]]:font-medium"
                data-headlessui-state=""
              >
                <label
                  data-slot="label"
                  class="select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white"
                  id="headlessui-label-:R1d9llfalta:"
                  for="headlessui-control-:R19llfalta:"
                  data-headlessui-state=""
                  >Email</label
                ><span
                  data-slot="control"
                  class="relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none before:has-[[data-invalid]]:shadow-red-500/10 sm:after:focus-within:ring-2 sm:after:focus-within:ring-blue-500 dark:before:hidden"
                  ><input
                    class="relative block w-full appearance-none rounded-lg border border-zinc-950/10 bg-transparent px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 focus:outline-none data-[disabled]:border-zinc-950/20 data-[hover]:border-zinc-950/20 data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 dark:border-white/10 dark:bg-white/5 dark:text-white dark:data-[hover]:border-white/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[invalid]:dark:border-red-500 data-[invalid]:data-[hover]:dark:border-red-500 data-[disabled]:dark:bg-white/[2.5%]"
                    id="headlessui-control-:R19llfalta:"
                    data-headlessui-state=""
                    name="username"
                    aria-labelledby="headlessui-label-:R1d9llfalta:"
                    v-model="email" 
                    type="email"
                /></span>
                <div
                  style="
                    position: fixed;
                    top: 1px;
                    left: 1px;
                    width: 1px;
                    height: 0;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0, 0, 0, 0);
                    white-space: nowrap;
                    border-width: 0;
                    display: none;
                  "
                ></div>
              </div>
              <div
                class="[&amp;>[data-slot=label]+[data-slot=control]]:mt-3 [&amp;>[data-slot=label]+[data-slot=description]]:mt-1 [&amp;>[data-slot=description]+[data-slot=control]]:mt-3 [&amp;>[data-slot=control]+[data-slot=description]]:mt-3 [&amp;>[data-slot=control]+[data-slot=error]]:mt-3 [&amp;>[data-slot=label]]:font-medium"
                data-headlessui-state=""
              >
                <label
                  data-slot="label"
                  class="select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white"
                  id="headlessui-label-:R1e9llfalta:"
                  for="headlessui-control-:R29llfalta:"
                  data-headlessui-state=""
                  >Password</label
                ><span
                  data-slot="control"
                  class="relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none before:has-[[data-invalid]]:shadow-red-500/10 sm:after:focus-within:ring-2 sm:after:focus-within:ring-blue-500 dark:before:hidden"
                  ><input
                    class="relative block w-full appearance-none rounded-lg border border-zinc-950/10 bg-transparent px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 focus:outline-none data-[disabled]:border-zinc-950/20 data-[hover]:border-zinc-950/20 data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 dark:border-white/10 dark:bg-white/5 dark:text-white dark:data-[hover]:border-white/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[invalid]:dark:border-red-500 data-[invalid]:data-[hover]:dark:border-red-500 data-[disabled]:dark:bg-white/[2.5%]"
                    type="password"
                    id="headlessui-control-:R29llfalta:"
                    data-headlessui-state=""
                    name="password"
                    aria-labelledby="headlessui-label-:R1e9llfalta:"
                /></span>
                <div
                  style="
                    position: fixed;
                    top: 1px;
                    left: 1px;
                    width: 1px;
                    height: 0;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0, 0, 0, 0);
                    white-space: nowrap;
                    border-width: 0;
                    display: none;
                  "
                ></div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap justify-between gap-2">
            <div class="flex items-center gap-2" data-headlessui-state="">
              <button
                data-slot="control"
                class="group relative isolate inline-flex h-6 w-10 cursor-default rounded-full bg-zinc-200 p-[3px] ring-1 ring-inset ring-black/5 transition duration-0 ease-in-out [--switch-bg-ring:theme(colors.zinc.950/90%)] [--switch-bg:theme(colors.zinc.900)] [--switch-ring:theme(colors.zinc.950/90%)] [--switch-shadow:theme(colors.black/10%)] [--switch:white] focus:outline-none data-[checked]:bg-[--switch-bg] data-[disabled]:bg-zinc-200 data-[disabled]:data-[checked]:bg-zinc-200 data-[disabled]:opacity-50 data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[checked]:ring-[--switch-bg-ring] data-[disabled]:data-[checked]:ring-black/5 data-[hover]:data-[checked]:ring-[--switch-bg-ring] data-[hover]:ring-black/15 data-[changing]:duration-200 sm:h-5 sm:w-8 dark:bg-white/5 dark:ring-white/15 dark:[--switch-bg-ring:transparent] dark:[--switch-bg:theme(colors.white/25%)] dark:[--switch-ring:theme(colors.zinc.700/90%)] dark:data-[checked]:bg-[--switch-bg] dark:data-[disabled]:bg-white/15 dark:data-[disabled]:data-[checked]:bg-white/15 dark:data-[checked]:ring-[--switch-bg-ring] dark:data-[disabled]:data-[checked]:ring-white/15 dark:data-[hover]:data-[checked]:ring-[--switch-bg-ring] dark:data-[hover]:ring-white/25 forced-colors:outline forced-colors:[--switch-bg:Highlight] dark:forced-colors:[--switch-bg:Highlight]"
                id="headlessui-control-:R1dllfalta:"
                role="switch"
                type="button"
                tabindex="0"
                aria-checked="false"
                data-headlessui-state=""
                aria-labelledby="headlessui-label-:R2ddllfalta:"
              >
                <span
                  aria-hidden="true"
                  class="pointer-events-none relative inline-block size-[1.125rem] translate-x-0 rounded-full border border-transparent bg-white shadow ring-1 ring-black/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-4 group-data-[checked]:bg-[--switch] group-data-[disabled]:group-data-[checked]:bg-white group-data-[disabled]:group-data-[checked]:shadow group-data-[checked]:shadow-[--switch-shadow] group-data-[checked]:ring-[--switch-ring] group-data-[disabled]:group-data-[checked]:ring-black/5 sm:size-3.5 sm:group-data-[checked]:translate-x-3"
                ></span></button
              ><label
                data-slot="label"
                class="select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white"
                id="headlessui-label-:R2ddllfalta:"
                for="headlessui-control-:R1dllfalta:"
                data-headlessui-state=""
                >Remember <span class="hidden sm:inline">me</span></label
              >
              <div
                style="
                  position: fixed;
                  top: 1px;
                  left: 1px;
                  width: 1px;
                  height: 0;
                  padding: 0;
                  margin: -1px;
                  overflow: hidden;
                  clip: rect(0, 0, 0, 0);
                  white-space: nowrap;
                  border-width: 0;
                  display: none;
                "
              >
                <input
                  hidden=""
                  type="hidden"
                  style="
                    position: fixed;
                    top: 1px;
                    left: 1px;
                    width: 1px;
                    height: 0px;
                    padding: 0px;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0px, 0px, 0px, 0px);
                    white-space: nowrap;
                    border-width: 0px;
                    display: none;
                  "
                />
              </div>
            </div>
            <p
              data-slot="text"
              class="text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400"
            >
              <a
                href="#"
                class="font-semibold text-zinc-950 hover:text-zinc-700 dark:text-white dark:hover:text-zinc-300"
                >Forgot password?</a
              >
            </p>
          </div>
          <button
            class="[&amp;>[data-slot=icon]]:-mx-0.5 [&amp;>[data-slot=icon]]:my-0.5 [&amp;>[data-slot=icon]]:size-5 [&amp;>[data-slot=icon]]:shrink-0 [&amp;>[data-slot=icon]]:text-[--btn-icon] [&amp;>[data-slot=icon]]:sm:my-1 [&amp;>[data-slot=icon]]:sm:size-4 relative isolate inline-flex w-full cursor-default items-center justify-center gap-x-2 rounded-lg border border-transparent bg-[--btn-border] px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] text-base/6 font-semibold text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)] [--btn-icon:theme(colors.zinc.400)] before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg] before:shadow after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)] after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] focus:outline-none data-[disabled]:opacity-50 data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[active]:[--btn-icon:theme(colors.zinc.300)] data-[hover]:[--btn-icon:theme(colors.zinc.300)] before:data-[disabled]:shadow-none after:data-[active]:bg-[--btn-hover-overlay] after:data-[hover]:bg-[--btn-hover-overlay] after:data-[disabled]:shadow-none sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 dark:border-white/5 dark:bg-[--btn-bg] dark:text-white dark:[--btn-bg:theme(colors.zinc.600)] dark:[--btn-hover-overlay:theme(colors.white/5%)] dark:before:hidden dark:after:-inset-px dark:after:rounded-lg forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText]"
            type="button"
            data-headlessui-state=""
          >
            Get started<span
              class="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
              aria-hidden="true"
            ></span>
          </button>
          <button
            @click="signInWithOtp"
            class="[&amp;>[data-slot=icon]]:-mx-0.5 [&amp;>[data-slot=icon]]:my-0.5 [&amp;>[data-slot=icon]]:size-5 [&amp;>[data-slot=icon]]:shrink-0 [&amp;>[data-slot=icon]]:text-[--btn-icon] [&amp;>[data-slot=icon]]:sm:my-1 [&amp;>[data-slot=icon]]:sm:size-4 relative isolate inline-flex w-full cursor-default items-center justify-center gap-x-2 rounded-lg border border-transparent bg-[--btn-border] px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] text-base/6 font-semibold text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)] [--btn-icon:theme(colors.zinc.400)] before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg] before:shadow after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)] after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] focus:outline-none data-[disabled]:opacity-50 data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[active]:[--btn-icon:theme(colors.zinc.300)] data-[hover]:[--btn-icon:theme(colors.zinc.300)] before:data-[disabled]:shadow-none after:data-[active]:bg-[--btn-hover-overlay] after:data-[hover]:bg-[--btn-hover-overlay] after:data-[disabled]:shadow-none sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 dark:border-white/5 dark:bg-[--btn-bg] dark:text-white dark:[--btn-bg:theme(colors.zinc.600)] dark:[--btn-hover-overlay:theme(colors.white/5%)] dark:before:hidden dark:after:-inset-px dark:after:rounded-lg forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText]"
            type="button"
            data-headlessui-state=""
          >Sign In with E-Mail
            <span
              class="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
              aria-hidden="true"
              ></span
            >
          </button>
          <p
            data-slot="text"
            class="text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400"
          >
            Don’t have an account? <!-- -->
            <a
              href="#"
              class="font-semibold text-zinc-950 hover:text-zinc-700 dark:text-white dark:hover:text-zinc-300"
              >Sign up</a
            >
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
