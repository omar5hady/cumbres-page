<template>
    <!-- <NavBar></NavBar> -->
    <div class="inline-block p-6 text-2xl font-extrabold text-center">
    </div>
    <div class="inline-block text-2xl font-extrabold text-center">

        <CarouselComponent :data={data} />

    </div>

    <div class="inline-block p-6 text-2xl font-extrabold text-center">
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
        console.log(route.query.proyecto)
        const proyecto = route?.query.proyecto
        const privada = route?.query.privada
        const modelo = route?.query.modelo

        data.value = await useModelos(proyecto, privada, modelo);

        return {
            data
        }

    },

}
</script>


