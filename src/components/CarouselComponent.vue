<template>

    <carousel :settings="settings" :breakpoints="breakpoints" :wrap-around="true" class="w-screen">
        <slide v-for="slide in data.data" :key="slide">
            <div class="carousel__item">
                <Card :data="slide" />
            </div>
            
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
import { defineAsyncComponent } from 'vue'

export default {
    name: 'App',
    props: {
        data: Object
    },
    components: {
        Carousel,
        Slide,
        Navigation,
        Card: defineAsyncComponent(() => import("./CardComponent.vue"))
    },
    setup: () => {

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
            900: {
                itemsToShow: 2.1,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 2.4,
                snapAlign: 'center',
            },
            // 1320 and up
            1320: {
                itemsToShow: 3,
                snapAlign: 'center',
            },

            600: {
                itemsToShow: 1.5,
                snapAlign: 'center'
            },

            300: {
                itemsToShow: 1,
                snapAlign: 'center'
            }
        },
    }),

};
</script>

<style scoped>
    .carousel__slide > .carousel__item {
    transform: scale(1);
    opacity: 0.5;
    transition: 0.5s;
    }
    .carousel__slide--visible > .carousel__item {
    opacity: 1;
    transform: rotateY(0);
    }
    .carousel__slide--next > .carousel__item {
    transform: scale(0.9) translate(-10px);
    }
    .carousel__slide--prev > .carousel__item {
    transform: scale(0.9) translate(10px);
    }
    .carousel__slide--active > .carousel__item {
    transform: scale(1.1);
    }
</style>