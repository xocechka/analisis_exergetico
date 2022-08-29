import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useBaseCrud } from '../composables';
import type {
  Sustancia,
  SustanciaCreateBase,
  SustanciaUpdateBase,
} from '../models';

export const useSustanciasStore = defineStore('Sustancias', () => {
  const { getAll } = useBaseCrud<
    Sustancia,
    SustanciaCreateBase,
    SustanciaUpdateBase
  >();

  const sustancias = ref<Sustancia[]>([]);
  

  async function cargarSustancias() {
    sustancias.value = await getAll('/sustancia');
  }

  return {
    sustancias,
    cargarSustancias,
  };
});

export function useSustancias() {
  const { getAll } = useBaseCrud<
    Sustancia,
    SustanciaCreateBase,
    SustanciaUpdateBase
  >();

  const sustancias = ref<Sustancia[]>([]);

  async function cargarSustancias() {
    sustancias.value = await getAll('/sustancia');
  }

  return {
    sustancias,
    cargarSustancias,
  };
}
