<template>

    <div class="bg-card bg-cover rounded-xl w-[420px] h-[580px]">
        <div class="p-6 flex flex-col justify-center items-center mt-24">
            <div>
                <Title :title="data.prototipo" />
            </div>
            <img class="translate-y-10" :src="imageSrc(data.prototipo.replace(/\s/g, '').toLowerCase())"
                alt="product image" width="180" height="190" />

            <div class="transform translate-y-11">
                <p class="font-bebas text-3xl text-center tracking-wide font-medium text-yellow-300">
                    ${{data.precio_base.toFixed(2)}}</p>
                <p v-if="data.etapa !=='EXTERIOR'" class="font-bebas text-sm text-right text-yellow-300">En privada</p>
                <p v-if="data.etapa === 'EXTERIOR'" class="font-bebas text-sm text-right text-yellow-300">En exterior
                </p>

            </div>
            <div class="transform translate-y-11">
                <div class="flex items-center justify-center">
                    <RulerSquareIcon fillColor="#ffffff" />
                    <span class="font-bebas text-white font-normal text-sm">{{data.construccion.toFixed(1)}} m²</span>

                    <CropSquareIcon fillColor="#ffffff" />
                    <span class="font-bebas text-white font-normal text-lg">{{data.terreno_m > data.terreno ?
                    data.terreno_m.toFixed(1) : data.terreno.toFixed(1)}} m²</span>


                </div>
                <div class="flex items-center justify-center space-x-1">
                    <MapSearchIcon fillColor="#ffffff" :size="20" />
                    <span class="font-bebas text-white font-normal text-lg">PRIVADA {{data.etapa}}</span>
                    <MapMarkerRadiusIcon fillColor="#ffffff" :size="18" />
                    <span class="font-bebas text-white font-normal text-lg">{{data.numero}}</span>
                </div>
            </div>


        </div>

        <div class="flex flex-1 mr-6 transform translate-y-12">
            <a href="#"
                class="ml-auto font-bebas text-white bg-pink-600 focus:outline-none font-medium rounded-2xl text-lg px-6 py-1 text-center">+INFO</a>
        </div>
    </div>

</template>

<script>
import { defineAsyncComponent } from 'vue'
import RulerSquareIcon from 'vue-material-design-icons/RulerSquare.vue';
import CropSquareIcon from 'vue-material-design-icons/CropSquare.vue';
import MapSearchIcon from 'vue-material-design-icons/MapSearch.vue';
import MapMarkerRadiusIcon from 'vue-material-design-icons/MapMarkerRadius.vue';

export default {
    props: {
        data: Object
    },

    components: {
        NavBar: defineAsyncComponent(() => import('../components/NavBar.vue')),
        Title: defineAsyncComponent(() => import('../components/TitleCardComponent.vue')),
        RulerSquareIcon,
        CropSquareIcon,
        MapSearchIcon,
        MapMarkerRadiusIcon
    },
    setup({ data }) {

        const imageSrc = (modelo) => {
            return new URL(`../assets/casas/${modelo}.png`, import.meta.url).href
        }

        return {
            imageSrc
        }

    },
}
</script>


