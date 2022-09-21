<template>
    <!-- <NavBar></NavBar> -->


    <div class="h-full w-full py-5 ">
        <LoadComponent v-if="!data" color="#D81B60" />
        <CarouselComponent :data={data} v-if="data?.length > 0" />

        <div v-if="data?.length == 0" class="p-10">
            <h1 class="text-center text-2xl font-bebas text-gray-400">No hay resultados disponibles por el momento.</h1>
        </div>


    </div>


</template>

<script>
import { defineAsyncComponent, onMounted, ref } from 'vue'
import CarouselComponent from '../components/CarouselComponent.vue';
import LoadComponent from '../components/LoadComponent.vue';
import { useModelos } from '../composables/useModelos';
import { useRoute } from 'vue-router'


export default {
    components: {
        NavBar: defineAsyncComponent(() => import("../components/NavBar.vue")),
        Card: defineAsyncComponent(() => import("../components/CardComponent.vue")),
        CarouselComponent,
        LoadComponent
    },

    async setup() {
        const data = ref();
        const route = useRoute();
        console.log(data.value)
        const proyecto = route?.query.proyecto
        const privada = route?.query.privada
        const modelo = route?.query.modelo

        onMounted(async () => {
            data.value = await useModelos(proyecto, privada, modelo);

        });


        console.log(data.value)
        return {
            data
        }

    },

}
</script>


