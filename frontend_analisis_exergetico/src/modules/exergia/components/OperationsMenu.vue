<template>
  <q-btn no-caps flat color="primary" icon="ion-list" label="Operaciones">
    <q-menu fit auto-close anchor="bottom left" self="top left">
      <q-item clickable @click="showDeleteDialog">
        <q-item-section>Eliminar trabajador dado el CI</q-item-section>
      </q-item>
      <q-item clickable @click="showUpdateDialog">
        <q-item-section>Actualizar nivel de escolaridad</q-item-section>
      </q-item>
    </q-menu>
  </q-btn>

  <DeleteWorkerByICView></DeleteWorkerByICView>
  <UpdateSchoolLevelView></UpdateSchoolLevelView>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePopupStore } from 'src/stores/popup';
import DeleteWorkerByICView from 'src/modules/workers/views/DeleteWorkerByICView.vue';
import UpdateSchoolLevelView from 'src/modules/workers/views/UpdateSchoolLevelView.vue';

const popupStore = usePopupStore();
const { showDeleteByICDialog, showUpdateSchoolLevelDialog } =
  storeToRefs(popupStore);

function showDeleteDialog() {
  showDeleteByICDialog.value = true;
}

function showUpdateDialog() {
  showUpdateSchoolLevelDialog.value = true;
}
</script>

<style scoped></style>
