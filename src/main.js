import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import modalPlugins from './plugins/modalPlugins'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(modalPlugins)

new Vue({
  store,
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
