<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { fade_up } from '../core/animations'
const titre = ref();

const animations = [ 
fade_up(titre, 800),
]

onMounted(() => {
  animations.forEach(animation => animation.mount())
})
onUnmounted(() => animations.forEach(animation => animation.unmount()))

</script>

<template>
    <div class="h-screen w-full flex justify-center items-center">
        <div class="w-full flex justify-center items-center">
            <h1 ref="titre" class="absolute text-8xl font-got text-slate-100">Pantheons of Olympus</h1>
        </div>
    </div>
</template>