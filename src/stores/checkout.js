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
    getTotal: (state) => {
      return state.total;
    },
    
    getList: (state) => {
      return state.list;
    },

    getItem: (state) => {
      return (itemID) => { 
        const index = state.list.findIndex(object => object.id === itemID);
        if (index > -1) return state.list[index];
        return {};
      };
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
        this.total = (parseFloat(this.total) + parseFloat(this.list[index].price)).toFixed(2);
        this.list[index].quantity++;
      } 
    },

    removeItem(itemID) {
      const index = this.list.findIndex(object => object.id === itemID);

      if (index > -1) {
        this.list[index].quantity > 1 
          ? 
            (this.list[index].quantity--, this.total = (parseFloat(this.total) -  parseFloat(this.list[index].price)).toFixed(2)) 
          : 
            this.list = this.list.filter(item => { 
              if (this.list[index].id == item.id) {
                this.total = this.total > 0 ? (parseFloat(this.total) - parseFloat(this.list[index].price)).toFixed(2) : 0;
              }
              return this.list[index].id !== item.id 
            });
      }
    },
  },
});