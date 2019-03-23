<template>
    <div class="tab-bar">
      <span class="tab-item" @click="tabPath('/home')">
        <img :src="'/home' === $route.path ? tarBarImgs[0].selected : this.tarBarImgs[0].normal" alt="">
        <span :class="{textColor: '/home' === $route.path}">首页</span>
      </span>
      <span class="tab-item" @click="tabPath('/recommend')">
        <img :src="'/recommend' === $route.path ? tarBarImgs[1].selected : this.tarBarImgs[1].normal" alt="">
        <span :class="{textColor: '/recommend' === $route.path}">推荐</span>
      </span>
      <span class="tab-item" @click="tabPath('/search')">
        <img :src="'/search' === $route.path ? tarBarImgs[2].selected : this.tarBarImgs[2].normal" alt="">
        <span :class="{textColor: '/search' === $route.path}">搜索</span>
      </span>
      <span class="tab-item" @click="tabPath('/chat')">
        <img :src="'/chat' === $route.path ? tarBarImgs[3].selected : this.tarBarImgs[3].normal" alt="">
        <span :class="{textColor: '/chat' === $route.path}">聊天</span>
      </span>
      <span class="tab-item" @click="tabPath('/me')">
        <img :src="'/me' === $route.path ? tarBarImgs[4].selected : this.tarBarImgs[4].normal" alt="">
        <span :class="{textColor: '/me' === $route.path}">个人中心</span>
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
  // 选项卡在移动端一般都是使用flex弹性盒子布局及fixed布局
.tab-bar
  z-index 99
  position fixed
  display flex
  width: 100%
  height: 50px
  left 0
  bottom 0
  background-color: #fff
  .tab-item
    display flex
    flex 1
    /*
    ① 图标和字体是要垂直方向排列为一个盒子，在tab-item中flex的方向就是垂直的
    ② justify-content 决定item在主轴上的对齐方式
    ③ align-items 决定了item在交叉轴上的对齐方式
    ④ flex 1 唯一在主体盒子上（tab-bar）每个小盒子（tab-item）平均分布
    */
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
