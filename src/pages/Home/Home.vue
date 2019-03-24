<template>
  <div class="home">
    <ly-tab
    v-model="selectedId"
    :items="items"
    :options="options"
    @change="handleChange"
    class="navFix"
    />
  <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return{
        selectedId: 0,
        items: [
          {label: '热门'},
          {label: '服饰'},
          {label: '鞋包'},
          {label: '母婴'},
          {label: '百货'},
          {label: '食品'},
          {label: '内衣'},
          {label: '男装'},
          {label: '电器'}
        ],
        options: {
          activeColor: '#e9232c'
        },
        // 提取二级路由的路径path
        getChildrenUrl:['/home/hot','/home/dress','/home/shoe','/home/mbaby','/home/goods','/home/food','/home/shirt','/home/man','/home/fitment',]
      }
    },
    methods:{
      handleChange(item,index){
        this.$router.replace(this.getChildrenUrl[index])
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.home
  width: 100%
  height: 100%
  background-color: #f5f5f5
  .navFix
    position fixed
    z-index 98
    top 0
    left 0
    background-color rgba(255,255,255,.8)
</style>
