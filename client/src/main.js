import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dataV from '@jiaminghi/data-view'
import ElementUI from 'element-ui'
import * as echarts from 'echarts'

Vue.config.productionTip = false

Vue.use(dataV);
Vue.use(ElementUI);

Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
