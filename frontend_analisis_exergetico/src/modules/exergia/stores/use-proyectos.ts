import { computed, ref } from 'vue';
import type {
  Proyecto,
  ProyectoCreateBase,
  ProyectoUpdateBase,
} from '../models';
import { useBaseCrud } from '../composables';

import { defineStore } from 'pinia';
import { useRoute, useRouter } from 'vue-router';

export const useProyectosStore = defineStore('Proyectos', () => {
  const { getAll, create, remove } = useBaseCrud<
    Proyecto,
    ProyectoCreateBase,
    ProyectoUpdateBase
  >();

  const route = useRoute();
  const router = useRouter();
  const proyectos = ref<Proyecto[]>([]);
  const query = ref('');

  const proyectosEncontrados = computed(() => {
    if (query.value.trim() === '') {
      return proyectos.value;
    }
    return proyectos.value.filter((proyecto) =>
      proyecto.nombre.includes(query.value)
    );
  });

  async function cargarProyectos() {
    proyectos.value = await getAll('/proyecto');
  }

  async function agregarProyecto(proyecto: ProyectoCreateBase) {
    const proyectoNew = await create('/proyecto', proyecto);
    proyectos.value.push(proyectoNew);
  }

  async function eliminarProyecto(proyecto: Proyecto) {
    await remove('/proyecto/?id=' + proyecto.id);
    const i = proyectos.value.findIndex((p) => p.id === proyecto.id);
    proyectos.value.splice(i, 1);

    if (
      route.name === 'proyecto' &&
      Number.parseInt(route.params.id.toString()) === proyecto.id
    ) {
      router.push({ name: 'inicio' });
    }
  }

  return {
    query,
    proyectos,
    proyectosEncontrados,

    cargarProyectos,
    agregarProyecto,
    eliminarProyecto,
  };
});
