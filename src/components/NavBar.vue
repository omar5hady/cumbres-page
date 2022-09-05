<template>
  <nav>
    <!-- Desktop menu -->
    <div class="bg-primary-900">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between">
          <!--Menu-->
          <div class="flex space-x-4">
            <!-- logo  -->
            <router-link
              :to="{ name: 'home' }"
              class="flex items-center space-x-2 py-2 px-1"
            >
              <img
                alt="Cumbres logo"
                src="../assets/logoDesktopblk.png"
                class="hidden md:flex w-56 relative text-white"
              />
              <img
                alt="Cumbres logo"
                src="../assets/logoMenu1.png"
                class="md:hidden h-20 px-2 text-white"
              />
              <!-- <span class="text-2xl font-bold text-white">Cumbres</span> -->
            </router-link>
            <!-- Menu options -->
            <div class="hidden md:flex items-center space-x-1">
              <!-- <router-link
                class="transition ease-in-out delay-150 flex py-2 px-4 text-white hover:text-secondary-900 hover:-translate-y-1 hover:scale-110 duration-300"
                :class="{
                  'text-primary-900 px-4 py-5 bg-white font-bold shadow-xl':
                    routeName === 'home',
                }"
                :to="{ name: 'home' }"
              >
                <svg
                  v-if="routeName == 'home'"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 px-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Inicio
              </router-link>
              <router-link
                class="transition ease-in-out delay-150 py-2 px-4 text-white hover:text-secondary-900 hover:-translate-y-1 hover:scale-110 duration-300"
                :class="{
                  'text-primary-900 px-4 py-5 bg-white font-bold shadow-xl':
                    routeName === 'proyectos',
                }"
                :to="{ name: 'home' }"
                >Proyectos</router-link
              >
              <router-link
                class="transition ease-in-out delay-150 py-2 px-4 text-white hover:text-secondary-900 hover:-translate-y-1 hover:scale-110 duration-300"
                :class="{
                  'text-primary-900 px-4 py-5 bg-white font-bold shadow-xl':
                    routeName === 'departamentos',
                }"
                :to="{ name: 'home' }"
                >Departamentos</router-link
              >
              <router-link
                class="transition ease-in-out delay-150 py-2 px-4 text-white hover:text-secondary-900 hover:-translate-y-1 hover:scale-110 duration-300"
                :class="{
                  'text-primary-900 px-4 py-5 bg-white font-bold shadow-xl':
                    routeName === 'modelos',
                }"
                :to="{ name: 'home' }"
                >Modelos</router-link
              >
              <router-link
                :to="{ name: 'about' }"
                class="transition ease-in-out delay-150 py-2 px-4 text-white hover:text-secondary-900 hover:-translate-y-1 hover:scale-110 duration-300"
                :class="{
                  'text-primary-900 px-4 py-5 bg-white font-bold shadow-xl':
                    routeName === 'about',
                }"
                href="#"
                @click="goToAbout()"
                >Nosotros</router-link
              > -->
            </div>
          </div>
          <!-- Contacto -->
          <!-- <div class="hidden md:flex items-center space-x-1">
            <router-link
              class="transition ease-in-out delay-150 py-5 px-2 text-white hover:text-secondary-900 hover:bg-white hover:-translate-y-1 hover:scale-110 duration-300"
              :class="{
                'text-primary-900 px-4 py-5 bg-white font-bold shadow-xl':
                  routeName === 'contacto',
              }"
              :to="{ name: 'home' }
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-10 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </router-link>
          </div> -->
          <!-- Button show mobile menu -->
          <!-- <div class="md:hidden flex items-center">
            <button @click="showMobileMenu = !showMobileMenu" class="py-2 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div> -->
        </div>
      </div>
    </div>
    <!-- Mobile menu -->
    <div class="md:hidden bg-secondary-900" v-show="showMobileMenu">
      <router-link
        :to="{ name: 'home' }"
        class="block py-2 px-4 hover:bg-white hover:text-secondary-900 hover:font-bold text-indigo-100"
      >
        Inicio</router-link
      >
      <router-link
        :to="{ name: 'home' }"
        class="block py-2 px-4 hover:bg-white hover:text-secondary-900 hover:font-bold text-indigo-100"
      >
        Proyectos</router-link
      >
      <router-link
        :to="{ name: 'home' }"
        class="block py-2 px-4 hover:bg-white hover:text-secondary-900 hover:font-bold text-indigo-100"
      >
        Departamentos</router-link
      >
      <router-link
        :to="{ name: 'about' }"
        class="block py-2 px-4 hover:bg-white hover:text-secondary-900 hover:font-bold text-indigo-100"
      >
        Modelos</router-link
      >
      <hr />
      <router-link
        :to="{ name: 'about' }"
        class="block py-2 px-4 hover:bg-white hover:text-secondary-900 hover:font-bold text-indigo-100"
      >
        Nosotros</router-link
      >
    </div>
  </nav>
</template>

<script>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const showMobileMenu = ref(false);
    const router = useRouter();

    const routeName = computed(() => router.currentRoute.value.name);

    //const routeName = ref(router.currentRoute.value.name);

    console.log(router.currentRoute.value.name);
    console.log(router);

    return {
      showMobileMenu,
      routeName,
    };
  },
};
</script>
