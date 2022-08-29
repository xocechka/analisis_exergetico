<template>
  <div>
    <q-scroll-area
      class="window-height"
      :thumb-style="{
        background: '$primary',
        borderRadius: '5px',
        opacity: '0.7',
        right: '3px',
        width: '5px',
      }"
      :delay="700"
    >
      <slot></slot>
    </q-scroll-area>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
