import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useEditingCardStore = defineStore('editingCardId', () => {
  const cardId = ref<number>();

  const close = () => (cardId.value = undefined);
  const edit = (id: number) => (cardId.value = id);

  return { cardId, close, edit };
});

export const useCreatingCardStore = defineStore('creatingCard', {
  state: (): { listId: undefined | number } => ({ listId: undefined }),
  actions: {
    close() {
      this.listId = undefined;
    },
    edit(id: number) {
      this.listId = id;
    },
  },
});
