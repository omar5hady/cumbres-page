<template>
  <section class="overflow-hidden text-gray-700 max-w-7xl mx-auto">
    <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
      <div class="flex flex-wrap -m-4 md:-m-10">
        <div class="flex flex-wrap w-1/2">
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              @click="openModal('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp')"
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              @click="openModal('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp')"
            />
          </div>
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              @click="openModal('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp')"
            />
          </div>
        </div>
        <div class="flex flex-wrap w-1/2">
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- The Modal -->
    <div id="modal" v-show="showModal" 
        @click.self="closeModal()"
        class="modal-content transition fade-in delay-2550 fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center">

        <!-- The close button -->
        <button class="fixed z-90 top-6 right-8 text-white text-5xl font-bold"
            @click.self="closeModal()">&times;</button>

        <!-- A big image will be displayed here -->
        <img :src="imgView" class="max-w-100 object-cover" />
    </div>


</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
        const showModal = ref(false)
        const imgView = ref('')

        return{
            showModal,
            imgView,
            
            openModal: (src) => {
                showModal.value = true
                imgView.value = src;
            },
            closeModal: () => {
                showModal.value = false
                imgView.value = src;
            },

        }
    }
};
</script>
<style scoped>
  .modal-content{
        width: 100% !important;
        position: absolute !important;
        position: fixed !important;
        overflow-y: none;
    }
    img{
      cursor: pointer;
    }
</style>
