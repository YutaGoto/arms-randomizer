import Vue from 'vue'
import 'uikit/dist/js/uikit.js'
import 'uikit/dist/css/uikit.css'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
