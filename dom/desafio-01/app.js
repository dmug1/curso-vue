new Vue ({
    el: '#desafio',
    data: {
        nome:  'Diego',
        idade: 30,
        imgGato: "_MG_9330.jpg"
    },
    methods: {
        multiplicar: function(){
            idadeMult = this.idade * 3;
            return idadeMult;
        },
        numeroRandom: function () {
            return Math.floor(Math.random() * Math.floor(2));
        },   
    }
})