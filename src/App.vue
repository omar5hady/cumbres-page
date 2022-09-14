<template>
  <router-view v-slot="{ Component, route }">
    <NavBar></NavBar>
    <transition name="fade" mode="out-in">
      <div :key="route.name">
        <Suspense>
          <component :is="Component" />
        </Suspense>

      </div>
    </transition>
  </router-view>
  <FooterComponent></FooterComponent>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    NavBar: defineAsyncComponent(() => import("../src/components/NavBar.vue")),
    FooterComponent: defineAsyncComponent(() => import('../src/components/FooterComponent.vue')),
  },

}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
