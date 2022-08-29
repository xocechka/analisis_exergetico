<template>
  <div class="bg-grey-2 col-3 window-height shadow-5">
    <div class="column q-mt-md q-ma-sm justify-stretch">
      <q-btn
        unelevated
        color="primary"
        icon="ion-add"
        label="Crear proyecto"
        @click="crearProyectoDialogo = true"
      />
      <q-separator spaced inset horizontal />
      <q-input
        filled
        border-radius
        dense
        clearable
        type="search"
        v-model="query"
        input-class="q-pa-sm"
        placeholder="Buscar proyecto"
        hide-bottom-space
      >
        <template #append>
          <div>
            <q-icon name="ion-search" />
          </div>
        </template>
      </q-input>
      <h5 class="q-ml-md q-mt-md q-mb-none">Proyectos</h5>
      <q-separator spaced inset horizontal />
      <div
        v-if="proyectosEncontrados.length === 0"
        class="column q-ml-md q-mt-md"
      >
        <span class="text-body1">No hay proyectos</span>
        <span class="text-body2 text-grey"
          >Presione en el botón para adicionar nuevos proyectos</span
        >
      </div>
    </div>

    <q-list padding>
      <q-item
        class="rounded-borders q-ma-sm"
        v-for="(proyecto, index) in proyectosEncontrados"
        :key="proyecto.id"
        :to="{ name: 'proyecto', params: { id: proyecto.id } }"
        clickable
        active-class="active rounded-borders q-ma-sm"
      >
        <q-item-section top avatar>
          <q-avatar color="primary" text-color="white" icon="ion-star" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ proyecto.nombre }}</q-item-label>
        </q-item-section>
        <q-item-section side middle>
          <q-item-label caption>{{ index + 1 }}</q-item-label>
        </q-item-section>
        <q-menu context-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup @click="eliminarProyecto(proyecto)">
              <q-item-section>Eliminar</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Editar</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-item>
    </q-list>
  </div>
  <CrearProyectoView />
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useProyectosStore, usePopupStore } from '../modules/exergia/stores/';

import CrearProyectoView from 'src/modules/exergia/views/CrearProyectoView.vue';

const proyectosStore = useProyectosStore();
const popupStore = usePopupStore();

const { cargarProyectos, eliminarProyecto } = proyectosStore;
const { query, proyectosEncontrados } = storeToRefs(proyectosStore);
const { crearProyectoDialogo } = storeToRefs(popupStore);

onBeforeMount(() => {
  cargarProyectos();
});
</script>

<style scoped lang="sass">
.active
  background: transparentize($primary, 0.8)
</style>
