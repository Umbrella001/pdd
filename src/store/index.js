// 导入源文件
import Vue from 'vue'
import Vuex from 'vuex'

// 声明使用Vuex
Vue.use(Vuex);

// 导入Vuex状态管理属性
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

// 对外输出Vuex.store对象
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
