<template>
  <div>
    <q-scroll-area style="width: 60vw; height: 50vh">
      <q-list padding>
        <ItemWorker
          v-for="worker in sortedWorkers"
          show-options
          :key="worker.id"
          :worker="worker"
      /></q-list>
    </q-scroll-area>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useWorkerStore } from '../stores/workers';
import ItemWorker from './ItemWorker.vue';

const { sortedWorkers } = useWorkerStore();

onMounted(() => {
  sortedWorkers;
});
</script>

<style scoped></style>
