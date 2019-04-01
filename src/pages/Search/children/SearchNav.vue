<template>
  <div class="search-nav">
    <a class="search-nav-icon" href="" @click.prevent="isShowSearchPanel(true)">
      <img src="../images/search.png" alt="">
      <span>限量NARS口红</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "SearchNav",
    props:{
      isShowSearchPanel: Function
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  @import "~@/common/stylus/mixins.styl"
  .search-nav
    display flex
    position fixed
    z-index 98
    top 0
    left 0
    justify-content center
    align-items center
    width 100%
    height 60px
    background-color #fff
    border-bottom-1px(#eee)

    .search-nav-icon
      display flex
      justify-content center
      align-items center
      width 90%
      height 60%
      background-color #eeeeee
      border-radius 8px

      img
        width 7%

      span
        color #999999
        margin-left 5px
</style>
