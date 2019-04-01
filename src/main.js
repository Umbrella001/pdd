import Vue from 'vue'
import App from './App'
import store from './store/index'
import { Button, Cell } from 'mint-ui'


// 引入路由器
import router from './router/index'
// 引入头部导航栏的第三方组件
import LyTab from 'ly-tab'

// 配置mint-ui
import { Actionsheet } from 'mint-ui';
Vue.component(Actionsheet.name, Actionsheet);

import { DatetimePicker } from 'mint-ui';
Vue.component(DatetimePicker.name, DatetimePicker);

// 声明使用组件
Vue.use(LyTab);

new Vue({
  el:'#app',
  router,
  store,
  // 渲染根组件
  render : h => h(App)
});
