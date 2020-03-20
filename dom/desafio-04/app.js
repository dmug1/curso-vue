new Vue({
	el: '#desafio',
	data: {
		chosenEffect: ""
	},
	methods: {
		iniciarEfeito() {
			setInterval(function(){
				if (this.chosenEffect == ""){
					this.chosenEffect = 'destaque'
				} if(this.chosenEffect == "destaque"){
					this.chosenEffect = 'encolher'
				}else{
					this,chosenEffect = 'destaque'
				}
				console.log('Classe escolhida foi: ' + this.chosenEffect);
				return this.chosenEffect;
			}, 1000);
			
		},

		iniciarProgresso() {

		}
	}
})
