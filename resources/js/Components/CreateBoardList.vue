<template>
  <button
    v-if="!isShowingForm"
    class="flex w-full items-center rounded-md bg-white/10 p-2 text-sm font-medium text-white hover:bg-white/20"
    @click="showForm">
    <PlusIcon class="mt-1 h-5 w-5" />
    Add
    <span v-if="board.lists.length">&nbsp;another&nbsp;</span>
    list
  </button>

  <form v-if="isShowingForm" class="rounded-md bg-gray-200 p-3" @submit.prevent="submitForm">
    <input
      ref="input"
      v-model="form.name"
      type="text"
      placeholder="Enter list name..."
      class="block w-full rounded-md border-gray-300 text-sm shadow-sm focus:border-purple-400 focus:ring-purple-400" />
    <InputError class="mt-1" :message="form.errors.name" />
    <div class="mt-2 space-x-2">
      <button
        type="submit"
        class="rounded-md bg-rose-600 py-2 px-4 text-sm font-medium text-white shadow-sm ring-offset-gray-200 hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
        Add list
      </button>
      <button
        type="button"
        class="rounded-md py-2 px-4 text-sm font-medium text-gray-700 ring-offset-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
        @click="closeForm">
        Cancel
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm } from '@inertiajs/inertia-vue3';
import { nextTick, ref } from 'vue';
import InputError from '~/Components/InputError.vue';
import { Board } from '~/types/models/board';
import { PlusIcon } from '@heroicons/vue/solid';

interface Props {
  board: Board;
}

const props = defineProps<Props>();

const isShowingForm = ref(false);
const input = ref<HTMLInputElement>();

const showForm = async () => {
  isShowingForm.value = true;
  await nextTick();
  input.value?.focus();
};

const closeForm = () => {
  isShowingForm.value = false;
  form.reset().clearErrors();
};

const form = useForm({ name: '' });

const submitForm = () => {
  form.post(route('boards.lists.store', props.board), {
    onSuccess: () => {
      form.reset();
      input.value?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      input.value?.focus();
    },
  });
};
</script>
