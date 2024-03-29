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
      <div ref="listRef" class="flex-1 overflow-auto px-3 scrollbar-border-gray-200">
        <ul class="space-y-3">
          <CardItem v-for="card in list.cards" :key="`${card.id}-${card.title}`" :card="card" />
        </ul>
      </div>

      <div class="mt-3 px-3">
        <CreateCard :list="list" @created="onCardCreated" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { DotsHorizontalIcon } from '@heroicons/vue/solid';
import { ref } from 'vue';
import { List } from '~/types/models/board';
import CardItem from './CardItem.vue';
import CreateCard from './CreateCard.vue';

interface Props {
  list: List;
}

defineProps<Props>();

const listRef = ref<HTMLUListElement>();

const onCardCreated = () => {
  listRef.value?.scrollTo({ top: listRef.value?.scrollHeight, behavior: 'smooth' });
};
</script>
