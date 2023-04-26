<script setup>
import Dashboard from '../components/Dashboard.vue'
import About from '../components/About.vue';
import olympus from '../assets/olympus.webp'

</script>

<template>
  <main>
    <img class="fixed h-screen contrast-50" :src="olympus" alt="">
    <Dashboard />
    <About />
  </main>
</template>
