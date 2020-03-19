new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta: function(){
            alert('teste')
        },
        armazenarData(event){
            this.valor = event.target.value
        }
    }
})