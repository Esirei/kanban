<template>
  <button
    v-if="!isShowingForm"
    class="flex w-full items-center rounded-md p-2 text-sm font-medium text-gray-600 hover:bg-gray-300 hover:text-black"
    @click="showForm">
    <PlusIcon class="mr-1 h-5 w-5" />
    Add card
  </button>

  <form
    v-if="isShowingForm"
    class="rounded-md"
    @keydown.esc="closeForm"
    @submit.prevent="submitForm">
    <textarea
      ref="input"
      v-model="form.title"
      rows="3"
      type="text"
      placeholder="Enter card title..."
      class="block w-full rounded-md border-gray-300 text-sm shadow-sm focus:border-purple-400 focus:ring-purple-400"
      @keydown.enter.exact.prevent="submitForm" />
    <InputError class="mt-1" :message="form.errors.title" />
    <div class="mt-2 space-x-2">
      <button
        type="submit"
        class="rounded-md bg-rose-600 py-2 px-4 text-sm font-medium text-white shadow-sm ring-offset-gray-200 hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
        Add card
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
import { computed, nextTick, ref } from 'vue';
import InputError from '~/Components/InputError.vue';
import { useCreatingCardStore } from '~/stores/card';
import { List } from '~/types/models/board';
import { PlusIcon } from '@heroicons/vue/solid';

interface Props {
  list: List;
}

const props = defineProps<Props>();
const emit = defineEmits<{ (e: 'created'): void }>();
const store = useCreatingCardStore();

const isShowingForm = computed(() => props.list.id === store.listId);
const input = ref<HTMLInputElement>();

const showForm = async () => {
  store.edit(props.list.id);
  await nextTick();
  input.value?.focus();
};

const closeForm = () => {
  store.close();
  form.reset().clearErrors();
};

const form = useForm({ title: '' });

const submitForm = () => {
  form.post(route('lists.cards.store', props.list), {
    onSuccess: () => {
      form.reset();
      input.value?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      input.value?.focus();
      emit('created');
    },
  });
};
</script>
