import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
import { routes } from './routes'
import { mixins } from './mixins'
import './stylus/main.styl'

Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.use(Vuetify);

Vue.mixin(mixins);

const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
