<template layout="Authenticated">
  <div class="flex h-screen flex-col bg-purple-400">
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

        <div
          class="flex-1 overflow-x-auto scrollbar-thumb-white/50 scrollbar-thumb-hover-white scrollbar-border-purple-400">
          <div class="inline-flex h-full items-start space-x-4 px-4 pb-4">
            <div
              v-for="b in Array.from({ length: 5 })"
              :key="b"
              class="flex max-h-full w-72 flex-col rounded-md bg-gray-200">
              <div class="flex items-center justify-between px-3 py-2">
                <h3 class="text-sm font-semibold text-gray-700">Backlog</h3>
                <Menu as="div" class="relative z-10">
                  <MenuButton
                    class="grid h-8 w-8 place-content-center rounded-md hover:bg-gray-300">
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

                <div class="mt-3 px-3">
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
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { DotsHorizontalIcon, PencilIcon, PlusIcon } from '@heroicons/vue/solid';
</script>

<style scoped></style>
