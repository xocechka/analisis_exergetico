<template>
  <q-page padding>
    <div class="column q-gutter-md">
      <q-circular-progress
        v-if="isLoading"
        indeterminate
        size="90px"
        :thickness="0.2"
        color="primary"
        center-color="grey"
        track-color="transparent"
        class="q-ma-md absolute-center"
      />
      <template v-else>
        <div class="row q-gutter-sm">
          <FlujoView class="col-5" tipo="Entrada" />
          <q-space />
          <FlujoView class="col-5" tipo="Salida" />
        </div>
        <div class="row q-pa-md rounded-borders bg-grey-2">
          <div class="column">
            <h5 class="q-ma-none q-mb-sm q-mr-md text-grey">
              {{ proyecto?.nombre }}
            </h5>
            <div class="row items-center q-gutter-sm">
              <span class="text-body1">Balance exergético: </span>
              <span class="text-body2 text-grey">
                {{ analisis?.balance ?? 'indefinido' }}</span
              >
            </div>
            <div class="row items-center q-gutter-sm">
              <span class="text-body1">Pérdida exergética: </span>
              <span class="text-body2 text-grey">
                {{ analisis?.perdidaExergetica ?? 'indefinido' }}</span
              >
            </div>
            <div class="row items-center q-gutter-sm">
              <span class="text-body1">Indice de sostenibilidad: </span>
              <span class="text-body2 text-grey">
                {{ analisis?.indiceSostenibilidad ?? 'indefinido' }}</span
              >
            </div>
          </div>
          <q-space />
          <div class="column items-end">
            <!-- <q-btn
              unelevated
              color="primary"
              icon="ion-information-circle"
              label="Info"
              @click="calcularIndicadores(proyecto!)"
            /> -->
            <!-- <q-icon
              @click="infoDialogo = true"
              size="30px"
              color="primary"
              name="ion-information-circle"
            /> -->

            <q-btn
              @click="infoDialogo = true"
              size="15px"
              dense
              rounded
              flat
              color="primary"
              icon="ion-information-circle"
            />

            <q-space />
            <q-btn
              unelevated
              color="primary"
              icon="ion-calculator"
              label="Calcular"
              @click="calcularIndicadores(proyecto!)"
            />
          </div>
        </div>
      </template>
    </div>

    <ProyectoInfoView />
  </q-page>
</template>

<script setup lang="ts">
import FlujoView from '../views/FlujoView.vue';
import ProyectoInfoView from 'src/modules/exergia/views/ProyectoInfoView.vue';

import { storeToRefs } from 'pinia';
import { useAnalisisStore, useProyectoStore, usePopupStore } from '../stores';
import { onBeforeMount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { delay } from '../../../utils/functions/delay';

const router = useRouter();
const analisisStore = useAnalisisStore();
const proyectoStore = useProyectoStore();
const popupStore = usePopupStore();

const { cargarProyecto } = proyectoStore;
const { calcularIndicadores } = analisisStore;
const { analisis } = storeToRefs(analisisStore);

const { proyecto } = storeToRefs(proyectoStore);
const { infoDialogo } = storeToRefs(popupStore);

const isLoading = ref(true);

router.afterEach(async () => {
  isLoading.value = true;
  cargarProyecto();
  await delay(1000);
  isLoading.value = false;
});

onBeforeMount(() => {
  cargarProyecto();
});

onMounted(async () => {
  isLoading.value = true;
  await delay(1000);
  isLoading.value = false;
});
</script>

<style scoped></style>
