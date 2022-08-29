<template>
  <div>
    <span class="q-mb-md text-grey-label">{{ label }}</span>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<style scoped></style>
