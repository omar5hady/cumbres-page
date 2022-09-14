<template>
    <!-- <NavBar></NavBar> -->
    <div class="inline-block text-2xl font-extrabold text-center">
        Precios

        <CarouselComponent :data={data} />

    </div>



</template>

<script>
import { defineAsyncComponent, ref, toRaw } from 'vue'
import CarouselComponent from '../components/CarouselComponent.vue';
import { useModelos } from '../composables/useModelos';
import { useRoute } from 'vue-router'


export default {
    components: {
        NavBar: defineAsyncComponent(() => import("../components/NavBar.vue")),
        Card: defineAsyncComponent(() => import("../components/CardComponent.vue")),
        CarouselComponent,
    },

    async setup() {
        const data = ref();
        const route = useRoute();
        const proyecto = route?.params?.proyecto;
        const privada = route?.params?.privada;
        const modelo = route?.params?.modelo;

        data.value = await useModelos(proyecto, privada, modelo);

        return {
            data
        }

    },

}
</script>


