<template layout="Authenticated">
  <div class="flex h-full flex-col bg-purple-400">
    <div class="flex shrink-0 items-center justify-between gap-4 p-4">
      <BoardName :board="board" />
      <div>
        <button
          class="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/20">
          <DotsHorizontalIcon class="mr-1 h-5 w-5" />
          Settings
        </button>
      </div>
    </div>

    <div
      class="flex-1 overflow-x-auto scrollbar-thumb-white/50 scrollbar-thumb-hover-white scrollbar-border-purple-400">
      <div class="inline-flex h-full items-start space-x-4 px-4 pb-4">
        <BoardList v-for="list in board.lists" :key="list.id" :list="list" />

        <div class="w-72">
          <CreateBoardList :board="board" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DotsHorizontalIcon } from '@heroicons/vue/solid';
import BoardName from '~/Components/BoardName.vue';
import CreateBoardList from '~/Components/CreateBoardList.vue';
import BoardList from '~/Pages/Boards/Components/BoardList.vue';
import { Board } from '~/types/models/board';

defineProps<{ board: Board }>();
</script>

<style scoped></style>
