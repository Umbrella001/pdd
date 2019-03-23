import Vue from 'vue'
import App from './App'

// 引入路由器
import router from './router/index'

new Vue({
  el:'#app',
  router,
  // 渲染根组件
  render : h => h(App)
});
