<template>
  <div class="fullscreen text-center q-pa-xl flex flex-center">
    <div>
      <q-img
        src="~assets/img/page_not_found.svg"
        width="30%"
        height="30%"
        spinner-color="primary"
        spinner-size="82px"
        class="q-pa-xl"
      />

      <div class="text-h2 q-pa-xl" style="opacity: 0.4">
        Ups...No se encontró nada aquí.
      </div>

      <q-btn
        class="q-mt-xl"
        unelevated
        :to="{ name: 'home' }"
        label="Ir a Inicio"
        no-caps
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
