<template>
    <!-- <NavBar></NavBar> -->
    <div class="inline-block p-6 text-2xl font-extrabold text-center">
        Nosotros
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components:{
        NavBar : defineAsyncComponent( () => import('../components/NavBar.vue')),
    },
  
  methods : {
    
  }
}
</script>


