<template>
  <q-layout view="hHh lpR fFf">
    <CustomHeader />
    <q-page-container>
      <div class="row full-width">
        <CustomPanel />
        <div class="col-grow">
          <router-view />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';

import CustomHeader from 'components/CustomHeader.vue';
import CustomPanel from 'components/CustomPanel.vue';
import { useProyectosStore, useSustanciasStore } from '../stores';

const { cargarProyectos } = useProyectosStore();
const { cargarSustancias } = useSustanciasStore();


onBeforeMount(() => {
  cargarProyectos();
  cargarSustancias();
});
</script>

<style scoped lang="sass"></style>
