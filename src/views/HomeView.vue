<template>
  <div class="inline-block p-6 text-2xl font-extrabold text-center">
    <CarouselComponent></CarouselComponent>
  </div>
  <div ref="section" class="bg-white p-6 text-2xl font-extrabold text-center items-center">
    <GalleryComponent></GalleryComponent>
  </div>
  <div class="p-6 text-2xl font-extrabold text-center items-center">
    <HorizontalAnimation :section="section"></HorizontalAnimation>
  </div>

</template>

<script>
import { defineAsyncComponent, ref } from "vue";
export default {
  components: {
    NavBar: defineAsyncComponent(() => import("../components/NavBar.vue")),
    CarouselComponent: defineAsyncComponent(() =>
      import("../components/CarouselComponent.vue")
    ),
    GalleryComponent: defineAsyncComponent(() =>
      import("../components/GalleryComponent.vue")
    ),
    HorizontalAnimation: defineAsyncComponent(() =>
      import("../components/HorizontalAnimation.vue")
    ),
  },

  setup() {
    const section = ref(null)

    return {
      section
    }
  }
};
</script>
