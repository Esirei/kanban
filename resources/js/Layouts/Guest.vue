<template>
  <div class="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
    <div>
      <InertiaLink href="/">
        <BreezeApplicationLogo class="h-20 w-20 fill-current text-gray-500" />
      </InertiaLink>
    </div>

    <div class="mt-6 w-full overflow-hidden bg-white py-4 px-6 shadow-md sm:max-w-md sm:rounded-lg">
      <slot />
    </div>
  </div>
</template>

<script>
import BreezeApplicationLogo from '@/Components/ApplicationLogo.vue';

export default {
  components: {
    BreezeApplicationLogo,
  },
};
</script>
