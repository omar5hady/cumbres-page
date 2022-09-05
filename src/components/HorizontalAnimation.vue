<template>
    <div ref="section2" class="hidden relative md:block m-auto w-full transition duration-500 ease-in-out" :class="bg" style="height:300vw">
      <div class="sticky top-0 flex justify-between items-center pt-8 pb-8 h-screen"
        style="width:300vw; will-change:transform; transform-style:preserve-3d"
        :style="{'transform' : 'translate3d(' + x + 'px,0px,0px)'}"
      >
      <br>
        <template v-for="image in images" :key="image">
           <!-- <div 
                class="bg-contain bg-center bg-no-repeat w-1/5 h-full" 
                :style="`background-image:url(${image})`"
           >
           </div> -->
           
           <div class="relative ">
                <a class="absolute inset-0 z-10 bg-secondary-900 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300">
                <h1  class=tracking-wider >Title</h1>
                <p  class="mx-auto">Description</p>
                </a>
                <a href="#" class="relative">
                    <div class="flex flex-wrap content-center w-96 h-full">
                        <img :src="image" class="mx-auto" alt="">
                    </div>
                </a>
            </div>
        </template>
      </div>
    </div>

    <div class="md:hidden bg-primary-900 my-10 py-5" >
        <Carousel :itemsToShow="2.15" :wrapAround="true">
            <Slide v-for="image in images" :key="image">
                <div class="carousel__item">
                    <a class="absolute inset-0 z-10 bg-secondary-900 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300">
                    <h1  class=tracking-wider >Title</h1>
                    <p  class="mx-auto">Description</p>
                    </a>
                    <img :src="image" class="w-52">
                </div>
            </Slide>
        </Carousel>
    </div>


    <div class="relative h-screen">
        <div class="flex flex-col justify-center w-full h-full text-center">
            <h1 class="text-5xl leading-normal font-semibold">
                Grupo Cumbres
            </h1>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { Carousel, Pagination, Slide } from 'vue3-carousel';

export default {
    props:{
        section: Object
    },
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    setup(props) {
        const images = ref([])
        const x = ref(null)
        const section2 = ref()
        const bg = ref('')

        const section1 = ref(props.section)

        images.value = [
            'src/assets/scrollHrz/1.jpg',
            'src/assets/scrollHrz/4.jpg',
            'src/assets/scrollHrz/2.jpg',
            'src/assets/scrollHrz/3.jpg',
            'src/assets/scrollHrz/5.jpg',
            'src/assets/scrollHrz/6.jpg',
            'src/assets/scrollHrz/4.jpg',
            'src/assets/scrollHrz/1.jpg',
        ]

        function handleScroll(){
            if(window.scrollY  <= section2.value.offsetHeight){
                x.value = -(window.scrollY - section1.value.offsetHeight) + 500
            }

             if(window.scrollY  >= section1.value.offsetHeight){
                x.value = -(window.scrollY - section1.value.offsetHeight) + 600
                bg.value = 'bg-primary-900'
            }

            if(window.scrollY <= section1.value.offsetHeight || window.scrollY -350  >= section2.value.offsetHeight)
                bg.value = 'bg-white'

            if( x.value <= -(section2.value.offsetHeight - window.innerWidth)){
                x.value = -(section2.value.offsetHeight - window.innerWidth)
            }
        }

        onMounted(() => {
            document.addEventListener('scroll', handleScroll)
        })

        return{
            images,
            section2,
            section1,
            bg,
            x,
            handleScroll

        }
      
    },
};
</script>

<style scoped>
    .carousel__slide > .carousel__item {
    transform: scale(1);
    opacity: 0.5;
    transition: 0.5s;
    }
    .carousel__slide--visible > .carousel__item {
    opacity: 1;
    transform: rotateY(0);
    }
    .carousel__slide--next > .carousel__item {
    transform: scale(0.9) translate(-10px);
    }
    .carousel__slide--prev > .carousel__item {
    transform: scale(0.9) translate(10px);
    }
    .carousel__slide--active > .carousel__item {
    transform: scale(1.1);
    }
</style>