import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useShowCheckoutStore = defineStore('show', () => {
  const show = ref(false);
  
  function change() {
    show.value = !show.value
  }

  return { show, change }
})
