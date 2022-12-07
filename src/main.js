import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import modalPlugins from './plugins/modalPlugins'
import vuetify from './plugins/vuetify'
import context from './plugins/contextMenu'

Vue.config.productionTip = false
Vue.use(modalPlugins)
Vue.use(context)
new Vue({
  store,
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
