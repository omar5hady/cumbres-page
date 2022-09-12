<template>

    <carousel :settings="settings" :breakpoints="breakpoints" :wrap-around="true" class="w-screen">
        <slide v-for="slide in data" :key="slide">
            <Card :data="slide" />
        </slide>

        <template #addons>

            <Navigation class="mx-10" />


        </template>
    </carousel>


</template>
  
<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { defineAsyncComponent, ref } from 'vue'

export default {
    name: 'App',
    components: {
        Carousel,
        Slide,
        Navigation,
        Card: defineAsyncComponent(() => import("./CardComponent.vue"))
    },
    setup: () => {
        const data = ref([{ title: 'san antonio' }, { title: 'san fernando' }, { title: 'santa ana' }, { title: 'san patricio' }, { title: 'san osos' }])
        return {
            data
        }
    },
    data: () => ({

        // carousel settings
        settings: {
            itemsToShow: 3,
            snapAlign: 'center',
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            // 700px and up
            700: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
        },
    }),

};
</script>