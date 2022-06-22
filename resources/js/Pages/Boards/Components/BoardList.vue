<template>
  <div class="flex max-h-full w-72 flex-col rounded-md bg-gray-200">
    <div class="flex items-center justify-between px-3 py-2">
      <h3 class="text-sm font-semibold text-gray-700">{{ list.name }}</h3>
      <Menu as="div" class="relative z-10">
        <MenuButton class="grid h-8 w-8 place-content-center rounded-md hover:bg-gray-300">
          <DotsHorizontalIcon class="h-5 w-5" />
        </MenuButton>

        <transition
          enter-active-class="transition transform duration-100 ease-out"
          enter-from-class="opacity-0 scale-90"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition transform duration-100 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-90">
          <MenuItems
            class="absolute left-0 mt-2 w-40 origin-top-left overflow-hidden rounded-md border bg-white shadow-lg focus:outline-none">
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="{ 'bg-gray-100': active }"
                class="block px-4 py-2 text-sm text-gray-700">
                Add Card
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="{ 'bg-gray-100': active }"
                class="block px-4 py-2 text-sm text-red-600">
                Delete List
              </a>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
    </div>

    <div class="flex flex-col overflow-hidden pb-3">
      <div class="flex-1 overflow-auto px-3 scrollbar-border-gray-200">
        <ul class="space-y-3">
          <li
            v-for="card in list.cards"
            :key="card.id"
            class="group relative rounded-md border-b border-gray-300 bg-white p-3 shadow hover:bg-gray-50">
            <a href="#" class="text-sm">{{ card.title }}</a>
            <button
              class="absolute top-1 right-1 hidden h-8 w-8 place-content-center rounded-md bg-gray-50 text-gray-600 hover:bg-gray-200 hover:text-black group-hover:grid">
              <PencilIcon class="h-5 w-5" />
            </button>
          </li>
        </ul>
      </div>

      <div class="mt-3 px-3">
        <button
          class="flex w-full items-center rounded-md p-2 text-sm font-medium text-gray-600 hover:bg-gray-300 hover:text-black">
          <PlusIcon class="mr-1 h-5 w-5" />
          Add card
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { DotsHorizontalIcon, PencilIcon, PlusIcon } from '@heroicons/vue/solid';
import { List } from '~/types/models/board';

interface Props {
  list: List;
}

const props = defineProps<Props>();
</script>
