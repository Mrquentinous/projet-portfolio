<script setup>
import { RouterView } from "vue-router";
import Header from "./components/monHeader.vue";
import Footer from "./components/monFooter.vue"; 
</script>

<template>
  <Header />
  <main id="main">
    <RouterView />
  </main>
  <Footer />
</template>
<style>



</style>