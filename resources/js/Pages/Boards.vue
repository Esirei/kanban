<template layout="Authenticated">
  <InertiaHead title="Boards" />

  <div class="h-full overflow-y-auto bg-gray-50 px-4 py-6">
    <div class="mx-auto max-w-5xl">
      <div class="mb-4 flex items-center px-3">
        <h3 class="font-black text-gray-700">My boards</h3>

        <Popover v-slot="{ open }" class="relative">
          <PopoverButton
            :class="{ 'bg-purple-50 text-purple-600': open }"
            class="ml-4 inline-flex items-center rounded-md bg-gray-100 py-2 px-3 font-medium outline-none hover:bg-gray-200/75">
            <PlusIcon class="mr-1 -ml-1 h-4 w-4" />
            Create board
          </PopoverButton>

          <PopoverOverlay class="fixed inset-0 z-10 bg-black/30" />

          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0">
            <PopoverPanel
              v-slot="{ close }"
              focus
              class="absolute left-1/2 z-10 mt-3 w-72 -translate-x-1/2 px-4 sm:px-0">
              <div class="overflow-hidden rounded-lg bg-white p-3 shadow-lg ring-1 ring-black/5">
                <form @submit.prevent="createBoard(close)">
                  <label for="name" class="mb-1 block text-sm font-medium text-gray-600">
                    Your new board:
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    class="block w-full rounded-md border-gray-300 text-sm shadow-sm focus:border-purple-400 focus:ring-purple-400"
                    type="text"
                    name="name"
                    placeholder="Board name" />
                  <p v-if="form.errors.name" class="text-sm text-red-600">{{ form.errors.name }}</p>
                  <div class="mt-2 flex justify-end">
                    <button
                      class="rounded-md bg-rose-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                      Create board
                    </button>
                  </div>
                </form>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </div>

      <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <li
          v-for="board in boards"
          :key="board.id"
          class="relative min-h-[7rem] rounded-md bg-purple-600 hover:bg-purple-700">
          <InertiaLink
            :href="route('boards.show', board)"
            class="absolute inset-0 p-3 text-lg font-bold text-white">
            {{ board.name }}
          </InertiaLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverOverlay, PopoverPanel } from '@headlessui/vue';
import { PlusIcon } from '@heroicons/vue/solid';
import { useForm } from '@inertiajs/inertia-vue3';

interface Board {
  id: number;
  name: string;
  user_id: number;
}

defineProps<{ boards: Board[] }>();

const form = useForm({ name: '' });

const createBoard = (close: () => void) => {
  form.post(route('boards.store'), {
    onSuccess: () => {
      close();
      form.reset();
    },
  });
};
</script>
