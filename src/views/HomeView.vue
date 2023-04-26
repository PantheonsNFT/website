<script setup>
import Dashboard from '../components/Dashboard.vue'
import About from '../components/About.vue';
import plains from '../assets/plains.png'

</script>

<template>
  <main>
    <img class="fixed h-screen contrast-50 w-full" :src="plains" alt="">
    <Dashboard />
    <About />
  </main>
</template>
