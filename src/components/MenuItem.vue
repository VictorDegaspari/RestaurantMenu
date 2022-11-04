<template>
  <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    <a v-for="product in products" :key="product.id" class="group">
      <div class="aspect-w-2 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img :src="product.image" :alt="product.image" class="h-full w-full object-cover object-center group-hover:opacity-75" />
      </div>
      <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
      <div class="flex justify-between items-center">
        <p class="mt-1 text-lg font-medium text-gray-900">R$ {{ product.price }}</p>
        <CounterInput :obj="product"></CounterInput>
      </div>
    </a>
  </div>
</template>

<script>
  import { onMounted, ref } from 'vue';
  import api from '../api';
  import CounterInput from './CounterInput.vue';

  export default {
    components: {
      CounterInput
    },

    setup() {
      const products = ref([]);
      
      onMounted(async () => {
        await api.get('api/get-products').then(res => {
          products.value = res.data.data.data
        });
      });

      return {
        products
      }
    },

  }

</script>
