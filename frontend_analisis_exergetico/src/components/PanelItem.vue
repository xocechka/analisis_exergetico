<template>
  <div>
    <q-item active-class="active" :to="toRoute" clickable v-ripple>
      <q-item-section avatar>
        <q-icon color="primary" :name="leadingIcon" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
        <q-item-label caption>{{ subtitle }}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
  leadingIcon: string;
  toRoute: { name: string };
}
defineProps<Props>();
</script>

<style scoped lang="sass">
.active
  background-color: rgba( $secondary, .3 )
</style>
