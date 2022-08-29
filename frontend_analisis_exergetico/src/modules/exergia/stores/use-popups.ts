import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePopupStore = defineStore('Popup', () => {
  const crearProyectoDialogo = ref(false);
  const infoDialogo = ref(false);
  
  return { crearProyectoDialogo, infoDialogo };
});
