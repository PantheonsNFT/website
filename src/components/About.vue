<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { fade_up } from '../core/animations'
import zeus from '../assets/zeus.png'
import athena from '../assets/athena.png'
import appollo from '../assets/appollo.png'

const box1 = ref();
const box2 = ref();
const box3 = ref();

const animations = [
    fade_up(box1, 300),
    fade_up(box2, 400),
    fade_up(box3, 500),
]

onMounted(() => {
    animations.forEach(animation => animation.mount())
})
onUnmounted(() => animations.forEach(animation => animation.unmount()))

</script>

<template>
    <div class="h-screen w-full flex justify-center items-center">
        <div class="w-full flex justify-center items-center">
            <div class="absolute rounded-xl h-[90vh] w-[90%] space-y-5 my-2 p-5">
                <h1 ref="titre" class="text-8xl font-got text-slate-100 text-center">TEAM</h1>
                <div class="flex justify-center space-x-5">
                    <div ref="box1" class="w-[30%] shadow-md">
                        <img class="rounded-t-xl" :src="appollo" alt="">
                        <p class="p-5 bg-slate-100 rounded-b-xl">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus obcaecati omnis tempora
                            fugiat
                            sunt, dolorum neque incidunt, possimus optio cupiditate, nemo repudiandae exercitationem maxime
                            eum
                            quaerat ab veritatis minus delectus?
                        </p>
                    </div>
                    <div ref="box2" class="w-[30%] shadow-md">
                        <img class="rounded-t-xl w-full" :src="zeus" alt="">
                        <p class="p-5 bg-slate-100 rounded-b-xl">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus obcaecati omnis tempora
                            fugiat
                            sunt, dolorum neque incidunt, possimus optio cupiditate, nemo repudiandae exercitationem maxime
                            eum
                            quaerat ab veritatis minus delectus?
                        </p>
                    </div>
                    <div ref="box3" class="w-[30%] shadow-md">
                        <img class="rounded-t-xl" :src="athena" alt="">
                        <p class="p-5 bg-slate-100 rounded-b-xl">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus obcaecati omnis tempora
                            fugiat
                            sunt, dolorum neque incidunt, possimus optio cupiditate, nemo repudiandae exercitationem maxime
                            eum
                            quaerat ab veritatis minus delectus?
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>