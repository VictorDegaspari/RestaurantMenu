<template>
  <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    <a v-for="product in products" :key="product.id" class="group">
      <div class="aspect-w-2 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
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
import CounterInput from './CounterInput.vue';

export default {
  components: {
    CounterInput
  },

  setup() {
    const products = [
      {
        id: 1,
        name: 'Basic Tee',
        imageSrc: 'https://www.guiadasemana.com.br/contentFiles/image/opt_w320h200/2017/02/FEA/53880_via-emilia.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 35,
        color: 'Black',
        quantity: 0
      },
      {
        id: 2,
        name: 'Basic Tee',
        imageSrc: 'https://www.guiadasemana.com.br/contentFiles/image/opt_w320h200/2017/02/FEA/53880_tapiocaria-market-doce.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 50,
        color: 'Black',
        quantity: 0
      },
      {
        id: 4,
        name: 'Basic Tee',
        imageSrc: 'https://www.guiadasemana.com.br/contentFiles/image/opt_w320h200/2017/02/FEA/53880_2nd-floor-noodle-bar.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 35,
        color: 'Black',
        quantity: 0
      },
      {
        id: 5,
        name: 'Basic Tee',
        imageSrc: 'https://www.guiadasemana.com.br/contentFiles/image/opt_w320h200/2017/02/FEA/53880_la-peruana-cevicheria.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 100,
        color: 'Black',
        quantity: 0
      },
      {
        id: 6,
        name: 'Basic Tee',
        imageSrc: 'https://www.guiadasemana.com.br/contentFiles/image/opt_w320h200/2017/02/FEA/53880_suri-ceviche-bar.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 55,
        color: 'Black',
        quantity: 0
      },
      {
        id: 7,
        name: 'Basic Tee',
        imageSrc: 'https://www.guiadasemana.com.br/contentFiles/image/opt_w320h200/2017/02/FEA/53880_lamen-kazu.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 42,
        color: 'Black',
        quantity: 0
      },
      {
        id: 8,
        name: 'Basic Tee',
        imageSrc: 'https://www.guiadasemana.com.br/contentFiles/image/opt_w320h200/2017/02/FEA/53880_killa-cevicheria-ceviches.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 70,
        color: 'Black',
        quantity: 0
      },
      {
        id: 9,
        name: 'Basic Tee',
        imageSrc: 'https://www.guiadasemana.com.br/contentFiles/image/2017/02/FEA/principal/53880_w840h0_1485965642lentrecote-de-paris.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 98,
        color: 'Black',
        quantity: 0
      },
    ];
  
    return {
      products
    }
  },

}

</script>
