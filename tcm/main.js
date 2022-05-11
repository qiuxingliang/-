import Vue from 'vue'
// import jQuery from "@/common/js/jquery.min.js"
// import $ from "@/common/js/jquery-3.6.0.min.js" 
// import BootstrapVue from "@/common/js/bootstrap.min.js"
import App from './App' 
// console.log($)
// Vue.use(BootstrapVue,{}) 

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
