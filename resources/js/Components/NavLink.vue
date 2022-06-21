<template>
  <InertiaLink :href="href" :class="classes">
    <slot />
  </InertiaLink>
</template>

<script lang="ts">
const sameClasses = 'rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100';
</script>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ href: string; active: boolean }>();

const classes = computed(() => (props.active ? `${sameClasses} bg-gray-100` : sameClasses));
</script>
