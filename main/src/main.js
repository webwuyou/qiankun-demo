import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'vue1',
    entry: '//localhost:8081',
    container: '#container',
    activeRule: '/app-vue1',
  },
  {
    name: 'vue2',
    entry: '//localhost:8082',
    container: '#container',
    activeRule: '/app-vue2',
  },
]);
// 启动 qiankun
start();
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
