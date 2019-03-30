import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList
} from '../api'

import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST
} from "./mutation-types";

export default {
  // 获取首页轮播图 异步声明async
  async reqHomeCasual({commit}) {
    // 等待getHomeCasual返回的Promise对象,getHomeCasual()方法调用了ajax
    const result = await getHomeCasual();
    // 将请求数据中的json代码提取作为结果返回result,从result中拿到对应的数据（数组）赋值给homecasual
    commit(HOME_CASUAL, {homecasual: result.message.data})
  },
  // 获取首页Icon导航
  async reqHomeNav({commit}){
    const result = await getHomeNav();
    commit(HOME_NAV,{homenav:result.message.data})
  },
  // 获取首页商品列表
  async reqHomeShopList({commit}){
    const result = await getHomeShopList();
    commit(HOME_SHOP_LIST,{homeshoplist:result.message.goods_list})
  }
}
