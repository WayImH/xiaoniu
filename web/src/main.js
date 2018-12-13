// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import header1 from "@/components/header1";
Vue.component("header1",header1)
import header2 from "@/components/header2";
Vue.component("header2",header2)
import footer from "@/components/footer";
Vue.component("myfooter",footer)


Vue.config.productionTip = false


import axios from "axios"
axios.defaults.baseURL = "http://47.106.175.186:3001"
Vue.prototype.$http = axios;




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
