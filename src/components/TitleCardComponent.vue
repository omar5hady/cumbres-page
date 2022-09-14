<template>
    <div class="relative flex space-x-2 translate-y-2">
        <div v-if="palabra2">
            <h1 class="font-bebas opacity-20 outline-title text-2xl tracking-wider text-white">
                {{palabra2}}
            </h1>
            <h1 class="font-bebas absolute top-1 translate-x-2 text-2xl tracking-wider text-white">
                {{palabra2}}
            </h1>
        </div>

        <div>
            <h1 class="font-bebas opacity-20 outline-title text-5xl tracking-wider text-white">
                {{palabra}}
            </h1>
            <h1 class="font-bebas absolute top-1 transform translate-x-2 text-5xl tracking-wider text-white">
                {{palabra}}
            </h1>
        </div>

    </div>
</template>

<script>
import { defineAsyncComponent, onMounted, ref } from 'vue'

export default {
    props: {
        title: String
    },

    components: {
        NavBar: defineAsyncComponent(() => import('../components/NavBar.vue')),

    },
    setup: (props, { expose }) => {
        const title = props.title;
        const palabra = ref('');
        const palabra2 = ref('');

        if (title.split(' ').length > 1) {
            palabra2.value = title.split(' ')[0];
            palabra.value = title.substring(title.indexOf(' ') + 1);

        } else {
            palabra.value = title;
        }


        return {
            palabra: palabra.value,
            palabra2: palabra2.value
        }

    },
}
</script>
    
    