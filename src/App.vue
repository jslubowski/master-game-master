<script setup>
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader/MainHeader.vue';
</script>

<template>
  <MainHeader />
  <RouterView />
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }

</style>
