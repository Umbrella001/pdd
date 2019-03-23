<template>
  <div id="app">
    <!-- 路由组件 -->
    <router-view></router-view>
    <!-- 底部选项卡栏 -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/TabBar/Tarbar'
export default {
  name: 'App',
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
