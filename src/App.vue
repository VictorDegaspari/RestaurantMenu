<template>
  <div class="bg-gray-100">
    <NavBarComponent></NavBarComponent>
    <RouterView class="main"/>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavBarComponent from './components/NavigationBarComponent.vue';
</script>

<style scoped>
  .main {
    padding-top: 104px;
    min-height: 100vh;
  }
</style>
