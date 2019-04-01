// 导入常量
import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_GOODS
} from "./mutation-types";

export default {
  // 1.首页轮播同步到state
  [HOME_CASUAL](state,{homecasual}){
    // 将异步获取的数据通过Mutation同步放到state中
    state.homecasual = homecasual;
  },
  // 2.首页图标导航同步到state
  [HOME_NAV](state,{homenav}){
    state.homenav = homenav;
  },
  // 3.首页商品列表同步到state
  [HOME_SHOP_LIST](state,{homeshoplist}){
    state.homeshoplist = homeshoplist;
  },
  // 4.推荐商品列表同步到state
  [RECOMMEND_SHOP_LIST](state,{recommendshoplist}){
    state.recommendshoplist = state.recommendshoplist.concat(recommendshoplist)
  },
  // 5.搜索菜单及商品列表同步到state
  [SEARCH_GOODS](state,{searchgoods}){
    state.searchgoods = searchgoods;
  }
}
