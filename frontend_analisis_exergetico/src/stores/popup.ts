import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePopupStore = defineStore('popup', () => {
  const showDeleteByICDialog = ref(false);
  const showUpdateSchoolLevelDialog = ref(false);

  return { showDeleteByICDialog, showUpdateSchoolLevelDialog };
});
