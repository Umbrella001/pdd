// 引入
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入一级路由
import Home from '../pages/Home/Home'
import Recommend from '../pages/Recommend/Recommend'
import Search from '../pages/Search/Search'
import Chat from '../pages/Chat/Chat'
import Me from '../pages/Me/Me'
// 声明使用
Vue.use(VueRouter);

// 输出路由对象
export default new VueRouter({
  // 配置routes对应的一级路由路径
    routes:[
      // 默认进来的界面 redirect
      {
        path:'/',
        redirect:'/home'
      },
      {
        path:'/home',
        component:Home
      },
      {
        path:'/recommend',
        component:Recommend
      },
      {
        path:'/search',
        component:Search
      },
      {
        path:'/chat',
        component:Chat
      },
      {
        path:'/me',
        component:Me
      }
    ]
})

