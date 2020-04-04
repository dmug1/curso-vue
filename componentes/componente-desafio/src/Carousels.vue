<template>   
    <div class='carousel'>
        <app-carousel v-for="i in 4" :key='i'></app-carousel>
    </div>
</template>

<script>
import Carousel from './Carousel.vue'

export default {
    components: {
        'app-carousel': Carousel
    }
}
    
    
</script>

<style scoped>



    div {
        border: 1px solid red;
    }


</style>