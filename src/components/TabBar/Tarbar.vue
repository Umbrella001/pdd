<template>
  <div class="tab-bar">
      <span class="tab-item" @click="tabPath('/home')">
        <img :src=" $route.path.includes('/home') ? tarBarImgs[0].selected : this.tarBarImgs[0].normal" alt="">
        <span :class="{textColor: $route.path.includes('/home')}">首页</span>
      </span>
    <span class="tab-item" @click="tabPath('/recommend')">
        <img :src=" $route.path.includes('/recommend') ? tarBarImgs[1].selected : this.tarBarImgs[1].normal" alt="">
        <span :class="{textColor: $route.path.includes('/recommend')}">推荐</span>
      </span>
    <span class="tab-item" @click="tabPath('/search')">
        <img :src="$route.path.includes('/search') ? tarBarImgs[2].selected : this.tarBarImgs[2].normal" alt="">
        <span :class="{textColor: $route.path.includes('/search')}">搜索</span>
      </span>
    <span class="tab-item" @click="tabPath('/chat')">
        <img :src="$route.path.includes('/chat') ? tarBarImgs[3].selected : this.tarBarImgs[3].normal" alt="">
        <span :class="{textColor: $route.path.includes('/chat')}">聊天</span>
      </span>
    <span class="tab-item" @click="tabPath('/me')">
        <img :src="$route.path.includes('/me') ? tarBarImgs[4].selected : this.tarBarImgs[4].normal" alt="">
        <span :class="{textColor: $route.path.includes('/me')}">个人中心</span>
      </span>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    data(){
      return{
        tarBarImgs:[
          {normal:'static/img/icon_home.png',selected:'static/img/icon_home_selected.png'},
          {normal:'static/img/icon_intro.png',selected:'static/img/icon_intro_selected.png'},
          {normal:'static/img/icon_search.png',selected:'static/img/icon_search_selected.png'},
          {normal:'static/img/icon_chat.png',selected:'static/img/icon_chat_selected.png'},
          {normal:'static/img/icon_mine.png',selected:'static/img/icon_mine_selected.png'},
        ]
      }
    },
    methods:{
      tabPath(path){
        // 可以查看$router内部原型链_proto_里的方法
        // console.log(this.$router);
        // 路由切换时使用$router中的replace切换属性 || $route则是取配置路由内部的元素path/component...
        this.$router.replace(path);
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.tab-bar
  position fixed
  z-index 99
  display flex
  width 100%
  height: 50px
  background-color #fff
  left 0
  bottom 0
  .tab-item
    display flex
    flex 1
    flex-direction column
    justify-content center
    align-items center
    font-size 14px
    color #666
    img
      width 35%
      margin-bottom 2px
    .textColor
      color red
</style>
