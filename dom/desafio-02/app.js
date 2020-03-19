new Vue({
    el: '#desafio',
    data: {
        valor: '0'
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