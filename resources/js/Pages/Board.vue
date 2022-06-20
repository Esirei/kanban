<template>
  <div class="flex h-screen flex-col bg-purple-400">
    <header class="flex shrink-0 justify-between bg-white px-4 py-3">
      <a href="/" class="text-2xl font-black tracking-tight">kanboard</a>
      <nav>
        <a href="#" class="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100">My boards</a>
        <button class="ml-3">
          <img :src="avatar" alt="me" class="inline h-9 w-9 rounded-full" />
        </button>
      </nav>
    </header>

    <main class="flex-1 overflow-hidden">
      <div class="flex h-full flex-col">
        <div class="flex shrink-0 items-center justify-between p-4">
          <h1 class="text-2xl font-bold text-white">Board title</h1>
          <div>
            <button
              class="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/20">
              <DotsHorizontalIcon class="mr-1 h-5 w-5" />
              Settings
            </button>
          </div>
        </div>

        <div class="flex-1 overflow-x-auto">
          <div class="inline-flex h-full items-start space-x-4 px-4 pb-4">
            <div
              v-for="b in Array.from({ length: 5 })"
              :key="b"
              class="flex max-h-full w-72 flex-col overflow-hidden rounded-md bg-gray-200">
              <div class="flex items-center justify-between px-3 py-2">
                <h3 class="text-sm font-semibold text-gray-700">Backlog</h3>
                <button class="grid h-8 w-8 place-content-center rounded-md hover:bg-gray-300">
                  <DotsHorizontalIcon class="h-5 w-5" />
                </button>
              </div>

              <div class="flex flex-col overflow-hidden px-3 pb-3">
                <div class="flex-1 overflow-auto">
                  <ul class="space-y-3">
                    <li
                      v-for="i in Array.from({ length: 20 })"
                      :key="i"
                      class="group relative rounded-md border-b border-gray-300 bg-white p-3 shadow hover:bg-gray-50">
                      <a href="#" class="text-sm">card item</a>
                      <button
                        class="absolute top-1 right-1 hidden h-8 w-8 place-content-center rounded-md bg-gray-50 text-gray-600 hover:bg-gray-200 hover:text-black group-hover:grid">
                        <PencilIcon class="h-5 w-5" />
                      </button>
                    </li>
                  </ul>
                </div>

                <div class="mt-3">
                  <button
                    class="flex w-full items-center rounded-md p-2 text-sm font-medium text-gray-600 hover:bg-gray-300 hover:text-black">
                    <PlusIcon class="mr-1 h-5 w-5" />
                    Add card
                  </button>
                </div>
              </div>
            </div>

            <div class="w-72">
              <button
                class="flex w-full items-center rounded-md bg-white/10 p-2 text-sm font-medium text-white hover:bg-white/20">
                <PlusIcon class="mt-1 h-5 w-5" />
                Add another list
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import avatar from '~images/avatar.jpg';
import { DotsHorizontalIcon, PencilIcon, PlusIcon } from '@heroicons/vue/solid';
</script>

<script>
export default {
  name: 'Board',
};
</script>

<style scoped></style>
