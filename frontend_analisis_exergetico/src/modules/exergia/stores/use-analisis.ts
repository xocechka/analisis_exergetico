import { defineStore } from 'pinia';
import { ref } from 'vue';
import { AnalisisExergetico, Proyecto, SustanciaEnFlujo } from '../models';

export const useAnalisisStore = defineStore('Analisis', () => {
  const analisis = ref<AnalisisExergetico>();

  function calcularBalance(proyecto: Proyecto) {
    const entrada = proyecto.flujoEntrada.sustancias;
    const salida = proyecto.flujoSalida.sustancias;

    if (entrada.length === 0 || salida.length === 0) {
      return undefined;
    }

    const exergiaEntra = sumarExergias(entrada);
    const exergiaSale = sumarExergias(salida);

    if (exergiaEntra && exergiaSale) {
      console.log(exergiaEntra / exergiaSale);
      return exergiaEntra / exergiaSale;
    }
  }

  function calcularIndice(proyecto: Proyecto) {
    const balance = calcularBalance(proyecto);
    if (balance) {
      return 1 / balance;
    }
    return undefined;
  }

  function calcularPerdida(proyecto: Proyecto) {
    const entrada = proyecto.flujoEntrada.sustancias;
    const salida = proyecto.flujoSalida.sustancias;

    if (entrada.length === 0 || salida.length === 0) {
      return undefined;
    }

    const exergiaEntra = sumarExergias(entrada);
    const exergiaSale = sumarExergias(salida);

    if (exergiaEntra && exergiaSale) {
      return exergiaEntra - exergiaSale;
    }
  }

  function calcularIndicadores(proyecto: Proyecto) {
    const resultado: AnalisisExergetico = {
      balance: calcularBalance(proyecto),
      perdidaExergetica: calcularPerdida(proyecto),
      indiceSostenibilidad: calcularIndice(proyecto),
    };

    analisis.value = resultado;
  }

  function sumarExergias(sustancias: SustanciaEnFlujo[]) {
    return sustancias
      .map((sustancia) => sustancia.sustancia?.exergia)
      .reduce(sumar);
  }

  function sumar(total, valor) {
    return total + valor;
  }

  return {
    analisis,
    calcularIndicadores,
  };
});
