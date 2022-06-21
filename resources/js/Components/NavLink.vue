<template>
  <InertiaLink
    :href="href"
    class="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100"
    :class="{ 'bg-gray-100': active }">
    <slot />
  </InertiaLink>
</template>

<script setup lang="ts">
import { InertiaLinkProps } from '@inertiajs/inertia-vue3';

interface Props extends InertiaLinkProps {
  active: boolean;
}
withDefaults(defineProps<Props>(), {
  active: false,
});
</script>
