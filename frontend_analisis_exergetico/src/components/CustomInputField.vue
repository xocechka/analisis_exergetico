<template>
  <FieldWrapper :label="label">
    <q-input
      filled
      dense
      :type="type"
      @update:model-value="onChange"
      ref="inputRef"
      v-model="value"
      lazy-rules
      :rules="rules"
    />
  </FieldWrapper>
</template>

<script setup lang="ts">
import FieldWrapper from 'components/FieldWrapper.vue';
import { ValidationRule } from 'quasar/dist/types/api/validation.js';
import { ref } from 'vue';
import { QInput } from 'quasar';

interface Props {
  label: string;
  initValue: string | number;
  rules?: ValidationRule<string>[];
  type?:
    | 'number'
    | 'search'
    | 'date'
    | 'time'
    | 'email'
    | 'textarea'
    | 'text'
    | 'password'
    | 'tel'
    | 'file'
    | 'url';
}

interface Emits {
  (e: 'change', value: string | number | null): void;
  (e: 'validation', isValid: boolean | undefined): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const value = ref(props.initValue);
const inputRef = ref<QInput>();

async function onChange(newValue: string) {
  emits('change', newValue);
  const isValid = await inputRef.value?.validate(value.value);
  emits('validation', isValid);
}

</script>

<style scoped></style>
