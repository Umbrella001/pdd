<template>
  <div class="search-panel">
    <div class="panel-header">
      <div class="search-input">
        <img src="../images/search.png" alt="">
        <input type="search" placeholder="旅行者登山包男" ref="searchInput">
      </div>
      <button type="button" @click="isShowSearchPanel(false)">取消</button>
    </div>
    <div class="search-content">
      <div class="title">
        <img src="../images/hot.png" alt="" width="25">
        <span>热门搜索</span>
      </div>
      <ul class="content-items">
        <li>手机支架</li>
        <li>家用电器</li>
        <li>户外登山</li>
        <li>缤纷水果节</li>
        <li>抽纸批发</li>
        <li>科比同款球鞋</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchPanel",
    props: {
      isShowSearchPanel: Function
    },
    mounted(){
      this.$refs.searchInput.focus();
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  @import "~@/common/stylus/mixins.styl"
  .search-panel
    position fixed
    z-index 1000
    width 100%
    height 100%
    top 0
    left 0
    background-color #fff
    .panel-header
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      width 100%
      height 60px
      border-bottom-1px(#eee)
      padding 0 20px
      .search-input
        display flex
        flex-direction row
        align-items center
        width 88%
        height 40px
        border-radius 8px
        background-color #eee
        padding-left 16px
        input
          width 90%
          height 90%
          font-size 14px
          border-radius 8px
          padding-left 8px
          background-color transparent
          outline none
        img
          width 7%
      button
        font-size 16px
        color #aaa
        background-color transparent
    .search-content
      padding 20px 15px
      .title
        display flex
        flex-direction row
        align-items center
        color #aaa
        margin-bottom 10px
      .content-items
        display flex
        flex-direction row
        flex-wrap wrap
        margin 0 8px
        li
          width 33.3%
          padding 8px 0
          font-size 14px
          color #777777
</style>
