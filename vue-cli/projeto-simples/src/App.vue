<template>
  <div id="app"> 
    {{ titulo }} <br>
    <button @click="titulo += '#'"> Adicionar # </button>
  </div>
</template>

<script>
export default{
  data: function() {
    return {
      titulo: 'Teste DAta usando Vue JS!!'
    }
  }
}

</script>

<style>
  #app{
    background-color: chocolate;
    color: #fff;
  }
</style>