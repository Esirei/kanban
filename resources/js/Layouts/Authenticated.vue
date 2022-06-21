<template>
  <div>
    <div class="min-h-screen bg-gray-100">
      <nav class="flex shrink-0 justify-between bg-white px-4 py-3">
        <a :href="route('dashboard')" class="text-2xl font-black tracking-tight">kanboard</a>
        <div class="flex items-center">
          <NavLink href="#">My boards</NavLink>
          <Menu as="div" class="relative z-10 ml-3">
            <MenuButton
              class="rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2">
              <img :src="avatar" alt="me" class="inline h-9 w-9 rounded-full" />
            </MenuButton>

            <transition
              enter-active-class="transition transform duration-100 ease-out"
              enter-from-class="opacity-0 scale-90"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition transform duration-100 ease-in"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-90">
              <MenuItems
                class="absolute right-0 mt-2 w-48 origin-top-right overflow-hidden rounded-md border bg-white shadow-lg focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="{ 'bg-gray-100': active }"
                    class="block px-4 py-2 text-sm text-gray-700">
                    My Profile
                  </a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <InertiaLink
                    :href="route('logout')"
                    method="post"
                    as="button"
                    :class="{ 'bg-gray-100': active }"
                    class="block w-full px-4 py-2 text-left text-sm text-gray-700">
                    Log out
                  </InertiaLink>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </nav>

      <!-- Page Heading -->
      <header v-if="$slots.header" class="bg-white shadow">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <slot name="header" />
        </div>
      </header>

      <!-- Page Content -->
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import NavLink from '@/Components/NavLink.vue';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import avatar from '~images/avatar.jpg';
</script>
