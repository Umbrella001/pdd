<template>
  <a class="recommend-list-item">
    <img :src="item.thumb_url" alt="" v-if="item.thumb_url" width="100%">
    <h4 class="item-title">{{item.short_name}}</h4>
    <div class="item-info">
      <span class="item-price">￥{{item.price / 100}}</span>
      <span class="item-sales">{{item.sales_tip}}</span>
      <button type="button" class="item-btn">找相关</button>
      <!--<span class="item-user">
        <img src="" alt="">
        <img src="" alt="">
      </span>-->
    </div>
  </a>
</template>

<script>
    export default {
      name: "ShopList",
      props:{
        item : Object
      }
    }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  .recommend-list-item
    width 49.5%
    padding-bottom 15px
    margin-bottom 15px
    background-color #fff
  .recommend-list-item:nth-child(2n-1)
    margin-right 1%
  .item-title
    font-size 13px
    height 20px
    line-height 20px
    overflow hidden
    margin  2px 8px
  .item-info
    display flex
    flex-direction row
    align-items center
    padding 0 6px
    .item-price
      flex 2
      font-size 12px
      font-weight bolder
      color #e9232c
    .item-sales
      flex 4
      font-size 10px
      color #666
    .item-btn
      flex 2
      height 26px
      border 1px solid orangered
      border-radius 4px
      background-color transparent
      font-size 12px
      color #e9232c
      margin-right 2px
    .item-user
      img
        width 50%
        border-radius 50%
      img:nth-child(2)
        margin-left -6px
</style>
