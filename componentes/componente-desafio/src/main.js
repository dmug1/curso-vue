import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Carousels from './Carousels.vue'

Vue.config.productionTip = false
Vue.component('app-carousels',Carousels)

new Vue({
  render: h => h(App),
}).$mount('#app')
