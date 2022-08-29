<template>
  <div
    class="mid-height rounded-borders bg-grey-2 q-gutter-sm items-center justify-stretch text-center"
  >
    <div class="column items-center q-mt-md q-mb-sm">
      <q-icon name="ion-trending-down" size="35px" />
      <h5 class="text-grey q-ma-none q-ml-md">{{ 'Flujo ' + props.tipo }}</h5>
    </div>
    <q-btn
      class="q-mb-sm"
      unelevated
      color="primary"
      icon="ion-add"
      @click="agregarSustanciaEnFlujo(flujo!, props.tipo)"
      label="Agregar sustancia"
    />
    <div v-show="sustanciasEnFlujo?.length! > 0">
      <span class="text-body1 text-grey"
        >Total: {{ sustanciasEnFlujo!.length }}</span
      >
    </div>
    <div
      class="q-mt-xl col text-center"
      v-show="sustanciasEnFlujo?.length === 0"
    >
      <h5 class="q-ma-none text-black-8">No hay sustancias en el flujo</h5>
      <h6 class="q-ma-none text-grey">Presione el boton para agregar</h6>
    </div>
    <q-scroll-area class="q-mb-md mid-height" style="width: 28vw; height: 25vh">
      <div
        class="row q-gutter-md q-ml-md q-mb-sm flex-center"
        v-for="(sustanciaEnFlujo, i) in sustanciasEnFlujo"
        :key="sustanciaEnFlujo.id"
      >
        <div class="col-8">
          <q-select
            v-model="sustanciaEnFlujo.sustancia"
            :options="sustancias"
            option-label="nombre"
            :label="`Sustancia ${i + 1}`"
            @update:model-value="onUpdate"
            filled
          />
        </div>
        <div class="col-2">
          <q-btn
            color="negative"
            icon="ion-remove"
            padding="1px"
            @click="eliminarSustanciaEnFlujo(sustanciaEnFlujo, props.tipo)"
            size="20px"
            dense
          />
        </div>
      </div>
    </q-scroll-area>
  </div>
</template>

<script setup lang="ts">
// import { useFlujo } from '../composables/use-flujo';
import type { Sustancia, TipoFlujo } from '../models';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useProyectoStore, useSustanciasStore } from '../stores';

interface Props {
  tipo: TipoFlujo;
}

const props = defineProps<Props>();
const store = useProyectoStore();

const {
  agregarSustanciaEnFlujo,
  eliminarSustanciaEnFlujo,
  actualizarSustanciaEnFlujo,
} = store;
const { proyecto } = storeToRefs(store);

const flujos = {
  Entrada: computed(() => proyecto.value?.flujoEntrada),
  Salida: computed(() => proyecto.value?.flujoSalida),
};

const sustanciasEnFlujos = {
  Entrada: computed(() => proyecto.value?.flujoEntrada.sustancias),
  Salida: computed(() => proyecto.value?.flujoSalida.sustancias),
};

const sustanciasEnFlujo = sustanciasEnFlujos[props.tipo];
const flujo = flujos[props.tipo];

const sustanciasStore = useSustanciasStore();
const { sustancias } = storeToRefs(sustanciasStore);

async function onUpdate(sustancia: Sustancia) {
  sustanciasEnFlujo.value?.forEach(async (sustanciaEnFlujo) => {
    if (
      sustanciaEnFlujo.sustancia &&
      sustanciaEnFlujo.sustancia.id === sustancia.id
    ) {
      sustanciaEnFlujo.idSustancia = sustanciaEnFlujo.sustancia?.id;
      await actualizarSustanciaEnFlujo(sustanciaEnFlujo);
      console.log(proyecto.value?.flujoEntrada.sustancias);
    }
  });
}
</script>

<style scoped>
.mid-height {
  height: 60vh;
}
</style>
