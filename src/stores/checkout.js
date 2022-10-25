import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useShowCheckoutStore = defineStore('show', () => {
  const show = ref(false);
  
  function change() {
    show.value = !show.value
  }

  return { show, change }
});

export const useCheckoutList = defineStore('list', {

  state: () => ({
    list: [],
    total: 0
  }),

  getters: {
    getTotal(state) {
      return state.total;
    },
    getList(state) {
      return state.list;
    }
  },
  
  actions: {
    
    addItem(item) {
      const index = this.list.findIndex(object => object.id === item.id);
      if (index === -1) {
        item.quantity = 1;
        this.list.push(item);
        this.total = this.total + item.price;
      }
      else {
        this.total = this.total + this.list[index].price;
        this.list[index].quantity++;
      } 
    },

    removeItem(itemID) {
      const index = this.list.findIndex(object => object.id === itemID);

      if (index > -1) {
        this.list[index].quantity > 1 
          ? 
            (this.list[index].quantity--, this.total = this.total - this.list[index].price) 
          : 
            this.list = this.list.filter(item => { 
              if (this.list[index].id == item.id) {
                this.total = this.total - this.list[index].price;
              }
              return this.list[index].id !== item.id 
            });
      }
    },

    getItem(itemID) {
      const index = this.list.findIndex(object => object.id === itemID);
      return this.list[index];
    }

  },
});