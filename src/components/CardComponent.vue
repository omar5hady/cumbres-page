<template>

    <div class="bg-card bg-cover rounded-xl w-[420px] h-[580px]">
        <div class="p-6 flex flex-col justify-center items-center mt-20">
            <div class="relative flex space-x-3 translate-y-2">
                <div>
                    <h1 class="font-bebas opacity-80 outline-title text-2xl tracking-wider text-white">
                        {{data?.title.split(' ')[0]}}
                    </h1>
                    <h1 class="font-bebas absolute top-2 translate-x-2 text-2xl tracking-wider text-white">
                        {{data?.title.split(' ')[0]}}
                    </h1>
                </div>

                <div>
                    <h1 class="font-bebas opacity-80 outline-title text-5xl tracking-wider text-white">
                        {{data?.title.split(' ')[1]}}
                    </h1>
                    <h1 class="font-bebas absolute top-2 transform translate-x-2 text-5xl tracking-wider text-white">
                        {{data?.title.split(' ')[1]}}
                    </h1>
                </div>

            </div>
            <img src="https://www.casascumbres.mx/wp-content/uploads/2022/02/Botticelli-frente-300x300.png"
                alt="product image" width="250" height="250" />

            <div class="transform -translate-y-5">
                <p class="font-bebas text-3xl text-center tracking-wide font-medium text-yellow-300">$2,240,000.00</p>
                <p class="font-bebas text-sm text-right text-yellow-300">En privada</p>

            </div>
            <div class="transform -translate-y-5">
                <div class="flex items-center justify-center">
                    <RulerSquareIcon fillColor="#ffffff" />
                    <span class="font-bebas text-white font-normal text-sm">130 m²</span>

                    <CropSquareIcon fillColor="#ffffff" />
                    <span class="font-bebas text-white font-normal text-lg">130 m²</span>


                </div>
                <div class="flex items-center justify-center space-x-1">
                    <MapSearchIcon fillColor="#ffffff" :size="20" />
                    <span class="font-bebas text-white font-normal text-lg">PRIVADA DEL HUERTO</span>
                    <MapMarkerRadiusIcon fillColor="#ffffff" :size="18" />
                    <span class="font-bebas text-white font-normal text-lg">130</span>
                </div>
            </div>


        </div>

        <div class="flex flex-1 mr-6 transform -translate-y-4">
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
        RulerSquareIcon,
        CropSquareIcon,
        MapSearchIcon,
        MapMarkerRadiusIcon
    },
    setup: (data) => {
        data
    },

    methods: {

    }
}
</script>


