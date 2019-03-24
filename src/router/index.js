// 引入
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入一级路由
import Home from '../pages/Home/Home'
import Recommend from '../pages/Recommend/Recommend'
import Search from '../pages/Search/Search'
import Chat from '../pages/Chat/Chat'
import Me from '../pages/Me/Me'
// 导入二级路由(Home页面中的头部导航区)
import Hot from 'pages/Home/children/Hot/Hot'
import Dress from 'pages/Home/children/Dress'
import Shoe from 'pages/Home/children/Shoe'
import Mbaby from 'pages/Home/children/Mbaby'
import Goods from 'pages/Home/children/Goods'
import Food from 'pages/Home/children/Food'
import Shirt from 'pages/Home/children/Shirt'
import Man from 'pages/Home/children/Man'
import Fitment from 'pages/Home/children/Fitment'
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
        component:Home,
        // Home下的二级路由children
        children:[
          // 默认进来的界面 热门板块
          {path:'/home',redirect: '/home/hot'},
          {path:'hot',component:Hot},
          {path:'dress',component:Dress},
          {path:'shoe',component:Shoe},
          {path:'mbaby',component:Mbaby},
          {path:'goods',component:Goods},
          {path:'food',component:Food},
          {path:'shirt',component:Shirt},
          {path:'man',component:Man},
          {path:'fitment',component:Fitment}
        ]
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

