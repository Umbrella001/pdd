// 导入常量
import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST
} from "./mutation-types";

export default {
  [HOME_CASUAL](state,{homecasual}){
    // 将异步获取的数据通过Mutation同步放到state中
    state.homecasual = homecasual;
  },
  [HOME_NAV](state,{homenav}){
    state.homenav = homenav;
  },
  [HOME_SHOP_LIST](state,{homeshoplist}){
    state.homeshoplist = homeshoplist;
  }
}
