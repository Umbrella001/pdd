import Vue from 'vue'
import App from './App'
import store from './store/index'

// 引入路由器
import router from './router/index'
// 引入头部导航栏的第三方组件
import LyTab from 'ly-tab'
// 声明使用组件
Vue.use(LyTab);

new Vue({
  el:'#app',
  router,
  store,
  // 渲染根组件
  render : h => h(App)
});
