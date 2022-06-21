<template layout="Authenticated">
  <InertiaHead title="Boards" />

  <div class="h-full bg-gray-50 px-4 py-6">
    <div class="mx-auto max-w-5xl">
      <div class="mb-4 flex items-center">
        <h3 class="font-black text-gray-700">My boards</h3>
        <button
          class="ml-4 inline-flex items-center rounded-md bg-gray-100 py-2 px-3 font-medium hover:bg-gray-200">
          <PlusIcon class="mr-1 -ml-1 h-4 w-4" />
          Create board
        </button>
      </div>

      <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <li
          v-for="b in Array.from({ length: 5 })"
          :key="b"
          class="relative min-h-[7rem] rounded-md bg-purple-600 hover:bg-purple-700">
          <a href="#" class="absolute inset-0 p-3 text-lg font-bold text-white">Board 1</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { PlusIcon } from '@heroicons/vue/solid';
</script>
