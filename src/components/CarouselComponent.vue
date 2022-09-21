<template>

    <carousel :settings="settings" :breakpoints="breakpoints" :wrap-around="true" class="w-screen">
        <slide v-for="slide in data.data" :key="slide">
            <Card :data="slide" @open-modal="openModal" />
        </slide>

        <template #addons>

            <Navigation class="mx-10" />

        </template>
    </carousel>

    <div v-show="showModal" id="modal"
        class="modal-content flex transition fade-in delay-2550 fixed top-0 left-0 z-80 w-screen h-screen bg-black/70  justify-center items-center">

        <!-- The close button -->
        <button class="fixed z-90 top-6 right-8 text-white text-5xl font-bold"
            @click.self="closeModal()">&times;</button>

        <!-- A big image will be displayed here -->
        <img v-show="modalImage" :src="modalImage" width="820" class="object-contain" />
    </div>




</template>
  
<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { defineAsyncComponent, ref } from 'vue'

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
    setup: (props) => {
        const showModal = ref(false);
        const modalImage = ref('');
        return {
            showModal,
            openModal: (image) => {
                console.log(image);
                showModal.value = true;
                modalImage.value = image;
            },
            closeModal: () => {
                showModal.value = false

            },
            modalImage
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

            1620: {
                itemsToShow: 3.5,
                snapAlign: 'center',
            },

            // 2000 and up
            2000: {
                itemsToShow: 4.5,
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
.modal-content {
    width: 100% !important;
    position: absolute !important;
    position: fixed !important;
    overflow-y: none;
}
</style>
      