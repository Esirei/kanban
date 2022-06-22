<template>
  <li
    class="group relative rounded-md border-b border-gray-300 bg-white p-3 shadow hover:bg-gray-50">
    <form
      v-if="isShowingForm"
      ref="formRef"
      class="rounded-md"
      @keydown.esc="closeForm"
      @submit.prevent="submitForm">
      <textarea
        ref="titleRef"
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
          Update card
        </button>
        <button
          type="button"
          class="rounded-md py-2 px-4 text-sm font-medium text-gray-700 ring-offset-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
          @click="closeForm">
          Cancel
        </button>
      </div>
    </form>

    <template v-if="!isShowingForm">
      <a href="#" class="text-sm">{{ form.title }}</a>
      <button
        class="absolute top-1 right-1 hidden h-8 w-8 place-content-center rounded-md bg-gray-50 text-gray-600 hover:bg-gray-200 hover:text-black group-hover:grid"
        @click="showForm">
        <PencilIcon class="h-5 w-5" />
      </button>
    </template>
  </li>
</template>

<script setup lang="ts">
import { PencilIcon } from '@heroicons/vue/solid';
import { useForm } from '@inertiajs/inertia-vue3';
import { nextTick, ref } from 'vue';
import InputError from '~/Components/InputError.vue';
import { Card } from '~/types/models/board';

interface Props {
  card: Card;
}

const props = defineProps<Props>();

const isShowingForm = ref(false);
const titleRef = ref<HTMLInputElement>();
const formRef = ref<HTMLFormElement>();

const showForm = async () => {
  isShowingForm.value = true;
  await nextTick();
  titleRef.value?.select();
  formRef.value?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

const closeForm = () => {
  isShowingForm.value = false;
  form.reset().clearErrors();
};

const form = useForm({ title: props.card.title });

const submitForm = () => {
  isShowingForm.value = false;
  if (!form.title) return form.reset('title');
  if (!form.isDirty) return;
  form.patch(route('cards.update', props.card), {
    onSuccess: () => closeForm(),
  });
};
</script>
