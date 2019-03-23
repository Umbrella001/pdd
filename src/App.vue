<template>
  <div id="app">
    <!-- 路由组件 -->
    <router-view></router-view>
    <!-- 底部切换栏 -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  // 导入组件
import TabBar from './components/TabBar/TabBar'

export default {
  name: 'App',

  // 注册组件
  components:{
    TabBar
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  #app
    width: 100%
    height: 100%
</style>
