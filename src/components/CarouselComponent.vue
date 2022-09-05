<template>
    <div class="hidden md:flex">
        <Carousel :itemsToShow="1.45" :autoplay="2200" :wrap-around="true">
            <Slide v-for="slide in images" :key="slide">
            <div class="carousel__item">
                <img :src="slide" alt="">
            </div>
            </Slide>

            <template #addons>
            <Pagination/>
            </template>
        </Carousel>
    </div>
    <div class="md:hidden">
        <Carousel :itemsToShow="1" :autoplay="2200" :wrap-around="true">
            <Slide v-for="slide in images" :key="slide">
            <div class="carousel__item">
                <img :src="slide" alt="">
            </div>
            </Slide>

            <template #addons>
            <Pagination/>
            </template>
        </Carousel>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  setup(){

    const images = ref([
        'https://www.casascumbres.mx/wp-content/uploads/2022/06/Casas-Cumbres_Venta-de-casas_San-Luis-Potosi-_SLP_Zona-industrial-_Real-Estate_Bienes-Raices-1300x650.png',
        'https://www.casascumbres.mx/wp-content/uploads/2022/06/Casas-Cumbres_Venta-de-casas_San-Luis-Potosi-_SLP_Zona-industrial-_Real-Estate_Bienes-Raices-3-1300x650.png',
        'https://www.casascumbres.mx/wp-content/uploads/2022/06/Casas-Cumbres_Venta-de-casas_San-Luis-Potosi-_SLP_Zona-industrial-_Real-Estate_Bienes-Raices-5-1300x650.png',
        'https://www.casascumbres.mx/wp-content/uploads/2022/06/Casas-Cumbres_Venta-de-casas_San-Luis-Potosi-_SLP_Zona-industrial-_Real-Estate_Bienes-Raices-6-1300x650.png'
    ])

    return{
        images
    }
  }
});
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