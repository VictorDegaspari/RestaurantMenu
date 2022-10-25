<template>
<div class="home">
  <div class="mx-auto max-w-2xl py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900 mb-10">Cardápio - Novo pedido</h2>
    <Menu></Menu>
  </div>
  <CheckoutPreview v-if="show"></CheckoutPreview>
    <button 
      class="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 mx-auto sm:mb-24 max-w-2xl" 
      @click="show.change()"
    >
      Gerar Pedido
    </button>
</div>
</template>

<script setup>
import CheckoutPreview from '../components/CheckoutPreview.vue';
import Menu from "../components/MenuItem.vue";
import { useShowCheckoutStore } from '../stores/checkout';

const show = useShowCheckoutStore();
</script>

<style scoped>
  @media (max-width: 700px) {
    button {
      margin: 0;
      position: fixed;
      bottom: 0px;
      right: 0px;
      left: 0px;
      border-radius: 0;
      box-shadow: 0px -15px 20px -14px rgba(0,0,0,0.4)
    }
    .home {
      padding-bottom: 50px;
    }
  }
</style>
