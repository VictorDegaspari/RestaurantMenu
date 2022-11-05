<template>
  <div>
    <NavBar></NavBar>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavigationBar.vue';
</script>

<style scoped>

</style>
