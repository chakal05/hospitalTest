// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*eslint-disable */
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App'
import router from './router'
import VeeValidate, {Validator} from 'vee-validate'
import fr from 'vee-validate/dist/locale/fr';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import underscore from 'vue-underscore'
Vue.use(router)
Vue.use(underscore)
Vue.use(axios)
Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VeeValidate)
Validator.localize('fr', fr)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})