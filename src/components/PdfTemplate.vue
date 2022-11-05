<template>
  <div class="pdf-template">
    <table class="mx-auto max-w-2xl py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <tr>
        <th>Produto</th>
        <th>Quantidade</th>
        <th>Valor</th>
      </tr>
      <tr v-for="item in checkout.getList" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.quantity }}x</td>
        <td>R$ {{ item.price }}</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>TOTAL: R$ {{ checkout.getTotal }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { useCheckoutList } from '../stores/checkout';

const checkout = useCheckoutList();

</script>

<style scoped>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
</style>