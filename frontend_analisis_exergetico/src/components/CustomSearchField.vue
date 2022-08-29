<template>
  <div>
    <q-input
      filled
      border-radius
      dense
      clearable
      modelValue="Hello"
      type="search"
      input-class="q-pa-sm"
      placeholder="Introduce el nombre"
      hide-bottom-space
    >
      <template #prepend>
        <q-icon name="ion-search" />
      </template>
    </q-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { GenericObject } from '../utils/types/index';

interface Props {
  elements: GenericObject[];
  filter: string;
}

const q = ref('')

defineProps<Props>();
</script>

<style scoped></style>
