<template>

    <div class="bg-card bg-cover rounded-xl w-[380px] h-[526px]">
        <div class="p-0 flex flex-col justify-center items-center mt-24">
            <div>
                <Title :title="data.prototipo" />
            </div>
            <img class="translate-y-10" :src="imageSrc(data.prototipo.replace(/\s/g, '').toLowerCase())"
                alt="product image" width="180" height="190" />

            <div class="transform translate-y-8">
                <p class="font-bebas text-3xl text-center tracking-wide font-medium text-yellow-300">
                    ${{formatNumber((data.precio_base+data.ajuste+data.excedente_terreno).toFixed(2))}}</p>
                <p v-if="data.etapa !=='EXTERIOR' && data.etapa !=='EXTERIOR 2'" class="font-bebas font-extralight text-sm text-right text-yellow-300">En privada</p>
                <p v-if="data.etapa === 'EXTERIOR' || data.etapa === 'EXTERIOR 2'" class="font-bebas text-sm text-right text-yellow-300">En exterior</p>
            </div>
            <div class="transform translate-y-8">
                <div class="flex items-center justify-center">
                    <RulerSquareIcon fillColor="#ffffff" />
                    <span class="font-bebas text-yellow-300 font-normal text-lg ">{{data.construccion.toFixed(1)}} m²</span>

                    <CropSquareIcon fillColor="#ffffff" />
                    <span class="font-bebas text-yellow-300 font-normal text-lg">{{data.terreno_m > data.terreno ?
                    data.terreno_m.toFixed(1) : data.terreno.toFixed(1)}} m²</span>


                </div>
                <div class="flex items-center justify-center space-x-1">
                    <MapSearchIcon fillColor="#ffffff" :size="20" />
                    <span class="font-bebas text-yellow-300 font-normal text-lg">Mzn. {{data.manzana}}</span>
                    <MapMarkerRadiusIcon fillColor="#ffffff" :size="18" />
                    <span class="font-bebas text-yellow-300 font-normal text-lg">Lt. {{data.num_lote}} {{(data.sublote) ? 'Int. '.data.sublote:''}}</span>
                </div>
            </div>


        </div>

        <div class="flex flex-1 mr-6 transform translate-y-12">
            <a href="#"
                class="ml-auto font-bebas text-white bg-pink-600 focus:outline-none font-medium rounded-2xl text-base px-6 py-1 text-center">+ Info</a>
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

        const formatNumber = (value) => {
            let val = (value/1).toFixed(2)
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }

        return {
            imageSrc,
            formatNumber
        }

    },
}
</script>


