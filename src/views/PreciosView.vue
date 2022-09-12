<template>
    <!-- <NavBar></NavBar> -->
    <div class="inline-block text-2xl font-extrabold text-center">
        Precios

        <CarouselComponent />

    </div>



</template>

<script>
import { defineAsyncComponent, onMounted } from 'vue'
import CarouselComponent from '../components/CarouselComponent.vue';
import { useModelos } from '../composables/useModelos';

export default {
    components: {
        NavBar: defineAsyncComponent(() => import("../components/NavBar.vue")),
        Card: defineAsyncComponent(() => import("../components/CardComponent.vue")),
        CarouselComponent,
    },


    setup: () => {

        const getModelos = async () => {
            const data = await useModelos();
           
        }

        onMounted(() => {

            getModelos();

        });
    },

    methods: {

    }


}
</script>


