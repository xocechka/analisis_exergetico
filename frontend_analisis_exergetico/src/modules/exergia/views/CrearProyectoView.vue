<template>
  <q-dialog v-model="crearProyectoDialogo">
    <q-card class="window-width">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Crear Proyecto</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        <q-form @submit="onClick">
          <div class="column q-gutter-md">
            <q-input
              filled
              ref="inputNombre"
              label="Nombre"
              type="text"
              :rules="[Rules.NOT_EMPTY]"
              v-model="nombre"
            />
            <div class="textarea">
              <q-input
                filled
                ref="inputDescripcion"
                label="Descripción"
                type="textarea"
                v-model="descripcion"
              />
            </div>
            <q-btn
              color="primary"
              icon="ion-add"
              label="Crear"
              @click="onClick"
              :disable="!isValid"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { usePopupStore } from '../stores';
import { QInput } from 'quasar';
import Rules from 'src/utils/validations';
import { useProyectosStore } from '../stores/use-proyectos';

const popupStore = usePopupStore();
const { agregarProyecto } = useProyectosStore();

const { crearProyectoDialogo } = storeToRefs(popupStore);

const nombre = ref('');
const descripcion = ref('');

const inputNombre = ref<QInput>();
const inputDescripcion = ref<QInput>();

const isValid = ref(false);

watch(nombre, async () => {
  const valid = await inputNombre.value?.validate(nombre.value);
  isValid.value = valid ? valid : false;
});

async function onClick() {
  await agregarProyecto({
    nombre: nombre.value,
    descripcion: descripcion.value,
  });
  console.log('Jose');
  nombre.value = '';
  descripcion.value = '';
  crearProyectoDialogo.value = false;
}
// form.value.form = {
//   fields: [
//     {
//       nombre: {
//         value: '',
//         isValid: false,
//         isRequired: true,
//         ref: inputNombre,
//       },
//     },
//     {
//       descripcion: {
//         value: '',
//         isValid: false,
//         isRequired: false,
//         ref: inputDescripcion,
//       },
//     },
//   ],
// };
</script>

<style scoped>
.textarea {
  resize: none;

  max-height: 20%;
  max-lines: 10;
}
</style>
