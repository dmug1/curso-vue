<template>
 <div id="containerfotos">
    <div >
        <img v-for="c in fotos" :key='c.src' v-bind:src="c.src" />
    </div>
  </div>
</template>

<script>

export default {


    data(){
        return{
            fotos: [
                    {src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
                    {src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
                    {src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
                    {src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'}
            ]
        }
    }
}
</script>

<style>
</style>