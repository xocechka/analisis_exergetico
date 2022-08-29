<template>
  <div class="q-pa-md bg-grey-2 rounded-borders">
    <div class="row justify-between">
      <label> {{ label }} </label>
      <q-btn
        v-if="isOptional"
        color="grey"
        size="10px"
        padding="5px"
        icon="ion-trash"
        @click="onClick"
      />
    </div>
    <q-option-group
      :options="options"
      @update:model-value="onChange"
      class="q-gutter-sm"
      inline
      v-model="currentValue"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  label: string;
  value: unknown;
  isOptional?: boolean;
  options: Array<never>;
}

const props = defineProps<Props>();
const emits = defineEmits(['change']);

const currentValue = ref(props.value);

function onChange(newValue: unknown) {
  emits('change', newValue);
}

function onClick() {
  currentValue.value = undefined;
  emits('change', undefined);
}
</script>

<style scoped>
label {
  color: #616161;
}
</style>
