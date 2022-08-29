<template>
  <div class="row q-gutter-sm justify-start">
    <q-item clickable v-ripple>
      <q-item-section side>
        <q-avatar rounded size="50px">
          <q-img src="~assets/img/undraw_profile_pic_ic-5-t.svg" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ worker.name }}</q-item-label>
        <q-item-label caption>{{ worker.identityCard }}</q-item-label>
      </q-item-section>
    </q-item>
    <div v-if="showOptions" class="row flex-center">
      <q-btn
        outline
        no-caps
        :to="formPageRoute"
        color="warning"
        icon="ion-create"
        padding="5px"
        class="q-mr-sm"
      />
      <q-btn outline no-caps color="negative" icon="ion-trash" padding="5px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Worker } from '../models/worker';

interface Props {
  worker: Worker;
  showOptions?: boolean;
}

const props = defineProps<Props>();
const formPageRoute = { name: 'form', params: { workerId: props.worker.id } };
</script>

<style scoped></style>
