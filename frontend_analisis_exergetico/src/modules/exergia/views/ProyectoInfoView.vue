<template>
  <div>
    <q-dialog v-model="infoDialogo">
      <q-card class="window-width">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ proyecto?.nombre }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-none text-body1 text-grey">
          {{
            proyecto?.descripcion?.trim() !== ''
              ? proyecto?.descripcion?.trim()
              : 'Sin descripción'
          }}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePopupStore } from '../stores';
import { useProyectoStore } from '../stores/use-proyecto';

const proyectoStore = useProyectoStore();
const popupStore = usePopupStore();

const { infoDialogo } = storeToRefs(popupStore);
const { proyecto } = storeToRefs(proyectoStore);
</script>

<style scoped></style>
