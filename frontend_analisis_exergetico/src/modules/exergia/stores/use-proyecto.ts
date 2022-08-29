import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { defineStore } from 'pinia';

import type {
  Flujo,
  Proyecto,
  ProyectoCreateBase,
  ProyectoUpdateBase,
  SustanciaEnFlujo,
  SustanciaEnFlujoCreateBase,
  SustanciaEnFlujoUpdateBase,
  TipoFlujo,
} from '../models';

import { useBaseCrud } from '../composables';
import { useAnalisisStore } from '.';

export const useProyectoStore = defineStore('Proyect', () => {
  const { get: obtenerProyecto } = useBaseCrud<
    Proyecto,
    ProyectoCreateBase,
    ProyectoUpdateBase
  >();

  const {
    create: insertarSustanciaEnFlujo,
    remove: removerSustanciaEnFlujo,
    update,
  } = useBaseCrud<
    SustanciaEnFlujo,
    SustanciaEnFlujoCreateBase,
    SustanciaEnFlujoUpdateBase
  >();

  const route = useRoute();
  const { calcularIndicadores } = useAnalisisStore();

  const proyecto = ref<Proyecto>();

  async function cargarProyecto() {
    const id = Number.parseInt(route.params.id as string);
    proyecto.value = await obtenerProyecto('/proyecto/' + id);
    if (proyecto.value) {
      calcularIndicadores(proyecto.value);
    }
  }

  const sustanciasEnFlujos = {
    Entrada: computed(() => proyecto.value?.flujoEntrada.sustancias),
    Salida: computed(() => proyecto.value?.flujoSalida.sustancias),
  };

  async function agregarSustanciaEnFlujo(flujo: Flujo, tipo: TipoFlujo) {
    const nuevaSustanciaEnFlujo = await insertarSustanciaEnFlujo(
      '/sustancia-en-flujo',
      {
        idFlujo: flujo.id,
      }
    );
    const sustancias = sustanciasEnFlujos[tipo];
    sustancias?.value?.push(nuevaSustanciaEnFlujo);
  }

  async function actualizarSustanciaEnFlujo(
    sustanciaEnFlujo: SustanciaEnFlujo
  ) {
    await update('/sustancia-en-flujo/?id=' + sustanciaEnFlujo.id, {
      idFlujo: sustanciaEnFlujo.idFlujo,
      idSustancia: sustanciaEnFlujo.idSustancia,
    });

    // const sustancias = sustanciasEnFlujos[tipo];
    // const index = sustancias.value?.findIndex(
    //   (s) => s.id === sustanciaEnFlujo.id
    // );

    // if (index && sustancias.value) {
    //   sustancias.value[index] = nuevaSustanciaEnFlujo;
    // }
  }

  async function eliminarSustanciaEnFlujo(
    sustanciaEnFlujo: SustanciaEnFlujo,
    tipo: TipoFlujo
  ) {
    const sustancias = sustanciasEnFlujos[tipo];
    await removerSustanciaEnFlujo(
      `/sustancia-en-flujo/?id=${sustanciaEnFlujo.id}`
    );
    if (sustancias.value) {
      const i = sustancias.value?.findIndex(
        (s) => s.id === sustanciaEnFlujo.id
      );
      sustancias.value.splice(i, 1);
    }
  }

  return {
    proyecto,

    cargarProyecto,
    agregarSustanciaEnFlujo,
    eliminarSustanciaEnFlujo,
    actualizarSustanciaEnFlujo,
  };
});
