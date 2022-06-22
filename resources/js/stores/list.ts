import { defineStore } from 'pinia';

export const useEditingListStore = defineStore('editingList', {
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
