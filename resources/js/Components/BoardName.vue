<template>
  <div class="relative -m-1 flex max-w-full flex-col items-start truncate p-1">
    <h1
      :class="{ invisible: isEditing }"
      class="w-full cursor-pointer overflow-hidden text-ellipsis rounded-md border border-transparent px-3 py-1.5 text-xl font-bold text-white hover:bg-white/20"
      @click="edit">
      {{ form.name || ' ' }}
    </h1>
    <form v-show="isEditing" class="w-full" @submit.prevent="submitName" @focusout="submitName">
      <input
        ref="input"
        v-model="form.name"
        type="text"
        placeholder="Board name"
        class="absolute inset-1 max-w-full rounded-md px-3 py-1.5 text-xl font-bold placeholder:text-gray-400 focus:ring-2 focus:ring-purple-900" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from '@inertiajs/inertia-vue3';
import { nextTick, ref } from 'vue';
import { Board } from '~/types/models/board';

const props = defineProps<{ board: Board }>();

const form = useForm({ name: props.board.name });

// const heading = ref<HTMLHeadingElement>();
const input = ref<HTMLInputElement>();
const isEditing = ref(false);

// const syncWidths = async () => {
//   if (!input.value || !heading.value) return;
//   await nextTick();
//   input.value.style.width = `${heading.value.offsetWidth + 1}px`;
// };

// watch(() => form.name, syncWidths);

const edit = async () => {
  isEditing.value = true;
  // await syncWidths();
  await nextTick();
  input.value?.select();
};

const submitName = () => {
  isEditing.value = false;
  if (!form.name) return form.reset();
  if (!form.isDirty) return;
  form.patch(route('boards.update', props.board), {
    onError: () => form.reset(),
    preserveScroll: true,
    preserveState: true,
  });
};
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BoardName',
});
</script>
